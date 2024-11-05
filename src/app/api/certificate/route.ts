import Certificados from "../../../models/certificados";
import { connectDB } from "../../../utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, dni, curso } = await req.json();

  if (!name || !dni || !curso) {
    return NextResponse.json(
      { error: "Faltan datos obligatorios" },
      { status: 400 }
    );
  }

  if (dni.length !== 8) {
    return NextResponse.json(
      { error: "El DNI debe tener 8 dígitos" },
      { status: 400 }
    );
  }

  try {
    await connectDB();

    // Verificar si ya existe un certificado con el mismo dni y curso
    const existingCertificado = await Certificados.findOne({ dni, curso });

    if (existingCertificado) {
      return NextResponse.json(
        { error: "El certificado ya existe para este curso y DNI" },
        { status: 400 }
      );
    }

    // Crear el certificado si no existe uno igual
    const certificado = await Certificados.create({
      name,
      dni,
      curso,
    });

    const savedCertificado = await certificado.save();
    return NextResponse.json(savedCertificado);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error al registrar" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const certificados = await Certificados.find();
    return NextResponse.json(certificados);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error al obtener certificados" },
      { status: 500 }
    );
  }
}
