import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Suscribete a nuestro boletin</h1>
      <p className="p__opensans">Y nunca te pierdas nuestras noticias!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Ingrese su email" />
      <button type="button" className="custom__button">Suscribirse</button>
    </div>
  </div>
);

export default Newsletter;
