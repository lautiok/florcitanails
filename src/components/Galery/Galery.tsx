/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import styles from "./galery.module.css";
import ImageModal from "@/components/ModalGalery/ModalGalery";

export default function Galery({
  data,
}: {
  data: { media_url: string; id: string }[];
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

  if (data.length === 0) {
    return <p>No hay fotos disponibles</p>;
  }

  return (
    <div className={styles.galeria}>
      <h2>Galería</h2>
      <section className={styles.galeriaContenedor}>
        {data.map((galery, index) => (
          <div
            key={index}
            className={styles.galeriaItem}
            onClick={() => openModal(index)}
          >
            <img src={galery.media_url} alt={`Galería ${galery.id}`} />
          </div>
        ))}
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
    </div>
  );
}
