import { Hono } from 'hono'
import { decode, verify, sign } from 'hono/jwt';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
// const app = new Hono()

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    SECRET: string
  }
}>();

app.get('/', (c) =>
  c.text("hello")
);

app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL, }).$extends(withAccelerate());
  const body = await c.req.json();
  //  return c.text("hello")
  if (!body?.email || !body?.password || !body?.name) {
    c.status(400);
    return c.json({ error: "All fields (email, password, name) are required." });
  }
  try{
    const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      password: body.password
    }
  })

  // if (!user.id) {
  //   c.status(401);
  //   return c.json({ error: "User Email Already exist" })
  // }
  return c.json({ data: user });
  }catch(E){
     return c.json({ error: "User Email Already exist" })
  }
})
app.post('/api/v1/signin', async (c) => {
  const prisma = new PrismaClient({ datasourceUrl: c.env.DATABASE_URL, }).$extends(withAccelerate());
  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: { email: body.email }
  });
  if (!user?.id) {
    return c.json({ message: "Email or Password not matched" });
  }
  const token = await sign({ id: user.id, name: user.email }, c.env.SECRET);
  return c.json({ data: { id: user.id }, token: token });
})

app.post('/api/v1/blog/*', async (c, next) => {
  const token = await c.req.header("token") || "";
  try {
    const decode = await verify(token, c.env.SECRET);
    console.log('Debug Output:', decode);
    await next(); 
  } catch (err) {
    c.status(403);
    return c.text("Invalid or missing token");
  }
});

app.put('/api/v1/blog', (c) => {
  return c.text("");
})
app.get('/api/v1/blog/:id', (c) => {
  return c.text("");
})


export default app;
