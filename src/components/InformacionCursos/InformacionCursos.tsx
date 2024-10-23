"use client";
import style from "./informacioncursos.module.css";
import { useParams } from "next/navigation";
import data from "../../data/cursos.json";
import AccordionItem from "../AcordeonItem/AcordeonItem";

export default function InformacionCursos() {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const curso = data.find((curso) => curso.id === id);
  if (!curso) {
    return <h1>Curso no encontrado</h1>;
  }
  return (
    <section className={style.informacioncurso}>
      <div className={style.title}>
        <h2>{curso.title}</h2>
        <p>{curso.description}</p>
      </div>
      <div className={style.information}>
        <p>Modalidad: {curso.modalidad}</p>
        <div className={style.temario}>
          <h3>Programas del curso de {curso.title}: </h3>
          {!curso.temario && <p>No hay temario disponible para este curso</p>}
          {curso.temario?.map((temario) => (
            <AccordionItem
              key={temario.modulo}
              title={temario.modulo}
              description={temario.descripcion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
