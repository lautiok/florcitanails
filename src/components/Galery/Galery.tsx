/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import styles from "./galery.module.css";
import ImageModal from "@/components/ModalGalery/ModalGalery";
import SkeletonGalery from "../SkeletonGalery/SkeletonGalery";

interface Servicio {
  timestamp: string;
  media_url: string;
  media_type: string;
  id: number;
}

export default function Galery() {
  const [data, setData] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const api = process.env.NEXT_PUBLIC_API_GALERY;

  const fetchData = useCallback(async () => {
    if (!api) {
      console.error("La URL de la API no está definida.");
      return;
    }
    try {
      const response = await fetch(api);
      const result = await response.json();
      setData(result.data || []);
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
    } finally {
      setLoading(false);
    }
  }, [api]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const openModal = useCallback((index: number) => setSelectedIndex(index), []);
  const closeModal = useCallback(() => setSelectedIndex(null), []);

  const nextImage = useCallback(() => {
    setSelectedIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex + 1) % data.length : null
    );
  }, [data.length]);

  const prevImage = useCallback(() => {
    setSelectedIndex((prevIndex) =>
      prevIndex !== null
        ? prevIndex === 0
          ? data.length - 1
          : prevIndex - 1
        : null
    );
  }, [data.length]);

  const renderSkeletons = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => (
        <SkeletonGalery key={index} index={index} />
      )),
    []
  );

  const renderGallery = useMemo(
    () =>
      data.map((galery, index) => (
        <div
          key={galery.id}
          className={styles.galeriaItem}
          onClick={() => openModal(index)}
        >
          {galery.media_type === "VIDEO" ? (
            <video
              src={galery.media_url}
              muted
              autoPlay
              loop
              className={styles.media}
            />
          ) : (
            <img
              src={galery.media_url}
              alt={`Galería ${galery.id}`}
              className={styles.media}
            />
          )}
        </div>
      )),
    [data, openModal]
  );

  return (
    <div className={styles.galeria}>
      <h2>Galería</h2>
      <section className={styles.galeriaContenedor}>
        {loading ? renderSkeletons : renderGallery}
      </section>

      {selectedIndex !== null && (
        <ImageModal
          imageUrl={data[selectedIndex].media_url}
          imageAlt={`Galería ${data[selectedIndex].id}`}
          isVideo={data[selectedIndex].media_type === "VIDEO"}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}
