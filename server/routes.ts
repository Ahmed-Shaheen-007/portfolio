import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });

  // API info endpoint
  app.get("/api", (req: Request, res: Response) => {
    res.json({
      message: "Portfolio API",
      version: "1.0.0",
      endpoints: {
        health: "/api/health",
        info: "/api"
      }
    });
  });

  // Example API routes (you can expand these based on your needs)
  app.get("/api/projects", async (req: Request, res: Response) => {
    try {
      // This would typically come from a database
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
          title: "GDG Hackathon – Easefunds",
          description: "Intelligent personal finance platform with AI insights",
          technologies: ["Python", "AI/ML", "Flask", "Data Analysis"],
          status: "Hackathon Winner",
          year: "2024"
        },
        {
          id: 3,
          title: "VITA – Smart Health Monitoring",
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

  // Contact form endpoint (if you want to add contact functionality)
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Here you would typically save to database or send email
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

  // 404 handler for API routes
  app.use("/api/*", (req: Request, res: Response) => {
    res.status(404).json({ error: "API endpoint not found" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
