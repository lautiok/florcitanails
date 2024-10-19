"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./navresponsive.module.css";

export const NavResponsive = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={styles.navContainerResponsive}>
      <button className={styles.toggleBtn} onClick={toggleNav}>
        ☰
      </button>
      <div className={`${styles.navR} ${showNav ? styles.navRShow : ""}`}>
        <button className={styles.closeBtn} onClick={toggleNav}>
          X
        </button>
        <nav className={styles.navResponsive}>
          <ul className={styles.navUl}>
            <li className={styles.linkResp}>
              <Link href="/" onClick={toggleNav}>
                Inicio
              </Link>
            </li>
            <li className={styles.linkResp}>
              <Link href="/servicios" onClick={toggleNav}>
                Servicios
              </Link>
            </li>
            <li className={styles.linkResp}>
              <Link href="/galeria" onClick={toggleNav}>
                Galeria
              </Link>
            </li>
            <li className={styles.linkResp}>
              <Link href="/academia" onClick={toggleNav}>
                Academia
              </Link>
            </li>
            <li className={styles.linkResp}>
              <Link href="/contacto" onClick={toggleNav}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="/plataforma"
          className={styles.loginResponsive}
          onClick={toggleNav}
        >
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};
