import React from 'react';
import {useSelector} from 'react-redux'; 
import '../styles/components/BrandName.scss'

const BrandName = () => {
  const theme = useSelector(state => state.theme.darkTheme)
  return (
    <div className='brand'>
      <span className={`brandname ${theme===true ? "darktheme" : ""}`}>MDL</span>
    </div>
  )
};

export default BrandName;
