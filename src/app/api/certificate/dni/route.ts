import Certificados from "@/models/certificados";
import { connectDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { dni } = await req.json();

  if (!dni) {
    return NextResponse.json(
      { error: "Falta el DNI del certificado" },
      {
        status: 400,
      }
    );
  }

  if (dni.length !== 8) {
    return NextResponse.json(
      { error: "El DNI debe tener 8 dígitos" },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDB();
    const certificado = await Certificados.find({ dni });

    if (!certificado) {
      return NextResponse.json(
        { error: "No existe el certificado con ese DNI" },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(certificado);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error al obtener el certificado" });
  }
}
