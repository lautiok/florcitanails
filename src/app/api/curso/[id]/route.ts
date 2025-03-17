import Curso from "../../../../models/cursos";
import { connectDB } from "../../../../utils/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

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

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { error: "ID no válido" },
      { status: 400 }
    );
  }

  try {
    await connectDB();
    const cursoD = await Curso.deleteOne({ _id: new mongoose.Types.ObjectId(id) });

    if (!cursoD.deletedCount) {
      return NextResponse.json(
        { error: "Curso no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Curso eliminado" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al eliminar el curso" },
      { status: 500 }
    );
  }
}
