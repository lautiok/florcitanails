import { NextRequest, NextResponse } from "next/server";
import { Transporter } from "@/utils/nodemailer";
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Faltan datos del formulario" },
        { status: 400 }
      );
    }

    await Transporter.sendMail({
      from: `"Formulario de Contacto" <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
      to: process.env.NEXT_PUBLIC_SMTP_USER,
      subject: "Nuevo mensaje de contacto",
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      html: `
          <div style="background-color: #ebebeb; padding: 20px; font-family: Arial, sans-serif; color: #000000; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000000; text-align: center; border-bottom: 2px solid #9a7d5f; padding-bottom: 10px;">
              Nuevo Mensaje de Contacto
            </h2>
            <div style="padding: 20px; background-color: #ffffff; border-radius: 10px;">
              <p style="font-size: 16px; margin-bottom: 10px;">
                <strong>Nombre:</strong> ${name}
              </p>
              <p style="font-size: 16px; margin-bottom: 10px;">
                <strong>Email:</strong> ${email}
              </p>
              <p style="font-size: 16px; margin-bottom: 10px;">
                <strong>Mensaje:</strong><br/>
                ${message}
              </p>
            </div>
            <p style="font-size: 14px; text-align: center; color: #000000; margin-top: 20px;">
              Este mensaje fue enviado desde tu formulario de contacto.
            </p>
          </div>
        `,
    });

    return NextResponse.json(
      { message: "Correo enviado con éxito" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error enviando correo:", error);
    return NextResponse.json(
      { message: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
