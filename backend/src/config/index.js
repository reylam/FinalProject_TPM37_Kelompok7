const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  appUrl: process.env.APP_URL || "http://localhost:3000",

  // Validation
  validateConfig: () => {
    const required = ["DATABASE_URL", "JWT_SECRET"];
    const missing = required.filter((key) => !process.env[key]);

    if (missing.length > 0) {
      throw new Error(
        `Missing required environment variables: ${missing.join(", ")}`,
      );
    }
  },
};
