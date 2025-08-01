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
app.use('/api/v1/*', cors({
  origin: 'http://localhost:5173',
  credentials: true,
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'OPTIONS']
}))

// routes
app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Navbar</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <!-- Navbar -->
      <nav class="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
        <div class="text-xl font-bold">
          <a href="/">MyBlog</a>
        </div>

        <div class="flex items-center space-x-4">
        <a href="/api/v1/blog/bulk" class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">All Blogs</a>
          <a href="/api/v1/blog" class="bg-green-500 hover:bg-green-700 px-4 py-2 rounded">Add Blog</a>

          <!-- Dropdown -->
          <div class="relative group">
            <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
              Blog Options ▼
            </button>
            <div class="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg z-10">
              <a href="/update-blog" class="block px-4 py-2 hover:bg-gray-100">Update Blog</a>
              <a href="/see-blog" class="block px-4 py-2 hover:bg-gray-100">See Blog</a>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <a href="/signin" class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">Sign In</a>
          <a href="/signup" class="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">Sign Up</a>
        </div>
      </nav>
    </body>
    </html>
  `)
})



export default app;
