/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./header.module.css";
import { NavResponsive } from "../NavResponsive/NavResponsive";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <NavResponsive />
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/servicios">Servicios</Link>
          </li>
          <li>
            <Link href="/galeria">Galeria</Link>
          </li>
          <li>
            <Link href="/academia">Academia</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <button className={styles.button}>
        <Link href="/plataforma">Plataforma</Link>
      </button>
    </header>
  );
}
