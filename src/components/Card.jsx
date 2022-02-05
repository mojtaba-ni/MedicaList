import React from 'react';
import '../styles/components/Card.scss'

const Card = ({title,Logo}) => {
  return (
    <div className='card'>
        <div className="logo">{Logo}</div>
        <div className="card-title">
            <h4>{title}</h4>
        </div>
    </div>
  )
};

export default Card;
