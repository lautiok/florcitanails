import { getData } from "@/utils/data";
import styles from "./ultimoservicio.module.css";

export default async function UltimoServicio() {
  const servicio = await getData();

  console.log("Servicio:", servicio);

  const date = new Date(servicio[0].timestamp);
  const day = date.getDate();
  const month = date.toLocaleString("es-ES", { month: "long" });

  return (
    <div
      className={styles.ultimoServicio}
      style={{ backgroundImage: `url(${servicio[0].media_url})` }}
    >
      <h2>Ultimo Servicio</h2>

      <p>
        {" "}
        {day} de {month}
      </p>
    </div>
  );
}
