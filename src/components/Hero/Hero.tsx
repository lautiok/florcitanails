import AlumnosRecibidos from "../AlumnosRecibidos/AlumnosRecibidos";
import Seguidores from "../Seguidores/Seguidores";
import SobreLaAcademia from "../SobreLaAcademia/SobreLaAcademia";
import Studio from "../Studio/Studio";
import UltimoServicio from "../UltimoServicio/UltimoServicio";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.contenedor}>
          <div className={styles.izquierda}>
            <Seguidores />
          </div>
          <div className={styles.derecha}>
            <AlumnosRecibidos />
            <SobreLaAcademia />
          </div>
        </div>
        <Studio />
      </div>
      <UltimoServicio />
    </section>
  );
}
