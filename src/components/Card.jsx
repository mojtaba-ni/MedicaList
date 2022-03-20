import React from 'react';
import { CardAnimations } from '../Animations';
import { motion } from 'framer-motion';
import { useSelector} from 'react-redux'; 
import '../styles/components/Card.scss'

const Card = ({title,Logo,animateCustom}) => {
  const theme = useSelector(state=>state.theme.darkTheme)
  return (
    <motion.div className={`card ${theme===true ? "darktheme" : ""}`} animate={animateCustom} variants={CardAnimations}>
        <div className="logo">{Logo}</div>
        <div className={`card-title ${theme===true ? "darktheme" : ""}`}>
            <h4>{title}</h4>
        </div>
    </motion.div>
  )
};

export default Card;
