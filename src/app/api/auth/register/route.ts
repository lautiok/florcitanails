import User from "@/models/user";

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/utils/mongodb";

export async function POST(request: Request) {
  const { name, dni, phone, email, password } = await request.json();

  if (!name || !dni || !phone || !email || !password) {
    return NextResponse.json(
      { error: "Faltan datos obligatorios" },
      {
        status: 400,
      }
    );
  }

  if (password.length < 8) {
    return NextResponse.json(
      { error: "Contraseña debe tener al menos 8 caracteres" },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDB();
    const userFound = await User.findOne({ email });

    if (userFound) {
      return NextResponse.json(
        { error: "El email ya está registrado" },
        {
          status: 400,
        }
      );
    }

    const dniFound = await User.findOne({ dni });
    if (dniFound) {
      return NextResponse.json(
        { error: "El DNI ya está registrado" },
        { status: 400 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      dni,
      phone,
      email,
      password: passwordHash,
    });
    const savedUser = await user.save();
    return NextResponse.json(savedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error al registrar" });
  }
}
