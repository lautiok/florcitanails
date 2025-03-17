"use client";
import { useForm } from "react-hook-form";
import style from "./formcursos.module.css";
import Select, { SingleValue } from "react-select";
import { useState } from "react";
import axios from "axios";

export default function FormCurso() {
  const { register, handleSubmit } = useForm();
  const [ModalidadSeleccionado, setModalidadSeleccionado] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [error, setError] = useState<string>("");

  const handleSendEmail = handleSubmit(async (data) => {
    try {
      const response = await axios.post("/api/curso", {
        title: data.title,
        description: data.description,
        modalidad: ModalidadSeleccionado?.value,
      });
      if (response.status === 200) {
        location.href = "/dashboard/cursos";
      }
    } catch (error) {
      setError("ha ocurrido un error");
      console.error("Error enviando datos" + error);
    }
  });

  return (
    <div className={style.CardContainer}>
      <div className={style.ContactContainer}>
        <h1>Agregar Curso</h1>
        {error && <p className={style.Error}>{error}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
        >
          <input
            type="text"
            placeholder="Nombre del curso"
            {...register("title")}
          />

          <textarea
            id="descripcion"
            placeholder="Descripcion del curso"
            {...register("description")}
          ></textarea>

          <Select
            options={[
              { value: "Presencial", label: "Presencial" },
              { value: "Virtual", label: "Virtual" },
            ]}
            onChange={(e: SingleValue<{ label: string; value: string }>) =>
              setModalidadSeleccionado(e)
            }
            placeholder="Selecciona una modalidad"
          />

          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </div>
  );
}
