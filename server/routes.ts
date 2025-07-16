import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download route
  app.get("/api/resume/download", (req, res) => {
    const resumePath = path.join(process.cwd(), "attached_assets", "resume_1752699066395.pdf");
    
    // Set headers for file download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Yiran_Wang_Resume.pdf"');
    
    // Send the file
    res.sendFile(resumePath, (err) => {
      if (err) {
        console.error('Error sending resume file:', err);
        res.status(404).json({ error: 'Resume file not found' });
      }
    });
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
