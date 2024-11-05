"use client";
import { useForm } from "react-hook-form";
import style from "./agregar.module.css";
import Select, { SingleValue } from "react-select";
import data from "@/data/cursos.json";
import { useState } from "react";
import axios from "axios";

export default function FormCertificado() {
  const { register, handleSubmit } = useForm();
  const [cursoSeleccionado, setCursoSeleccionado] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [error, setError] = useState<string>("");
  const handleSendEmail = handleSubmit(async (data) => {
    try {
      const response = await axios.post("/api/certificate", {
        name: data.name,
        dni: data.dni,
        curso: cursoSeleccionado?.value,
      });
      if (response.status === 200) {
        location.href = "/dashboard/certificados";
      }
    } catch (error) {
      setError("ya existe un certificado con ese DNI");
      console.error("Error enviando datos" + error);
    }
  });

  return (
    <div className={style.CardContainer}>
      <div className={style.ContactContainer}>
        <h1>Agregar Certificado</h1>
        {error && <p className={style.Error}>{error}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
        >
          <input
            type="text"
            placeholder="nombre completo"
            {...register("name")}
          />
          <input type="text" placeholder="DNI" {...register("dni")} />

          <Select
            options={data.map(({ title }) => ({ value: title, label: title }))}
            onChange={(e: SingleValue<{ label: string; value: string }>) =>
              setCursoSeleccionado(e)
            }
            placeholder="Selecciona un curso"
          />

          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </div>
  );
}
