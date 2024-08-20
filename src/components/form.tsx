import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log(response);
    if (response.ok) {
      setIsLoading(false);
      setError(false);
      setSuccess(true);
      setFormData({
        name: "",
        lastname: "",
        phoneNumber: "",
        email: "",
        message: "",
      });
    } else {
      setIsLoading(false);
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <section
      className="wrapper flex justify-between gap-10 pb-16 pt-10 max-md:flex-col lg:gap-20"
      id="form"
    >
      <div className="flex w-full flex-col gap-1 max-md:text-center">
        <h3 className="text-3xl font-bold md:text-4xl">
          Obtené asesoramiento personalizado
        </h3>
        <p className="text-muted-foreground">
          Completá el formulario y un asesor te contactará a la brevedad.
        </p>

        <picture className="mt-20 hidden w-11/12 md:flex lg:w-2/3">
          <img
            src="/illustrations/form-illustration.svg"
            alt="Ilustración de certificación"
            className="object-cover"
          />
        </picture>
      </div>

      <form
        className="flex w-full flex-col gap-4 rounded-sm border-2 p-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            placeholder="Escribe tu nombre"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            placeholder="Escribe tu apellido"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="ejemplo@gmail.com"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="number"
            placeholder="2611234567"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-12 resize-y"
          ></textarea>
        </div>

        {isLoading ? (
          <p className="mt-8 self-end">Enviando...</p>
        ) : (
          <button className="mt-8 self-end">Enviar</button>
        )}

        {success && (
          <p className="self-end text-sm text-green-700">
            Mensaje enviado con éxito
          </p>
        )}

        {error && (
          <p className="self-end text-sm text-red-700">
            Error al enviar el mensaje. Intente más tarde.
          </p>
        )}
      </form>
    </section>
  );
}
