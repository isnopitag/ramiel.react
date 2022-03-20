import React from 'react';
import { Link } from 'react-router-dom';
export const Cover = () => {
  return (
    <div>
      <div
        className='hero rounded sm:min-h-0 md:min-h-screen'
        style={{
          backgroundImage: `url(https://api.lorem.space/image/fashion?w=1000&h=800)`,
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>
              ¡Hola Bienvenido a Be4writing!
            </h1>
            <p className='mb-5 text-2xl fond-bold'>
              ¡Diseña historias Asombrosas!
            </p>
            <Link to='/register' className='btn btn-primary mx-4 my-2'>
              ¡Crea una cuenta!
            </Link>
            <Link to='/login' className='btn btn-secondary mx-2'>
              Incia Sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
