import React, { useState } from 'react';
import './styles/ServiceSection.css'; // Asegúrate de tener este archivo CSS para los estilos del componente

interface Service {
  id: number;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Consulta Inicial",
    description: "La consulta inicial es fundamental para evaluar el estado de tus pies. En esta cita, realizaré un examen completo para diagnosticar cualquier problema o condición. Te proporcionaré recomendaciones y un plan de tratamiento personalizado para tus necesidades."
  },
  {
    id: 2,
    title: "Tratamiento de Callos",
    description: "Ofrezco tratamientos especializados para separar callos de uñas, Onicomicosis, aliviando el dolor y mejorando la comodidad de tus pies. Utilizo técnicas y productos de alta calidad para asegurar resultados efectivos y duraderos."
  },
  {
    id: 3,
    title: "Cuidado de Uñas",
    description: "El cuidado de las uñas es crucial para evitar problemas como infecciones, Microniquia, uñas pálidas y uñas encarnadas. En mi salón, realizaré servicios de corte, limado y tratamiento para mantener tus uñas saludables y libres de infecciones."
  },
  {
    id: 4,
    title: "Reflexología",
    description: "La reflexología es una técnica terapéutica que se basa en la aplicación de presión en puntos específicos de los pies para estimular diversas partes del cuerpo. Este tratamiento no solo alivia el estrés, sino que también mejora la circulación sanguínea y promueve un equilibrio general del cuerpo. Es ideal para quienes buscan un enfoque natural para mejorar su salud y bienestar."
  }
];

const ServiceSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service>(services[0]);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  return (
    <div  id="services" className="service-section container-fluid p-5">
      <div className="row">
        <div className="col-md-4">
          <div className="service-list">
            <h3 className="text-dark-pink">Servicios</h3>
            <ul className="list-group">
              {services.map((service) => (
                <li
                  key={service.id}
                  className={`list-group-item ${selectedService.id === service.id ? 'active' : ''}`}
                  onClick={() => handleServiceClick(service)}
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="service-details bg-light p-4 rounded shadow">
            <h3 className="text-dark-pink">{selectedService.title}</h3>
            <p className="lead">{selectedService.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
