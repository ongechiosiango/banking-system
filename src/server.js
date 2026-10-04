// src/server.js
import express from "express";

/**
 * Create the Express app.
 * Kept as a factory so tests can inject an in-memory database later.
 */
export function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "banking-system", version: "0.1.0" });
  });

  return app;
}
