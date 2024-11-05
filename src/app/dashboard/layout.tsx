import SideBar from "@/components/sideBar/SideBar";
import style from "./page.module.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={style.dashboard}>
      <SideBar />
      {children}
    </main>
  );
}
