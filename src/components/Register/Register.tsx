"use client";
import { useForm } from "react-hook-form";
import style from "./register.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/validations/registerSchema";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface RegisterFormData {
  name: string;
  dni: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const handleSendEmail = async (data: RegisterFormData) => {
    try {
      await axios.post("/api/auth/register", {
        name: data.name,
        dni: data.dni,
        phone: data.phone,
        email: data.email,
        password: data.password,
      });
      router.push("/auth/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          setError(error.response.data.error);
        }
      } else {
        setError("Error al ingresar" + error);
        console.log(error);
      }
    }
  };

  return (
    <div id="contact" className={style.CardContainer}>
      <div className={style.ContactContainer}>
        <h2>Crea una cuenta</h2>
        {error && <p className={style.Error}>{error}</p>}
        <form onSubmit={handleSubmit(handleSendEmail)}>
          <input
            type="text"
            placeholder="nombre completo"
            {...register("name")}
          />
          {errors.name && <p className={style.Error}>{errors.name.message}</p>}

          <input type="number" placeholder="DNI" {...register("dni")} />
          {errors.dni && <p className={style.Error}>{errors.dni.message}</p>}

          <input
            type="text"
            placeholder="número de teléfono"
            {...register("phone")}
          />
          {errors.phone && (
            <p className={style.Error}>{errors.phone.message}</p>
          )}

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

          <button type="submit">ingresar</button>
        </form>
      </div>
    </div>
  );
}
