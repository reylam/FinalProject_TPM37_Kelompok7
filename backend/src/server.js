const config = require("./config");
const app = require("./app");
const prisma = require("./database/client");

// Validate configuration
try {
  config.validateConfig();
} catch (error) {
  console.error("Configuration error:", error.message);
  process.exit(1);
}

const startServer = async () => {
  try {
    // Test database connection
    await prisma.$connect();
    console.log("✅ Database connected successfully");

    const server = app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
      console.log(`Environment: ${config.nodeEnv}`);
      console.log(`API URL: ${config.appUrl}/api`);
    });

    // Graceful shutdown
    const gracefulShutdown = async () => {
      console.log("\nShutting down gracefully...");

      server.close(async () => {
        await prisma.$disconnect();
        console.log("Database disconnected");
        console.log("Server closed");
        process.exit(0);
      });

      setTimeout(() => {
        console.error("Force shutdown after timeout");
        process.exit(1);
      }, 10000);
    };

    process.on("SIGTERM", gracefulShutdown);
    process.on("SIGINT", gracefulShutdown);
  } catch (error) {
    console.error("Failed to start server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

startServer();
