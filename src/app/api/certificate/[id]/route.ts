import Certificados from "@/models/certificados";
import { connectDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json(
      { error: "El id del certificado es requerido" },
      { status: 400 }
    );
  }

  try {
    await connectDB();
    const certificado = await Certificados.findOne({ _id: new ObjectId(id) });

    if (!certificado) {
      return NextResponse.json(
        { error: "Certificado no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(certificado);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al obtener el certificado" },
      { status: 500 }
    );
  }
}
