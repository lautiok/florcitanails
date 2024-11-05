import style from "@/app/academia/page.module.css";
import Cursos from "@/components/Cursos/Cursos";
import InfoAcademia from "@/components/InfoAcademia/InfoAcademia";
import { metadata } from "../layout";
import MainLayout from "../mainLayout";
export default function Page() {
  metadata.title = "Florcita Nails - Cursos y información de la academia";
  return (
    <MainLayout>
      <main className={style.academia}>
        <Cursos />
        <InfoAcademia />
      </main>
    </MainLayout>
  );
}
