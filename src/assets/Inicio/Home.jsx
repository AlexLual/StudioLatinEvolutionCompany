import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import ColorSchemesExample from '../comunes/Nabvar.jsx';
import ControlledCarousel from "./Carousel.jsx";
import CardPackage from '../comunes/CardPackage.jsx';
import Footer from "../comunes/Footer.jsx";
//imagenes
import chica from '../../imagenes/1.webp'




function Home() {
  return (
    <div>
      <ColorSchemesExample />
      <ControlledCarousel />

      <section class="slogan">
        <h1>Studio Latin Evolution Company</h1>
        <div>
          <h4>
            Aqui podras envcontrar las mejores coreografias de la ciudad para
            graduaciones, XV años, y mas fechas imortantes, aqui podras
            encontrar a los mejores maestros con quienes de la mano aprenderan
            los mejores bailes actuales como viejitos
          </h4>
          <h3>
            nuestrolema
            <span>
              "hacer especiales esos momentos con nuestros bailes y coreografias
              "
            </span>
          </h3>
        </div>
      </section>
        <h2>Paquetes</h2>
      <section class="container package  d-flex">
        
        <CardPackage
          img={chica}
          title="Paquete Clasico"
          text="Paquete con 6 bailarines y un privado"
        />

        <CardPackage
          img={chica}
          title="Paquete Clasico"
          text="Paquete con 6 bailarines y un privado" 
          />
        
        <CardPackage
          img={chica}
          title="Paquete Clasico"
          text="Paquete con 6 bailarines y un privado" 
          />
        
        <CardPackage
          img={chica}
          title=" Paquete Clasico"
          text="Paquete con 6 bailarines y un privado" 
          />
      </section>

      <Footer />

    </div>
    
  );
}

export default Home;
