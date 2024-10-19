"use client";
import { useState } from "react";
import style from "./login.module.css";

export default function Login() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendEmail = async () => {
    setIsLoading(true);

    if (!formData.email) {
      setError("Todos los campos son obligatorios");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setIsFlipped(true);
        setIsLoading(false);
      } else {
        console.error("Error enviando correo:", response.statusText);
        setError(
          "Hemos tenido un problema, intenta comunicarte por el siguiente medio: nahuelguerra56b@gmail.com"
        );
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error enviando correo:");
      setError(
        "Hemos tenido un problema al enviar el correo, intenta comunicarte conmigo por el siguiente medio: nahuelguerra56b@gmail.com"
      );
      setIsLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className={`${style.CardContainer} ${isFlipped ? style.Flipped : ""}`}
    >
      <div className={style.ContactContainer}>
        <h1>Nuestra plataforma estara disponible pronto</h1>
        <p>Ingrese su correo para recibir la notificacion</p>
        {error && <p className={style.Error}>{error}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
      <div className={style.Back}>
        <h2>
          <span>✔</span> ¡Hemos registrado tu correo!
        </h2>
      </div>
    </div>
  );
}
