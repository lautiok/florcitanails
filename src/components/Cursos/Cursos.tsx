"use client";
import { useState, useEffect } from "react";
import style from "./cursos.module.css";
import axios from "axios";
import { useSession } from "next-auth/react";

interface Curso {
  title: string;
  modalidad: string;
  _id: string;
}

export default function Cursos({ width = "68%" }) {
  const [data, setData] = useState<Curso[]>([]);
  const { data: session } = useSession();

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/curso");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`/api/curso/${id}`);
      if (response.status === 200) {
        fetchData();
      }
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  return (
    <section className={style.cursos} style={{ width }}>
      <h1>Nuestros cursos</h1>
      <div className={style.contenedorCard}>
        {data.map((curso, index) => (
          <article key={index} className={style.card}>
            <div>
              <p>{curso.modalidad}</p>
              <h2>{curso.title}</h2>
            </div>
            { session?.user.role === "admin" && (
              <button onClick={() => handleDelete(curso._id)}>Eliminar</button>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
