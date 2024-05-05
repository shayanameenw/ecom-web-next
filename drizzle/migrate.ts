import "dotenv/config";

import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";

if (!process.env.TURSO_DATABASE_URL) {
  throw new Error("TURSO_DATABASE_URL is not set");
}

if (!process.env.TURSO_AUTH_TOKEN) {
  throw new Error("TURSO_AUTH_TOKEN is not set");
}

const migrationClient = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

async function main() {
  await migrate(drizzle(migrationClient, { logger: true }), {
    migrationsFolder: "./drizzle/migrations",
  });

  migrationClient.close();
}

main()
  .then(() => {
    console.log("Migration complete!");
  })
  .catch((error) => {
    console.log("Migration failed!", error);
  });
