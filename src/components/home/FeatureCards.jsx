import React from 'react';
import { FeatureCard } from './FeatureCard';

export const FeatureCards = () => {
  return (
    <div>
      <div className='w-full py-5 mb-6 rounded-lg  bg-base-100 stats'>
        <div className='grid grid-cols-1 '>
          <FeatureCard
            feature='Gestiona tus Proyectos'
            featureDescription='Puedes trabajar en mas de un proyecto a la vez, ¿A torado en una Novela? No hay problema puedes continuar con tu proyecto alternativo'
            direction={false}
          />
          <FeatureCard
            feature='Registra tu proyecto'
            featureDescription='Escribre un resumen, seleciona un genero, sube tu portada y a trabajar!'
            direction={true}
          />
          <FeatureCard
            feature='Diseña a tus personajes'
            featureDescription='Piensa en un: nombre, edad, biografía, objetivos y relevancia en la historia'
            direction={false}
          />
          <FeatureCard
            feature='Piensa en capítulos, divide en escenas'
            featureDescription='Escribre un resumen del capítulo, crealo y despues trabaja sobre todo ese capítulo.'
            direction={true}
          />
        </div>
      </div>
    </div>
  );
};
