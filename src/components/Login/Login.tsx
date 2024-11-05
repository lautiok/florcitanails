"use client";
import style from "./login.module.css";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/loginSchema";
import { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleSendEmail = handleSubmit(async (data: LoginFormData) => {
    try {
      setLoading(true);
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (response?.error) {
        setError(response.error);
        setLoading(false);
        return;
      }

      if (response?.ok) {
        location.href = "/dashboard";
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  });

  return (
    <div id="contact" className={style.CardContainer}>
      <div className={style.ContactContainer}>
        <h2>Iniciar Sesión</h2>
        {error && <p className={style.Error}>{error}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
        >
          <input type="email" placeholder="email" {...register("email")} />
          {errors.email && (
            <p className={style.Error}>{errors.email.message}</p>
          )}
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          {errors.password && (
            <p className={style.Error}>{errors.password.message}</p>
          )}
          <Link href="/auth/forget-password">¿Olvidaste tu contraseña?</Link>
          <div className={style.Links}>
            <button style={{ backgroundColor: "#f4dfe2" }}>
              <Link href="/auth/register">registrar</Link>
            </button>
            <button type="submit" disabled={loading}>
              {" "}
              {loading ? "ingresando" : "ingresar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
