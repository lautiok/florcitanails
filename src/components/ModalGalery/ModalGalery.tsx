/* eslint-disable @next/next/no-img-element */
import React from "react";
import { X, MoveLeft, MoveRight } from "lucide-react";
import styles from "./modalgalery.module.css";

interface ImageModalProps {
  imageUrl: string;
  imageAlt: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageModal({
  imageUrl,
  imageAlt,
  onClose,
  onNext,
  onPrev,
}: ImageModalProps) {
  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modal} onClick={handleClickOutside}>
      <button onClick={onClose} className={styles.closeButton}>
        <X />
      </button>
      <button onClick={onPrev} className={styles.prevButton}>
        <MoveLeft />
      </button>
      <img src={imageUrl} alt={imageAlt} className={styles.modalImage} />
      <button onClick={onNext} className={styles.nextButton}>
        <MoveRight />
      </button>
    </div>
  );
}
