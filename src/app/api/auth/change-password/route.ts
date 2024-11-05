import User from "@/models/user";
import { connectDB } from "@/utils/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

interface ChangePasswordFormData {
  password: string;
  confirmPassword: string;
}

export async function POST(request: Request) {
  try {
    const body: ChangePasswordFormData = await request.json();
    const { password, confirmPassword } = body;

    if (!password || !confirmPassword) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios" },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Las contraseñas no coinciden" },
        { status: 400 }
      );
    }

    await connectDB();

    const headersList = headers();
    const token = headersList.get("token");

    if (!token) {
      return NextResponse.json({ error: "Falta el token" }, { status: 400 });
    }

    try {
      const decodedToken = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as { userId: string };
      const { userId } = decodedToken;

      const userFind = await User.findById(userId);
      if (!userFind) {
        return NextResponse.json(
          { error: "No se encontró el usuario" },
          { status: 400 }
        );
      }

      const hashPassword = await bcrypt.hash(password, 12);
      userFind.password = hashPassword;

      await userFind.save();

      return NextResponse.json(
        { message: "Contraseña actualizada" },
        { status: 200 }
      );
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        return NextResponse.json({ error: "Token no válido" }, { status: 401 });
      }
      return NextResponse.json(
        { error: "Error al verificar el token" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al actualizar la contraseña" },
      { status: 500 }
    );
  }
}
