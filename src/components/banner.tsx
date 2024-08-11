import React from 'react';
import './styles/Banner.css';

const Banner: React.FC = () => {
    return (
      <div className="banner-container container-fluid d-flex align-items-center justify-content-between bg-light-pink p-5 rounded">
        <div className="banner-content">
          <h1 className="display-4 text-dark-pink">Tus pies en mis manos</h1>
          <p className="lead text-muted">¡Encuentra la solución perfecta para tus pies con nuestros servicios exclusivos y grandes descuentos. ¡Porque siempre hay una forma de mejorar tu bienestar!</p>
          <a className="btn btn-pink btn-lg" href="#services">Ver Servicios</a>
        </div>
        <div className="banner-image">
          <img src='asd.jpg'   className="img-fluid rounded shadow" />
        </div>
      </div>
    );
};

export default Banner;
