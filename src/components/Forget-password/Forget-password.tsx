"use client";
import style from "./foorgetpassword.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { restoreSchema } from "@/validations/restoreSchema";
import { useRouter } from "next/navigation";

export default function ForgetPassword() {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(restoreSchema),
  });

  const handleSendEmail = handleSubmit(async (data) => {
    try {
      const response = await fetch("/api/auth/forget-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        router.push("/auth/login");
      }
    } catch (error) {}
  });

  return (
    <div id="contact" className={style.CardContainer}>
      <div className={style.ContactContainer}>
        <h2>Recuperar contraseña</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
        >
          <input type="email" placeholder="email" {...register("email")} />

          <div className={style.Links}>
            <button type="submit">Recuperar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
