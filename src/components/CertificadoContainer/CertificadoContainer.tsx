"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Certificado from "../Certificado/Certificado";

interface CertificadoType {
  _id: string;
  name: string;
  dni: string;
  curso: string;
  fecha : string;
}

export default function CertificadoContainer() {
  const [certificado, setCertificado] = useState<CertificadoType>();

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

  console.log(certificado);

  const fecha = new Date(certificado.fecha);
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
        id={certificado?._id}
      />
    </section>
  );
}
