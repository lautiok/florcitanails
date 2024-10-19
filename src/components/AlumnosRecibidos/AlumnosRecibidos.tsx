import { BadgeCheck } from "lucide-react";
import style from "./alumnoRecibidos.module.css";

export default function AlumnosRecibidos() {
  return (
    <div className={style.alumnosRecibidos}>
      <div className={style.alumno}>
        <p className={style.numero}>10+</p>
        <BadgeCheck size={40} strokeWidth={1} />
      </div>
      <div className={style.alumno}>
        <p>
          Mas de dies alumnas recibidas en <br /> nuestra academia
        </p>
      </div>
    </div>
  );
}
