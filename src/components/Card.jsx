import React from 'react';
import { CardAnimations } from '../Animations';
import { motion } from 'framer-motion';
import '../styles/components/Card.scss'

const Card = ({title,Logo,animateCustom}) => {
  return (
    <motion.div className='card' animate={animateCustom} variants={CardAnimations}>
        <div className="logo">{Logo}</div>
        <div className="card-title">
            <h4>{title}</h4>
        </div>
    </motion.div>
  )
};

export default Card;
