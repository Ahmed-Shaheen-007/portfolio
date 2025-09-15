// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";
async function registerRoutes(app2) {
  app2.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });
  app2.get("/api", (req, res) => {
    res.json({
      message: "Portfolio API",
      version: "1.0.0",
      endpoints: {
        health: "/api/health",
        info: "/api"
      }
    });
  });
  app2.get("/api/projects", async (req, res) => {
    try {
      const projects = [
        {
          id: 1,
          title: "CAUGHT-IN-CLASS",
          description: "Intelligent classroom attendance system using Python and OpenCV",
          technologies: ["Python", "OpenCV", "YOLO", "NumPy", "Pandas"],
          status: "Completed",
          year: "2024"
        },
        {
          id: 2,
          title: "GDG Hackathon \u2013 Easefunds",
          description: "Intelligent personal finance platform with AI insights",
          technologies: ["Python", "AI/ML", "Flask", "Data Analysis"],
          status: "Hackathon Winner",
          year: "2024"
        },
        {
          id: 3,
          title: "VITA \u2013 Smart Health Monitoring",
          description: "Web-based health assistant with OCR and AI analysis",
          technologies: ["Python", "Flask", "Tesseract OCR", "Pandas"],
          status: "In Progress",
          year: "2024"
        }
      ];
      res.json({ projects });
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      console.log("Contact form submission:", { name, email, message });
      res.json({
        success: true,
        message: "Thank you for your message! I'll get back to you soon."
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Failed to process contact form" });
    }
  });
  app2.use("/api/*", (req, res) => {
    res.status(404).json({ error: "API endpoint not found" });
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { cartographer } from "@replit/vite-plugin-cartographer";
var vite_config_default = defineConfig(({ mode }) => ({
  // GitHub Pages base path
  base: "/portfolio/",
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...mode !== "production" && process.env.REPL_ID !== void 0 ? [cartographer()] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "client", "index.html")
      }
    }
  },
  server: {
    fs: {
      strict: false,
      allow: [".."]
    },
    port: 3e3,
    open: true,
    cors: true
  },
  preview: {
    port: 3e3,
    open: true
  }
}));

// server/vite.ts
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: path2.resolve(import.meta.dirname, "..", "vite.config.ts"),
    server: {
      middlewareMode: true,
      hmr: { server }
    },
    appType: "spa",
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        console.error("Vite Error:", msg, options);
      }
    }
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      console.error("Vite setup error:", e);
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.set("env", process.env.NODE_ENV || "development");
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((err, _req, res, _next) => {
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
      log("\u{1F527} Setting up Vite development server...");
      await setupVite(app, server);
    } else {
      log("\u{1F4E6} Setting up static file serving...");
      serveStatic(app);
    }
    const port = parseInt(process.env.PORT || "5000", 10);
    server.listen(port, "0.0.0.0", () => {
      log(`\u2705 Server running on port ${port}`);
      log(`\u{1F310} Environment: ${isDevelopment ? "development" : "production"}`);
      if (isDevelopment) {
        log(`\u{1F680} Frontend: http://localhost:${port}`);
        log(`\u{1F527} Backend API: http://localhost:${port}/api`);
      }
    });
    process.on("SIGTERM", () => {
      log("\u{1F6D1} SIGTERM received, shutting down gracefully");
      server.close(() => {
        log("\u2705 Server closed");
        process.exit(0);
      });
    });
    process.on("SIGINT", () => {
      log("\u{1F6D1} SIGINT received, shutting down gracefully");
      server.close(() => {
        log("\u2705 Server closed");
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("\u274C Failed to start server:", error);
    process.exit(1);
  }
})();
