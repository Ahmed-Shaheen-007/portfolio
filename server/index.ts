import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Set environment
app.set("env", process.env.NODE_ENV || "development");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  console.error("Server Error:", err);
  res.status(status).json({ message });
});

(async () => {
  try {
    const server = await registerRoutes(app);

    const isDevelopment = app.get("env") === "development";
    
    if (isDevelopment) {
      log("🔧 Setting up Vite development server...");
      await setupVite(app, server);
    } else {
      log("📦 Setting up static file serving...");
      serveStatic(app);
    }

    const port = parseInt(process.env.PORT || "5000", 10);
    server.listen(port, "0.0.0.0", () => {
      log(`✅ Server running on port ${port}`);
      log(`🌐 Environment: ${isDevelopment ? "development" : "production"}`);
      if (isDevelopment) {
        log(`🚀 Frontend: http://localhost:${port}`);
        log(`🔧 Backend API: http://localhost:${port}/api`);
      }
    });

    // Graceful shutdown
    process.on("SIGTERM", () => {
      log("🛑 SIGTERM received, shutting down gracefully");
      server.close(() => {
        log("✅ Server closed");
        process.exit(0);
      });
    });

    process.on("SIGINT", () => {
      log("🛑 SIGINT received, shutting down gracefully");
      server.close(() => {
        log("✅ Server closed");
        process.exit(0);
      });
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
})();
