import User from "@/models/user";
import { connectDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import { Transporter } from "@/utils/nodemailer";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const body: { email: string } = await request.json();

    const { email } = body;

    await connectDB();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "No se encontró el usuario" });
    }
    const tokenData = {
      email: user.email,
      userId: user._id,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET as string, {
      expiresIn: "2h",
    });

    const forgedUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`;

    await Transporter.sendMail({
      from: process.env.NEXT_PUBLIC_SMTP_USER as string,
      to: user.email,
      subject: "Restablecer contraseña",
      html: `<p>Hola ${user.name}, para restablecer tu contraseña, haz click en el siguiente enlace:</p>
      <a href="${forgedUrl}">${forgedUrl}</a>`,
    });

    return NextResponse.json({ message: "Email enviado", status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error al enviar el email" });
  }
}
