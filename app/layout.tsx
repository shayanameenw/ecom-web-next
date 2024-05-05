import type { PropsWithChildren, ReactNode } from "react";

import "~/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<PropsWithChildren>): ReactNode {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
