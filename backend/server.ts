import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";

const app = express();

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Custom JSON parser with better error handling
app.use(express.json({
  verify: (req: any, res, buf, encoding) => {
    try {
      JSON.parse(buf.toString());
    } catch (e: any) {
      console.error('JSON Parse Error - Raw body:', buf.toString());
      console.error('Error:', e.message);
      throw new Error('Invalid JSON');
    }
  }
}));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use("/auth", authRoutes);

// Error handling middleware - must be after routes
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err.type === 'entity.parse.failed' || err.message === 'Invalid JSON') {
    console.error('Failed to parse JSON from request');
    console.error('URL:', req.url);
    console.error('Method:', req.method);
    return res.status(400).json({ error: 'Invalid JSON in request body' });
  }

  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

console.log("Attempting to start server...");
const server = app.listen(5000, () => console.log("Backend running on 5000"));

server.on("error", (err) => {
  console.error("Failed to start server:", err);
});
