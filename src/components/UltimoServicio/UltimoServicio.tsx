"use client";

import { useEffect, useState, useMemo } from "react";
import styles from "./ultimoservicio.module.css";

interface Servicio {
  timestamp: string;
  media_url: string;
  media_type: string; // "IMAGE" or "VIDEO"
}

export default function UltimoServicio() {
  const [servicio, setServicio] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);
  const api = process.env.NEXT_PUBLIC_API_GALERY;

  useEffect(() => {
    const fetchData = async () => {
      if (!api) {
        console.error("La URL de la API no está definida.");
        return;
      }
      try {
        const response = await fetch(api);
        const data = await response.json();
        setServicio(data.data || []);
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api]);

  const { day, month } = useMemo(() => {
    if (servicio.length > 0) {
      const date = new Date(servicio[0].timestamp);
      return {
        day: date.getDate(),
        month: date.toLocaleString("es-ES", { month: "long" }),
      };
    }
    return { day: 0, month: "" };
  }, [servicio]);

  if (loading) {
    return (
      <div
        className={styles.ultimoServicio}
        style={{ backgroundColor: "#f5f5f5" }}
      ></div>
    );
  }

  const isVideo = servicio.length > 0 && servicio[0].media_type === "VIDEO";

  return (
    <div
      className={styles.ultimoServicio}
      style={{
        backgroundImage:
          !isVideo && servicio.length > 0
            ? `url(${servicio[0].media_url})`
            : "none",
      }}
    >
      {isVideo && servicio.length > 0 && (
        <video
          src={servicio[0].media_url}
          autoPlay
          muted
          className={styles.videoBackground}
        />
      )}
      <h2>Último Servicio</h2>
      <p>
        {day} de {month}
      </p>
    </div>
  );
}
