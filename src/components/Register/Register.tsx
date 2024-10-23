"use client";
import { useForm } from "react-hook-form";
import style from "./register.module.css";

export default function Register() {
  const { register, handleSubmit } = useForm();

  const hanbleSendEmail = handleSubmit((data) => {
    console.log(data.name);
  });
  return (
    <div id="contact" className={style.CardContainer}>
      <div className={style.ContactContainer}>
        <h2>Crea una cuenta</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            hanbleSendEmail();
          }}
        >
          <input
            type="text"
            placeholder="nombre completo"
            {...register("name")}
          />
          <input type="number" placeholder="DNI" {...register("dni")} />
          <input
            type="text"
            placeholder="numero de teléfono"
            {...register("phone")}
          />
          <input type="email" placeholder="email" {...register("email")} />
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <input
            type="password"
            placeholder="confirmar password"
            {...register("confirmPassword")}
          />

          <button type="submit">ingresar</button>
        </form>
      </div>
    </div>
  );
}
