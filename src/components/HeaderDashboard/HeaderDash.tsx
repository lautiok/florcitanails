"use client";
import { useEffect, useRef, useState } from "react";
import style from "./Headerdash.module.css";
import { User, CirclePlus } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { SidebarResponsive } from "../Sidebar-responsive/SidebarResponcive";

export default function HeaderDash() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const menuRef = useRef<HTMLDivElement | null>(null);

  const { data: session } = useSession();

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const pageName = url.split("/").pop();

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={style.headerDash}>
      <SidebarResponsive user={session?.user} />
      <h2>{pageName}</h2>
      <section className={style.sectionButtons}>
        {pageName === "certificados" && session?.user.role === "admin" && (
          <Link href="/dashboard/certificados/agregar">
            <CirclePlus size="30" />
          </Link>
        )}
        {pageName === "cursos" && session?.user.role === "admin" && (
          <Link href="/dashboard/cursos/agregar">
            <CirclePlus size="30" />
          </Link>
        )}
        <div className={style.menu} onClick={handleToggleMenu} ref={menuRef}>
          <User size="30" />
          {isMenuOpen && (
            <div className={style.dropdownMenu}>
              <p className={style.userName}>{session?.user?.name}</p>
              <button className={style.logoutButton} onClick={() => signOut()}>
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </section>
    </header>
  );
}
