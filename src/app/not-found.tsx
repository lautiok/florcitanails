import Link from "next/link";
export default function NotFound() {
  return (
    <div className="notFound">
      <h2>La página no existe</h2>
      <p>La página que estás buscando no existe</p>
      <Link href="/"> Ir a la página principal</Link>
    </div>
  );
}
