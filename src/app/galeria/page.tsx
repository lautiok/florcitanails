/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import SkeletonGalery from "@/components/SkeletonGalery/SkeletonGalery";
import ImageModal from "@/components/ModalGalery/ModalGalery";

interface typeGaleria {
  id: string;
  media_url: string;
}

export default function Page() {
  const [data, setData] = useState<typeGaleria[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) => (prevIndex! + 1) % data.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex! - 1
      );
    }
  };

  return (
    <main className={styles.galeria}>
      <h2>Galería</h2>
      <section className={styles.galeriaContenedor}>
        {loading ? (
          [...Array(12)].map((_, index) => (
            <SkeletonGalery key={index} index={index} />
          ))
        ) : data.length > 0 ? (
          data.map((galery, index) => (
            <div
              key={index}
              className={styles.galeriaItem}
              onClick={() => openModal(index)}
            >
              <img src={galery.media_url} alt={`Galería ${galery.id}`} />
            </div>
          ))
        ) : (
          <p>No hay galerías disponibles</p>
        )}
      </section>

      {selectedIndex !== null && (
        <ImageModal
          imageUrl={data[selectedIndex].media_url}
          imageAlt={`Galería ${data[selectedIndex].id}`}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </main>
  );
}
