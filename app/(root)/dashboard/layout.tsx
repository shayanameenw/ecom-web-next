import type { PropsWithChildren, ReactNode } from "react";

export default function DashboardLayout({
  children,
}: Readonly<PropsWithChildren>): ReactNode {
  return <main>{children}</main>;
}
