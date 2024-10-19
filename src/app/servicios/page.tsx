import TablaServicios from "@/components/TablaServicios/TablaServicios";
import style from "./page.module.css";
export default function Servicios() {
  return (
    <main className={style.service}>
      <TablaServicios />
    </main>
  );
}
