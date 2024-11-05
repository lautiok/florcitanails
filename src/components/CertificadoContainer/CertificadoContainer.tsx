"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Certificado from "../Certificado/Certificado";

interface Certificado {
  _id: string;
  name: string;
  dni: string;
  curso: string;
  timestamp: string;
}

export default function CertificadoContainer() {
  const [certificado, setCertificado] = useState<Certificado>();

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    fetch(`/api/certificate/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCertificado(data);
      });
  }, [id]);

  if (!certificado) {
    return <p>No hay certificado con ese id</p>;
  }

  const fecha = new Date(certificado.timestamp);
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();
  const fechaCertificado = `${dia}/${mes}/${anio}`;

  return (
    <section>
      <Certificado
        nombre={certificado?.name}
        curso={certificado?.curso}
        fecha={fechaCertificado}
      />
    </section>
  );
}
