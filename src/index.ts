import { Hono } from "hono";
import { userRouter } from "./routes/user.routes";
import { blogRouter } from "./routes/blog.routes";
import { getCookie } from "hono/cookie";
import { verify } from "hono/jwt";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET: string;
  };
}>();
// cors middleware
app.use(
  "*",
  cors({
    origin: ["https://medium-blog-6opn.vercel.app", "http://localhost:5173"],
    credentials: true,
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "OPTIONS"],
    exposeHeaders: ["Set-Cookie"],
  })
);

// routes
app.get("/", (c) => {
  return c.json("Welcome our backend api Blog");
});
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
