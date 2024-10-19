import { UserSearch } from "lucide-react";
import styles from "./seguidores.module.css";

export default function Seguidores() {
  return (
    <div className={styles.seguidores}>
      <UserSearch size={55} strokeWidth={1} />
      <p className={styles.numSeguidores}>1393</p>
      <h2>Seguidores en Instagram</h2>
      <p className={styles.perfil}>
        seguidores de nuestro perfil en instagram,
      </p>
      <p className={styles.act}>ultima actualizacion el 10 de octubre</p>
    </div>
  );
}
