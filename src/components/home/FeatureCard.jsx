import React from 'react';
import PropTypes from 'prop-types';

export const FeatureCard = ({
  feature,
  featureDescription,
  image,
  direction,
}) => {
  return (
    <div
      className={`card lg:card-side ${
        direction ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }  bg-gray-700 mx-4 my-2`}
    >
      <figure>
        <img src={image} alt='Feauture' />
      </figure>

      <div className='card-body items-center text-center'>
        <h2 className='card-title  text-5xl  font-bold'>{feature}</h2>
        <p className='py-6'>{featureDescription}.</p>
        <div className='card-actions justify-end'></div>
      </div>
    </div>
  );
};
FeatureCard.defaultProps = {
  feature: 'Feature',
  featureDescription: 'Feature Desc',
  image: 'https://api.lorem.space/image/album?w=800&h=400',
  direction: false,
};
FeatureCard.propTypes = {
  repo: PropTypes.object.isRequired,
};
