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
    description: "La consulta inicial es fundamental para evaluar el estado de tus pies. En esta cita, nuestro equipo realizará un examen completo para diagnosticar cualquier problema o condición. Te proporcionaremos recomendaciones y un plan de tratamiento personalizado para tus necesidades."
  },
  {
    id: 2,
    title: "Tratamiento de Callos",
    description: "Ofrecemos tratamientos especializados para eliminar callos y durezas, aliviando el dolor y mejorando la comodidad. Utilizamos técnicas y productos de alta calidad para asegurar resultados efectivos y duraderos."
  },
  {
    id: 3,
    title: "Cuidado de Uñas",
    description: "El cuidado de las uñas es crucial para evitar problemas como infecciones y uñas encarnadas. En nuestra clínica, realizamos servicios de corte, limado y tratamiento para mantener tus uñas saludables y libres de infecciones."
  }
];

const ServiceSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service>(services[0]);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  return (
    <div className="service-section container-fluid p-5">
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
