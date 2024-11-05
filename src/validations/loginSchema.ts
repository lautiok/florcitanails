import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "El campo de email no puede estar vacío" })
    .email({ message: "Debe ser un email válido" }),
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
});
