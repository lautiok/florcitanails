import Galery from "@/components/Galery/Galery";
import { metadata } from "../layout";

export default async function Page() {
  metadata.title = "Florcita Nails - Galería de fotos";
  return (
    <main>
      <Galery />
    </main>
  );
}
