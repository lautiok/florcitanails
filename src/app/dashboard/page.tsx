"use client";

import { useSession } from "next-auth/react";
import HeaderLayout from "./headerLayour";
import style from "./page.module.css";
import Cursos from "@/components/Cursos/Cursos";
import SectionCertificados from "@/components/SectionCertificados/SectionCertificados";

export default function Page() {
  const { data: session } = useSession();

  return (
    <HeaderLayout>
      <section className={style.dashboardPage}>
        <Cursos width="100%" />
        {session?.user?.role === "user" && <SectionCertificados />}
      </section>
    </HeaderLayout>
  );
}
