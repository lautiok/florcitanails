import style from "@/components/CardService/cardService.module.css";

export default function CardService() {
  return (
    <article
      className={style.cardService}
      style={{ backgroundImage: `url(${"/service-aclilico.jpg"})` }}
    >
      <h2>Esculpidas en acrilico </h2>
      <div className={style.contenedor}>
        <p>Set Completo: consultar </p>
        <p>Service: consultar </p>
      </div>
    </article>
  );
}
