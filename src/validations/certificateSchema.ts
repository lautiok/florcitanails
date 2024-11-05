import { z } from "zod";
export const certificateSchema = z.object({
  nombre: z
    .string()
    .nonempty({ message: "El campo de nombre no puede estar vacío" })
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  dni: z
    .string()
    .nonempty({ message: "El campo de dni no puede estar vacío" })
    .min(8, { message: "El dni debe tener al menos 8 caracteres" }),
  curso: z
    .string()
    .nonempty({ message: "El campo de curso no puede estar vacío" })
    .min(3, { message: "El curso debe tener al menos 3 caracteres" }),
});
