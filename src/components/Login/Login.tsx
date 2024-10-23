"use client";
import style from "./login.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
export default function Login() {
  const { register, handleSubmit } = useForm();

  const hanbleSendEmail = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div id="contact" className={style.CardContainer}>
      <div className={style.ContactContainer}>
        <h2>Iniciar Sesión</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            hanbleSendEmail();
          }}
        >
          <input type="email" placeholder="email" {...register("email")} />
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />

          <Link href="/auth/forgot-password">¿Olvidaste tu contraseña?</Link>
          <div className={style.Links}>
            <button style={{ backgroundColor: "#f4dfe2" }}>
              <Link href="/auth/register">registrar</Link>
            </button>
            <button type="submit">ingresar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
