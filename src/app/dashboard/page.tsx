"use client";

import { useSession } from "next-auth/react";
import HeaderLayout from "./headerLayour";
import style from "./page.module.css";
import Cursos from "@/components/Cursos/Cursos";
import SectionCertificados from "@/components/SectionCertificados/SectionCertificados";
import DashAdmin from "@/components/DashAdmin/DashAdmin";

export default function Page() {
  const { data: session } = useSession();

  return (
    <HeaderLayout>
      <section className={style.dashboardPage}>
        <h2>Hola { session?.user.name }</h2>

        {session?.user?.role === "admin" && <DashAdmin />}
        {session?.user?.role === "user" && <Cursos />}
        {session?.user?.role === "user" && <SectionCertificados />}
      </section>
    </HeaderLayout>
  );
}
