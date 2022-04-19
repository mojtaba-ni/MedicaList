import React from 'react';
import Title from '../components/Title';
import { useScroll } from '../components/useScroll';
import { motion } from 'framer-motion';
import { TopAnimations,CardImageAnimations,WhyTitleAnimations } from '../Animations';
import { useSelector} from 'react-redux'; 
import "../styles/sections/Why.scss"

const Why = () => {
    const [element,controls] = useScroll()
    const theme = useSelector(state=>state.theme.darkTheme)
  return (
    <div className={`why-container ${theme===true ? "darktheme" : ""}`}>
        <div className="container" ref={element} >
            <motion.div className="top" animate={controls} variants={TopAnimations} transition={{delay:0.4}}>
                <Title title='Why Medicalist?' color='pink' LineCenter={true} />
                <div className="subTitle">
                    <p className={`subTitleP ${theme===true ? "darktheme" : ""}`}>
                        Always stay Updated with the technologies thus  we help our clients 
                        by giving the best solutions for their needs  
                    </p>
                </div>
            </motion.div>
            <div className="content">
                <motion.div className='' animate={controls} variants={CardImageAnimations} transition={{delay:0.3}}>
                    <div className="video">
                        
                    </div>
                </motion.div>
                <motion.div className={`reasons ${theme===true ? "darktheme" : ""}`} animate={controls} variants={WhyTitleAnimations} transition={{delay:0.4, type:"tween"}} >
                    <ul>
                        <li> Over 10+ years of industry wide experience</li>
                        <li>
                            Provide solutions to our multiple global clients or website 
                            traffic generation and workflow
                        </li>
                        <li>Strong team of 150+ creative people </li>
                        <li> 99% agree to service level contract</li>
                        <li>ready to recieve service request 24/7</li>
                    </ul>
                </motion.div>
            </div>
        </div>


    </div>
  )
};

export default Why;
