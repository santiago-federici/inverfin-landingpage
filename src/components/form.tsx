import { useState } from "react";

import Button from "./button";
import { RevealFromSide } from "./reveal-from-side.tsx";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const lastname = formData.get("lastname");
    const phoneNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const message = formData.get("message");

    const response = await fetch(
      "https://inverfin-form-endpoint.vercel.app/api/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastname, phoneNumber, email, message }),
        cache: "no-cache",
      },
    );

    if (response.ok) {
      setIsLoading(false);
      setError(false);
      setSuccess(true);
    } else {
      setIsLoading(false);
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <section
      className="wrapper flex justify-between gap-10 py-20 max-lg:flex-col lg:gap-20"
      id="form"
    >
      <RevealFromSide
        side="left"
        className="flex w-full flex-col gap-1 max-md:text-center"
      >
        <>
          <h3 className="text-3xl font-bold md:text-4xl">
            Obtené asesoramiento personalizado
          </h3>
          <p className="text-muted-foreground">
            Completá el formulario y un asesor te contactará a la brevedad.
          </p>

          <picture className="mt-20 hidden w-11/12 lg:flex lg:w-2/3">
            <img
              src="/illustrations/form-illustration.svg"
              alt="Ilustración de certificación"
              loading="lazy"
              className="object-cover"
              width="500"
              height="300"
            />
          </picture>
        </>
      </RevealFromSide>

      <RevealFromSide side="right" className="w-full">
        <form
          className="flex w-full flex-col gap-4 rounded-sm bg-white p-8"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              placeholder="Escribe tu nombre"
              aria-label="Nombre"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              placeholder="Escribe tu apellido"
              aria-label="Apellido"
              name="lastname"
              id="lastname"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="ejemplo@gmail.com"
              aria-label="Email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="number"
              placeholder="2611234567"
              aria-label="Número de teléfono"
              name="phoneNumber"
              id="phoneNumber"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Deja tu mensaje aquí"
              aria-label="Mensaje"
              required
              className="min-h-12 resize-y"
            ></textarea>
          </div>

          {isLoading ? (
            <p className="mt-8 self-end">Enviando...</p>
          ) : (
            <Button className="mt-8 self-end">Enviar</Button>
          )}

          {success && (
            <p className="self-end text-sm text-green-600">
              Mensaje enviado con éxito
            </p>
          )}

          {error && (
            <p className="self-end text-sm text-red-600">
              Error al enviar el mensaje. Intente más tarde.
            </p>
          )}
        </form>
      </RevealFromSide>
    </section>
  );
}
