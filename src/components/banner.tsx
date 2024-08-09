import React from 'react';
import './styles/Banner.css';

const Banner: React.FC = () => {
    return (
      <div className="banner-container container-fluid d-flex align-items-center justify-content-between bg-light-pink p-5 rounded">
        <div className="banner-content">
          <h1 className="display-4 text-dark-pink">Podologia Mariu</h1>
          <p className="lead text-muted">Aprovecha nuestros servicios exclusivos con grandes descuentos.</p>
          <a className="btn btn-pink btn-lg" href="#services">Ver Servicios</a>
        </div>
        <div className="banner-image">
          <img src='asd.jpg'   className="img-fluid rounded shadow" />
        </div>
      </div>
    );
};

export default Banner;
