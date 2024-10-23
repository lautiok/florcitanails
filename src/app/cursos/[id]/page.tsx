"use client";

import style from "./page.module.css";

import InformacionCursos from "@/components/InformacionCursos/InformacionCursos";

export default function page() {
  return (
    <main className={style.informacioncursos}>
      <InformacionCursos />
    </main>
  );
}
