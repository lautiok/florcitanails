import Link from "next/link";
import style from "./sobrelaacademia.module.css";

export default function SobreLaAcademia() {
  return (
    <div className={style.sobreLaAcademia}>
      <h2>¿Como estudiar en la academia?</h2>
      <p>
        Inscribite en nuestras <br /> capacitaciones
      </p>
      <Link href="/academia">Inscribite ya</Link>
    </div>
  );
}
