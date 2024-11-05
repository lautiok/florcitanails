"use client";
import { useEffect, useState } from "react";
import CertificadoButton from "../CertificadoButton/CertificadoButton";
import style from "./sectioncertificado.module.css";
import { useSession } from "next-auth/react";
import axios from "axios";

interface Certificate {
  _id: string;
  name: string;
  dni: string;
  curso: string;
  timestamp: string;
}

export default function SectionCertificados() {
  const [certificate, setCertificate] = useState<Certificate[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    if (!session || !session.user?.dni) {
      return;
    }
    axios
      .post("/api/certificate/dni", {
        dni: session.user.dni,
      })
      .then((response) => {
        setCertificate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [session]);

  return (
    <section className={style.certificados}>
      <h1>Mis Certificados</h1>
      <div className={style.certificadoContainer}>
        {certificate.length > 0 ? (
          certificate.map((certificado: Certificate, index: number) => (
            <CertificadoButton
              nombre={certificado.name}
              curso={certificado.curso}
              key={index}
              id={certificado._id}
            />
          ))
        ) : (
          <p>No hay certificados registrados</p>
        )}
      </div>
    </section>
  );
}
