import styles from "./skaletongalery.module.css";
export default function SkeletonGalery({ index }: { index: number }) {
  return (
    <div
      key={index}
      className={`${styles.galeriaItem} ${styles.skeleton} `}
    ></div>
  );
}
