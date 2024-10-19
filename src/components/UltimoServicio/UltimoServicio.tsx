"use client";

import { useEffect, useState } from "react";
import styles from "./ultimoservicio.module.css";

type Servicio = {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  permalink: string;
  timestamp: string;
  username: string;
};

export default function UltimoServicio() {
  const [data, setData] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);
  const api = process.env.NEXT_PUBLIC_API_GALERY;

  useEffect(() => {
    if (!api) return;
    fetch(api)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading == true) {
    return (
      <div
        className={styles.ultimoServicio}
        style={{ backgroundColor: "#ddd" }}
      >
        <h2></h2>
        <p></p>
      </div>
    );
  }

  // convertir hora de 2024-10-18T03:45:34+0000 a 18 de octubre

  const date = new Date(data[0].timestamp);
  const day = date.getDate();
  const month = date.toLocaleString("es-ES", { month: "long" });

  return (
    <div
      className={styles.ultimoServicio}
      style={{ backgroundImage: `url(${data[0].media_url})` }}
    >
      <h2>Ultimo Servicio</h2>

      <p>
        {" "}
        {day} de {month}
      </p>
    </div>
  );
}
