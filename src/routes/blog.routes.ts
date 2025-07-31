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



// bulk blog
// Todo : add pagination
blogRouter.get('/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const token = getCookie(c, "token");
    console.log('🧁 Received Cookie Token:', token);
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        author: {
          select: {
            username: true
          }
        }
      }
    });
    // console.log(blogs);
    if (blogs.length > 0) {
      c.json(200);
      return c.json({ success: true, blog: blogs })
    }
  } catch (e) {
    c.json(500);
    return c.json({ success: false, message: 'server side error' })
  }
})

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
            username: true
          }
        }
      }
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



blogRouter.use("/*", async (c, next) => {

  try {
    // const token = getCookie(c, 'token');
    const token = await c.req.header("token") || "";

    console.log("token", token)
    if (!token) {
      return c.json({ message: "Invalid token" });
    }
    const decode = await verify(token, c.env.SECRET);
    console.log("Debug Output:", decode);
    c.set("userId", Number(decode.id));
    console.log("userId : ", c.get("userId"));
    await next();
  } catch (err) {
    c.status(403);
    return c.text("Invalid or missing token");
  }
});

// add Blog
blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  console.log("hello", body);

  if (!body || !body?.title || !body.content) {
    c.status(403)
    return c.json({ success: false, message: "Invalid Body!" });
  }
  // const body = await c.req.parseBody();
  const blog = await prisma.blog.create({
    data: {
      title: String(body.title),
      content: String(body.content),
      published: Boolean(body.published),
      authorId: c.get("userId"),
    },
  });
  // return c.redirect('/api/v1/blog/bulk')
  return c.json({ blog: blog, message: "Blog Added" });
});

// update blog by id
blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();

    const blog = await prisma.blog.update({
      where: {
        id: body.id, //  Blog Id
        authorId: c.get("userId"), //  Only allow user to update their own blog
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
      },
    });
    c.status(200);
    return c.json({ blog: blog, message: "Blog Updated Succesfully" });
  } catch (e) {
    return c.json({ message: "Your are not valid author" });
  }
});


