import type { AwaitedReactNode } from "react";

import { sql } from "drizzle-orm";
import { UserTable } from "~/drizzle/schema";
import { db } from "~/lib/db";

export default async function DashboardPage(): Promise<AwaitedReactNode> {
  const users = await db
    .select({ id: UserTable.id })
    .from(UserTable)
    .where(sql`${UserTable.id} = ${"1"}`);

  console.log(users);

  return (
    <>
      <section>
        <h2>Dashboard Page</h2>
        {JSON.stringify(users)}
      </section>
    </>
  );
}
