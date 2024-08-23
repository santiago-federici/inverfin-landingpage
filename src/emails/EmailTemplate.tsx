import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Img,
} from "@react-email/components";

export const EmailTemplate = ({
  name,
  lastname,
  email,
  phoneNumber,
  message,
}: any) => (
  <Html>
    <Head />
    <Preview>Nuevo usuario registrado en el formulario de contacto</Preview>
    <Body
      style={{ backgroundColor: "#f6f9fc", fontFamily: "Arial, sans-serif" }}
    >
      <Container
        style={{
          margin: "40px auto",
          padding: "40px",
          backgroundColor: "#ffffff",
          borderRadius: "4px",
          maxWidth: "800px",
        }}
      >
        <Img
          src={"/logos/inverfin.webp"}
          width="100"
          height="100"
          alt="Logo de Inverfin"
          style={{ margin: "auto", aspectRatio: "auto" }}
        />

        <Heading
          style={{ fontSize: "24px", marginBottom: "20px", marginTop: "40px" }}
        >
          Información del usuario:
        </Heading>
        <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
          <strong>Nombre:</strong> {name}
        </Text>
        <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
          <strong>Apellido:</strong> {lastname}
        </Text>
        <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
          <strong>Email:</strong> {email}
        </Text>
        <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
          <strong>Número de Telefono:</strong> {phoneNumber}
        </Text>
        {message && (
          <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
            <strong>Mensaje:</strong> {message}
          </Text>
        )}
      </Container>
    </Body>
  </Html>
);
