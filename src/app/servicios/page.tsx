import TablaServicios from "@/components/TablaServicios/TablaServicios";
import style from "./page.module.css";
import { metadata } from "../layout";
export default function Servicios() {
  metadata.title = "Florcita Nails - Servicios";
  return (
    <main className={style.service}>
      <TablaServicios />
    </main>
  );
}
