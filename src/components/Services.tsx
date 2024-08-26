import React from 'react';
import './styles/Services.css'; // Asegúrate de tener este archivo CSS para los estilos del componente

// Definimos un tipo para los props
interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    title: 'Consulta Inicial',
    description: 'Una evaluación completa para entender tus necesidades y ofrecerte el mejor tratamiento.',
    imageUrl: 'consulta.png'
  },
  {
    title: 'Tratamiento de Callos',
    description: 'Tratamiento especializado para eliminar callos,verrugas plantales y durezas, mejorando tu comodidad al caminar.',
    imageUrl: 'image.png'
  },
  {
    title: 'Cuidado de Uñas',
    description: 'Servicios podologicos para mantener un pie saludable y bien cuidado.',
    imageUrl: 'uñas.png'
  },
  {
    title: 'Reflexología',
    description: 'Un tratamiento holístico que estimula puntos específicos en los pies para mejorar la salud y el bienestar general.',
    imageUrl: 'reflexologia.jpg'
  }
];

const Services: React.FC = () => {
  return (
    <div className="services-container container-fluid p-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="service-card card">
              <img src={service.imageUrl} alt={service.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <a href="https://wa.me/+5412345678" className="btn btn-pink">Reservar</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
