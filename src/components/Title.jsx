import React from 'react';
import '../styles/components/Title.scss'

const Title = ({title,color,LineCenter=false}) => {
  return (
      <div className={`title ${LineCenter===true ? "center" : ""}`}>
        <h2>{title}</h2>
        <div className={`${color}`}>
            
        </div>
      </div>
  )
};

export default Title;
