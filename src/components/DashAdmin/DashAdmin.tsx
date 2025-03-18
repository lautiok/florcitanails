import { useEffect, useState } from "react";
import style from "./dashadmin.module.css";
import axios from "axios";
import Link from "next/link";
import { CirclePlus } from "lucide-react";

interface Certificate {
  _id: string;
  name: string;
  dni: string;
  curso: string;
  fecha: string;
}

interface Curso {
  title: string;
  modalidad: string;
  _id: string;
}

interface Usuario {
  name: string;
  email: string;
  role: string;
  _id: string;
}

export default function DashAdmin({ width = "100%" }) {
  const [certificate, setCertificate] = useState<Certificate[]>([]);

  const [cursos, setCursos] = useState<Curso[]>([]);
  const [usuario, setUsuario] = useState<Usuario[]>([]);

  const fetchCertificate = async () => {
    try {
      const response = await axios.get("/api/certificate");
      setCertificate(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchCertificate();
  }, []);

  const fetchCursos = async () => {
    try {
      const response = await axios.get("/api/curso");
      setCursos(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchCursos();
  }, []);

  const fetchUsuario = async () => {
    try {
      const response = await axios.get("/api/user");
      setUsuario(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

    useEffect(() => {
        fetchUsuario();
    }, []);

  return (
    <section className={style.cursos} style={{ width }}>
      <div className={style.contenedorCard}>
        <article className={style.card}>
          <div>
            <h2>Certificados Generados</h2>
            <p>{certificate.length}</p>
          </div>
        </article>
        <article className={style.articleb}>
          <div>
            <h2>Cursos Disponibles</h2>
            <p>{cursos.length}</p>
          </div>
        </article>
      </div>
      <div className={style.contenedorTable}>
        <header className={style.tableHeader}>
          <h2>Usuarios disponibles</h2>

        </header>
        <table>
            
            <tbody>
                {usuario.map((user, index) => (
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    </section>
  );
}
