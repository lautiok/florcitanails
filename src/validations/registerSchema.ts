import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "El nombre no puede estar vacío" })
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  dni: z
    .string()
    .nonempty({ message: "El DNI no puede estar vacío" })
    .min(8, { message: "El DNI debe tener al menos 8 caracteres" }),
  phone: z
    .string()
    .nonempty({ message: "El número de teléfono no puede estar vacío" })
    .min(8, {
      message: "El número de teléfono debe tener al menos 8 caracteres",
    }),
  email: z
    .string()
    .nonempty({ message: "El email no puede estar vacío" })
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
