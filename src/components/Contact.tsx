import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './styles/ContactSection.css'; // Asegúrate de tener este archivo CSS para los estilos del componente

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías hacer la solicitud para enviar los datos del formulario
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-section container-fluid p-5">
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-dark-pink">Contáctame</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            {submitted && <p className="mt-3 text-success">¡Mensaje enviado exitosamente!</p>}
          </form>
        </div>
        <div className="col-md-6">
          <h3 className="text-dark-pink">Información de Contacto</h3>
          <ul className="contact-info">
            <li><strong>Dirección:</strong> calle 123, ciudad            </li>
            <li><strong>Teléfono:</strong> +1 234556789</li>
            <li><strong>Correo Electrónico:</strong> </li>
            <li><strong>Horario:</strong> Horarios a convenir.</li>
          </ul>
          <a href="https://wa.me/+123455677" className="whatsapp-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" className="whatsapp-icon" />
            Contacta con nosotros en WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
