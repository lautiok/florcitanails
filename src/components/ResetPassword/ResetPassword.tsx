"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";
import { resetSchema } from "@/validations/resetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import style from "./resetpassword.module.css";

export default function ResetPassword() {
  const router = useRouter();
  const [errorform, setErrorform] = useState<string | null>(null);
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(resetSchema),
  });
  const [token, setToken] = useState<string | null>(null);
  const params = useSearchParams();

  useEffect(() => {
    const tokenFromParams = params.get("token");
    setToken(tokenFromParams);
  }, [params]);

  const handleSendEmail = handleSubmit(async (data) => {
    try {
      const response = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { token } : {}),
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/auth/login");
      } else {
        const errorData = await response.json();
        setErrorform(errorData.error);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  });

  return (
    <div id="contact" className={style.CardContainer}>
      <div className={style.ContactContainer}>
        <h2>Cambiar contraseña</h2>
        {errorform && <p className={style.Error}>{errorform}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
        >
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <input
            type="password"
            placeholder="confirm password"
            {...register("confirmPassword")}
          />

          <div className={style.Links}>
            <button type="submit">Recuperar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
