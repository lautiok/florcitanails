import CardService from "../CardService/CardService";
import Reservas from "../Reservas/Reservas";
import style from "./serviceReserva.module.css";
export default function ServiceReserva() {
  return (
    <section className={style.serviceReserva}>
      <CardService />
      <Reservas />
    </section>
  );
}
