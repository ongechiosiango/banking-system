// tests/health.test.js
import { describe, it, expect } from "vitest";
import request from "supertest";
import { createApp } from "../src/server.js";

describe("GET /health", () => {
  it("returns 200 with status ok and service name", async () => {
    const app = createApp();
    const res = await request(app).get("/health");

    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(res.body.service).toBe("banking-system");
  });

  it("returns JSON content type", async () => {
    const app = createApp();
    const res = await request(app).get("/health");

    expect(res.headers["content-type"]).toMatch(/application\/json/);
  });
});
