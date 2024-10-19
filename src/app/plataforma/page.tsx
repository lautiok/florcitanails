import Login from "@/components/Login/Login";
import { metadata } from "../layout";

export default function Page() {
  metadata.title = "Florcita Nails - Plataforma";
  return (
    <main>
      <Login />
    </main>
  );
}
