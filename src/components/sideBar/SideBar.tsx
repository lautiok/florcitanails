"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import style from "./sidebar.module.css";
import { useSession } from "next-auth/react";

export default function SideBar() {
  const { data: session } = useSession();

  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <img src="/logo.png" alt="logo" />
      </div>
      <ul>
        <li>
          <Link href="/dashboard">Inicio</Link>
        </li>
        <li>
          <Link href="/dashboard/cursos">Cursos</Link>
        </li>
        <li>Mis Cursos</li>
        {session?.user?.role === "user" && (
          <li>
            <Link href="/dashboard/certificado">Certificados</Link>
          </li>
        )}
        {session?.user?.role === "admin" && (
          <li>
            <Link href="/dashboard/certificados">Certificados</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
