import Galery from "@/components/Galery/Galery";
import { metadata } from "../layout";
import MainLayout from "../mainLayout";

export default async function Page() {
  metadata.title = "Florcita Nails - Galería de fotos";
  return (
    <MainLayout>
      <main>
        <Galery />
      </main>
    </MainLayout>
  );
}
