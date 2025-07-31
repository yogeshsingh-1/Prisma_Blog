import { Hono } from "hono";
import { decode, verify, sign } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {
  getCookie,
  getSignedCookie,
  setCookie,
  setSignedCookie,
  deleteCookie,
} from "hono/cookie";
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET: string;
  };
}>();

// signup
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  //  return c.text("hello")

  try {
    console.log("hello")
    const body = await c.req.json();

    // const body  = await c.req.parseBody();
    if (!body || !body?.email || !body?.password || !body?.username) {
      c.status(400);
      return c.json({
        error: "All fields (email, password, name) are required.",
      });
    }
    console.log(body);
    try {
      const user = await prisma.user.create({
        data: {
          email: String(body.email),
          username: String(body.username),
          password: String(body.password),
        },
      });

      const token = await sign({ id: user.id }, c.env.SECRET, "HS256");
      setCookie(c, "token", token);
      return c.json({ token: token, message: "Signup Completed" });
      // return c.redirect('/');
    } catch (E) {
      c.status(401);
      return c.json({ error: "User Email Already exist" });
    }
  } catch (E) {
    return c.json({ error: "Fill  All existing data" });
  }
});

// signin
userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    interface User {
      email: string;
      password: string;
    }
    const body: User = await c.req.json();
    console.log(body)
    // const body  = await c.req.parseBody();

    if (!body || !body?.email || !body?.password) {
      c.status(400);
      return c.json({
        error: "All fields (email, password) are required.",
      });
    }

    const user = await prisma.user.findFirst({
      where: { email: String(body.email), password: String(body.password) },
    });
    if (!user?.id) {
      c.status(403);
      return c.json({ message: "Email or Password not matched" });
    }
    const token = await sign({ id: user.id, name: user.email }, c.env.SECRET);
    setCookie(c, 'token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 1000 * 60 * 60 * 6,
      sameSite: "lax"
    });
    return c.json({ id: user.id, token: token, message: "signin completed" });
    // return c.redirect('/');
  } catch (e) {
    return c.json({ message: "File all the data" });
  }
});
