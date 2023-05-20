import { config as dotenvConfig } from "dotenv";
if (process.env.NODE_ENV !== "test") {
  dotenvConfig();
}

const getRequiredEnvVar = (name: string) => {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing required environment variable ${name}`);
    process.exit(1);
  }
  return value;
};

export const config = {
  db: {
    host: getRequiredEnvVar("POSTGRES_HOST"),
    user: getRequiredEnvVar("POSTGRES_USER"),
    port: getRequiredEnvVar("POSTGRES_PORT"),
    password: getRequiredEnvVar("POSTGRES_PASSWORD"),
    database: getRequiredEnvVar("POSTGRES_DB"),
  },
  port: parseInt(process.env.PORT || "8000", 10),
};

export type ConfigType = typeof config;
