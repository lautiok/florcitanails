/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import styles from "./certificado.module.css";

interface CertificadoProps {
  nombre: string;
  curso: string;
  fecha: string;
}

const Certificado: React.FC<CertificadoProps> = ({ nombre, curso, fecha }) => {
  const certificadoRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (certificadoRef.current) {
      const canvas = await html2canvas(certificadoRef.current, { scale: 2 });
      const imageData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imageData;
      link.download = `Certificado_${nombre}.png`;
      link.click();
    }
  };

  return (
    <div key="certificado" className={styles.container}>
      <div ref={certificadoRef} className={styles.certificado}>
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
      <button onClick={handleDownload} className={styles.downloadButton}>
        Descargar Certificado
      </button>
    </div>
  );
};

export default Certificado;
