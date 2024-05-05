import { redirect } from "next/navigation";
import { paths } from "~/lib/paths";

export default function RootPage() {
  return redirect(paths.dashboard());
}
