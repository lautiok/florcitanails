import React, { useRef } from "react";
import styles from "./certificadobutton.module.css";
import Link from "next/link";

interface CertificadoProps {
  nombre: string;
  id: string;
  curso: string;
}

const CertificadoButton: React.FC<CertificadoProps> = ({
  nombre,
  curso,
  id,
}) => {
  const certificadoRef = useRef<HTMLDivElement>(null);

  return (
    <Link href={`/certificado/${id}`}>
      <div className={`${styles.container} ${styles.mini}`}>
        <div
          ref={certificadoRef}
          className={`${styles.certificado} ${styles.miniCertificado}`}
        >
          <h1 className={styles.title}>CERTIFICADO</h1>
          <h2 className={styles.name}>{nombre}</h2>
          <p className={styles.description}>
            <strong>{curso}</strong>.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CertificadoButton;
