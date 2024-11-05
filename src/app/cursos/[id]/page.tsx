import MainLayout from "@/app/mainLayout";
import style from "./page.module.css";
import InformacionCursos from "@/components/InformacionCursos/InformacionCursos";

export default function page() {
  return (
    <MainLayout>
      <main className={style.informacioncursos}>
        <InformacionCursos />
      </main>
    </MainLayout>
  );
}
