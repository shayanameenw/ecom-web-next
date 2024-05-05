const TURSO_DATABASE_URL = process.env.TURSO_DATABASE_URL;
const TURSO_AUTH_TOKEN = process.env.TURSO_AUTH_TOKEN;

if (!TURSO_DATABASE_URL) {
  throw new Error("TURSO_DATABASE_URL is required");
}

if (!TURSO_AUTH_TOKEN) {
  throw new Error("TURSO_AUTH_TOKEN is required");
}

export const env = {
  TURSO_DATABASE_URL,
  TURSO_AUTH_TOKEN,
};
