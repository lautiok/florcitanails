import TablaServicios from "@/components/TablaServicios/TablaServicios";
import style from "./page.module.css";
import { metadata } from "../layout";
import MainLayout from "../mainLayout";
export default function Servicios() {
  metadata.title = "Florcita Nails - Servicios";
  return (
    <MainLayout>
      <main className={style.service}>
        <TablaServicios />
      </main>
    </MainLayout>
  );
}
