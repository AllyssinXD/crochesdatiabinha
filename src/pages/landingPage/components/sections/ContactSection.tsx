import React, { useState } from "react";
import "../../styles/ContactSection.css";

const ContactSection = React.forwardRef<HTMLElement, {}>((_, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Form Data:", formData); // Verifique se formData está sendo preenchido corretamente

      const response = await fetch(
        "https://crochesdatiabinha-backend-production.up.railway.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log("Response status:", response.status); // Verifique o status da resposta

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
      } else {
        alert("Erro ao enviar mensagem. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      alert("Erro ao enviar mensagem. Por favor, tente novamente.");
    }
  };

  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      <section ref={ref} className="contact-section">
        <div className="container flex-row row-center-verticaly">
          <form onSubmit={handleSubmit} className="column form-container">
            <h1>Nos contate</h1>
            <p>Quer fazer uma encomenda ou matar duvidas? Entre em contato!</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensagem"
            />
            <button type="submit" className="secondary-button">
              Enviar
            </button>
          </form>
          <div className="column info-div">
            <h1>informações</h1>
            <span>Número de Contato : +55 11 94666-7780</span>
            <span>Email da Empresa : fabianafernando</span>
            <div className="social-media-info flex-row">
              <img
                onClick={() =>
                  handleRedirect("https://www.instagram.com/binha4047/")
                }
                src="/images/instagra-logo.png"
                alt=""
              />
              <img
                onClick={() =>
                  handleRedirect(
                    "https://api.whatsapp.com/send?phone=5511946667780"
                  )
                }
                src="/images/whatsapp-logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default ContactSection;
