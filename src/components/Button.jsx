import React from 'react';

const Button = ({content, icon="" , color="blue"}) => {
  return (
    <button className={`${color}`}>
        {content} {icon}
    </button>
  )
};

export default Button;
