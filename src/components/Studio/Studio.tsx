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
      <a
        href="https://maps.app.goo.gl/RAGz8JLMF4xaqxBr6"
        className={styles.link}
        target="_blank"
      >
        <MapPin size={25} /> Google Maps
      </a>
    </div>
  );
}
