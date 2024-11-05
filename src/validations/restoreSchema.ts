import { z } from "zod";

export const restoreSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "El campo de email no puede estar vacío" })
    .email({ message: "Debe ser un email válido" }),
});
