import styles from "./ultimoservicio.module.css";

export default function UltimoServicio() {
  return (
    <div
      className={styles.ultimoServicio}
      style={{
        backgroundImage: "url(/nails.webp)",
      }}
    >
      <h2>Último Servicio</h2>
      <p>
        {new Date().toLocaleDateString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
