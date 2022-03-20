import React from 'react';
import { GoCheck } from 'react-icons/go';
export const FeautureTable = () => {
  const features = [
    { id: 1, name: 'Es gratis' },
    { id: 2, name: 'Gestiona varios proyectos a la vez' },
    { id: 3, name: 'Trabaja sobre capitulos' },
    { id: 4, name: 'Diseña tus personajes' },
    { id: 5, name: 'Registra tus notas' },
    { id: 6, name: 'Crea una linea de tiempo de eventos' },
    { id: 7, name: '¡En serio es gratis!' },
  ];
  return (
    <div class='overflow-x-auto'>
      <table class='table table-zebra w-full'>
        <thead>
          <tr>
            <th className='text-center'>Caracteristica</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {features.map(({ id, name }) => (
            <tr key={id} className='text-center'>
              <td>{name}</td>
              <td>
                <GoCheck className='inline pr-2 text-3xl text-success' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
