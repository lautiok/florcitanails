import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import ServiceReserva from "@/components/ServiceReserva/ServiceReserva";
import MainLayout from "./mainLayout";

export default function Home() {
  return (
    <MainLayout>
      <main className={styles.main}>
        <Hero />
        <ServiceReserva />
      </main>
    </MainLayout>
  );
}
