import style from "@/app/academia/page.module.css";
import Cursos from "@/components/Cursos/Cursos";
import InfoAcademia from "@/components/InfoAcademia/InfoAcademia";
export default function Page() {
  return (
    <main className={style.academia}>
      <Cursos />
      <InfoAcademia />
    </main>
  );
}
