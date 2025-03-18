"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./sidebarresponcive.module.css";
import { CircleX } from "lucide-react";

interface User {
  role: string;
}

export const SidebarResponsive = ({ user }: { user?: User }) => {
  // user es opcional ahora
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
        <CircleX  size={28}/>
        </button>
        <nav className={styles.navResponsive}>
          <ul className={styles.navUl}>
            <li className={styles.linkResp}>
              <Link href="/dashboard" onClick={toggleNav}>
                Inicio
              </Link>
            </li>
            <li className={styles.linkResp}>
              <Link href="/dashboard/cursos" onClick={toggleNav}>
                Cursos
              </Link>
            </li>
            {user?.role === "admin" && (
              <li className={styles.linkResp}>
                <Link href="/dashboard/certificados" onClick={toggleNav}>
                  Certificados
                </Link>
              </li>
            )}
            {user?.role === "user" && (
              <li className={styles.linkResp}>
                <Link href="/dashboard/certificado" onClick={toggleNav}>
                  Certificados
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
