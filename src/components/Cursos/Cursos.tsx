import style from "./cursos.module.css";
import data from "../../data/cursos.json";
import Link from "next/link";

export default function Cursos() {
  return (
    <section className={style.cursos}>
      <h1>Nuestros cursos</h1>
      <div className={style.contenedorCard}>
        {data.map((curso, index) => (
          <article key={index} className={style.card}>
            <div>
              <p>{curso.modalidad}</p>
              <h2>{curso.title}</h2>
            </div>
            <Link href={`/cursos/${curso.id}`}>Mas Informacion</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
