import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import ServiceReserva from "@/components/ServiceReserva/ServiceReserva";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ServiceReserva />
    </main>
  );
}
