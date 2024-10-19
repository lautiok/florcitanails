import styles from "./studio.module.css";
import { MapPin } from "lucide-react";
export default function Studio() {
  return (
    <div className={styles.studio}>
      <h1>Estudio Florcita Nails</h1>
      <p>
        Nuestro estudio esta ubicado en buenos aire donde damos nuestros
        servicios de manicurista y academia
      </p>
      <a href="/academia" className={styles.link} target="_blank">
        <MapPin /> Google Maps
      </a>
    </div>
  );
}
