import { z } from "zod";

export const resetSchema = z.object({
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .regex(/[A-Z]/, {
      message: "La contraseña debe incluir al menos una letra mayúscula",
    })
    .regex(/[a-z]/, {
      message: "La contraseña debe incluir al menos una letra minúscula",
    })
    .regex(/\d/, { message: "La contraseña debe incluir al menos un número" }),
  confirmPassword: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .regex(/[A-Z]/, {
      message: "La contraseña debe incluir al menos una letra mayúscula",
    })
    .regex(/[a-z]/, {
      message: "La contraseña debe incluir al menos una letra minúscula",
    })
    .regex(/\d/, { message: "La contraseña debe incluir al menos un número" }),
});
