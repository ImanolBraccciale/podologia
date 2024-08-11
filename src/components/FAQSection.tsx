import React, { useState } from 'react';
import './styles/FAQSection.css'; // Asegúrate de tener este archivo CSS para los estilos del componente

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "¿Qué servicios ofrecen?",
    answer: "Ofrecemos una variedad de servicios, incluyendo consultas iniciales, tratamientos de callos, Reflexología y cuidado de uñas. Puedes ver todos nuestros servicios en la sección de Servicios de nuestro sitio web."
  },
  {
    id: 2,
    question: "¿Cómo puedo agendar una cita?",
    answer: "Puedes agendar una cita en línea a través de nuestra página tocando Reservar lo cual le redirigirá a mi chat de WhatsApp para cordinar un turno."
  },
  {
    id: 3,
    question: "¿Esto tiene solución?",
    answer: "Todo tiene solución, siempre trabjao sobre la uña y su crecimiento, nunca la extraigo"
  },
  {
    id: 4,
    question: "¿Cuánto dura una cita promedio?",
    answer: "La duración de una cita varía según el servicio. En promedio puede durar aproximadamente 60 minutos a 90 minutos dependiendo del caso"
  },
  {
    id: 5,
    question: "¿Qué estudios posee?",
    answer: "Certificado GALENO en Consultoría Internacional Publico Privada con especialización en Microbiología en Podología con mtr 22-0124"
  }
];

const FAQSection: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="faq-section container-fluid p-5">
      <h3 className="text-dark-pink">Preguntas Frecuentes</h3>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(faq.id)}>
              <h4>{faq.question}</h4>
              <span className="toggle-icon">
                {activeFAQ === faq.id ? '−' : '+'}
              </span>
            </div>
            {activeFAQ === faq.id && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
