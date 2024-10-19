import style from "@/components/Footer/footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>
        © {new Date().getFullYear()} Florcitanails. Todos los derechos
        reservados | desarrollado por Nahuel Guerra{" "}
      </p>
    </footer>
  );
}
