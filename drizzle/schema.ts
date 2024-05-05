import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const UserTable = sqliteTable("user", {
  id: text("id").primaryKey().default(crypto.randomUUID()),
});
