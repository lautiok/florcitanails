import style from "@/components/Reservas/reservas.module.css";

export default function Reservas() {
  return (
    <div className={style.reservas}>
      <h2>HAZ TU RESERVA</h2>
      <p>La reserva se realiza con una seña del 25% del servicio</p>
      <a href="https://wa.link/tyjvco" target="_blank">
        reserva ahora
      </a>
    </div>
  );
}
