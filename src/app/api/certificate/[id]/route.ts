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

    const publicCertificado = {
      _id: certificado._id.toString(),
      name: certificado.name,
      dni: certificado.dni,
      curso: certificado.curso,
      fecha : certificado.fecha,
    };

    return NextResponse.json(publicCertificado);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al obtener el certificado" },
      { status: 500 }
    );
  }
}

export async function DELETE(
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
    const certificado = await Certificados.deleteOne({ _id: new ObjectId(id) });

    if (!certificado.deletedCount) {
      return NextResponse.json(
        { error: "Certificado no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Certificado eliminado" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al eliminar el certificado" },
      { status: 500 }
    );
  }
}