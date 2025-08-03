import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { getCookie } from "hono/cookie";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET: string;
  };
  Variables: {
    userId: number;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  try {
    // console.log("hello");
    const token = (await c.req.header("authorization")) || "";

    // console.log(await c.req.header());
    if (!token) {
      c.status(401);
      return c.json({ status: false, message: "Invalid token" });
    }
    const decode = await verify(token, c.env.SECRET);
    console.log("Debug Output:", decode);
    c.set("userId", Number(decode.id));
    // console.log("userId : ", c.get("userId"));
    await next();
  } catch (err) {
    c.status(401);
    return c.json({ status: false, message: "Invalid token" });
  }
});
// bulk blog
// Todo : add pagination
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    // const token = getCookie(c, "token");
    // console.log('🧁 Received Cookie Token:', token);
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        author: {
          select: {
            username: true,
          },
        },
      },
    });
    // console.log(blogs);
    if (blogs.length > 0) {
      c.json(200);
      return c.json({ success: true, blog: blogs });
    }
  } catch (e) {
    c.json(500);
    return c.json({ success: false, message: "server side error" });
  }
});

// get a blog based on any id
blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const param = c.req.param();
    const blog = await prisma.blog.findFirst({
      where: {
        id: parseInt(param.id), //Blog Id
      },
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        author: {
          select: {
            username: true,
          },
        },
      },
    });
    if (blog) {
      c.status(200);
      return c.json({ blog: blog, message: "Blog Showing with given id" });
    } else {
      c.status(200);
      return c.json({ blog: blog });
    }
  } catch (e) {
    return c.json({ message: "Error " });
  }
});

// blogRouter.use("/*", async (c, next) => {

//   try {
//     console.log("hello")
//     const token = await c.req.header("authorization") || "";
//     console.log(token)
//     if (!token) {
//       c.status(401);
//       return c.json({ status: false, message: "Invalid token" });
//     }
//     const decode = await verify(token, c.env.SECRET);
//     console.log("Debug Output:", decode);
//     c.set("userId", Number(decode.id));
//     console.log("userId : ", c.get("userId"));
//     await next();
//   } catch (err) {
//     c.status(401);
//     return c.json({ status: false, message: "Invalid token" });
//   }
// });

// add Blog

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  console.log("hello", body);

  if (!body || !body?.title || !body.content) {
    c.status(403);
    return c.json({ success: false, message: "Invalid Body!" });
  }
  // const body = await c.req.parseBody();
  try {
    const blog = await prisma.blog.create({
      data: {
        title: String(body.title),
        content: String(body.content),
        published: Boolean(body.published),
        authorId: c.get("userId"),
      },
    });

    return c.json({ success: true, id: blog.id, message: "Blog Added" });
  } catch (e) {
    c.status(500);
    return c.json({ success: false, message: "Blog Not added" });
  }
});

// update blog by id
blogRouter.put("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const { id } = await c.req.param();
    console.log("id", id);
    console.log("body", body);
    if (!body) {
      c.status(403);
      return c.json({ success: false, message: "Id is not found" });
    }
    const blog = await prisma.blog.update({
      where: {
        id: Number(id), //  Blog Id
        authorId: c.get("userId"), //  Only allow user to update their own blog
      },
      data: {
        title: body.title,
        content: body.content,
        // published: body.published,
      },
    });
    c.status(200);
    return c.json({ success: true, message: "Blog Updated Succesfully" });
  } catch (e) {
    c.status(403);
    return c.json({ success: false, message: "Your are not valid author" });
  }
});
