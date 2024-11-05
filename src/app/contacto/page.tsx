import Contact from "@/components/Contact/Contact";
import { metadata } from "../layout";
import MainLayout from "../mainLayout";

export default function Contacto() {
  metadata.title = "Florcita Nails - Contacto";
  return (
    <MainLayout>
      <main>
        <Contact />
      </main>
    </MainLayout>
  );
}
