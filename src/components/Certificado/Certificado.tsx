/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import styles from "./certificado.module.css";
import { useSession } from "next-auth/react";
import domtoimage from "dom-to-image";

interface CertificadoProps {
  nombre: string;
  curso: string;
  fecha: string;
  id: string;
}

const Certificado: React.FC<CertificadoProps> = ({
  nombre,
  curso,
  fecha,
  id,
}) => {
  const certificadoRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();

  const handleDownload = async () => {
    const node = certificadoRef.current!;
    const scale = 5;

    const style = {
      transform: "scale(" + scale + ")",
      transformOrigin: "top left",
      width: node.offsetWidth + "px",
      height: node.offsetHeight + "px",
    };

    const param = {
      height: node.offsetHeight * scale,
      width: node.offsetWidth * scale,
      style,
    };

    const dataUrl = await domtoimage.toPng(node, param);

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `Certificado_${nombre}.png`;
    link.click();
  };
  const deleteCertificado = async () => {
    if (session?.user?.role === "admin") {
      const response = await fetch(`/api/certificate/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        window.location.href = "/dashboard/certificados";
      } else {
        alert("Error al eliminar el certificado");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div ref={certificadoRef} className={styles.certificado}>
        <img
          src="/certificado.jpg"
          alt="Fondo"
          className={styles.bgImage}
          crossOrigin="anonymous"
        />
        <div className={styles.content}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>CERTIFICADO</h1>
          <p className={styles.subtitle}>Certifico que</p>
          <h2 className={styles.name}>{nombre}</h2>
          <p className={styles.description}>
            Ha realizado y completado con éxito su curso de uñas{" "}
            <strong>{curso}</strong>.
          </p>
          <p className={styles.date}>{fecha}</p>
          <div className={styles.signatureSection}>
            <p>Florencia Valles</p>
            <small>Manicurista y fundadora de Florcitanails</small>
          </div>
        </div>
      </div>

      <button onClick={handleDownload} className={styles.downloadButton}>
        Descargar Certificado
      </button>

      {session?.user?.role === "admin" && (
        <button onClick={deleteCertificado} className={styles.deleteButton}>
          Eliminar Certificado
        </button>
      )}
    </div>
  );
};

export default Certificado;
