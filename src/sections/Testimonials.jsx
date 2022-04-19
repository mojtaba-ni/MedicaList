import React from 'react';
import Card from '../components/Card';
import Title from '../components/Title';
import {HiLightBulb} from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import { useSelector} from 'react-redux'; 
import { TopAnimations } from '../Animations';
import "../styles/sections/Testimonials.scss"

const Testimonials = () => {
    const [element,controls] = useScroll()
    const theme = useSelector(state=>state.theme.darkTheme)
  return (
    <div className={`testimonials-container ${theme===true ? 'darktheme' : ''}`} id='testimonial' ref={element}>
        <div className="container">
            <motion.div className="top" animate={controls} variants={TopAnimations} transition={{delay:0.4}}>
                <Title title='The most popular doctors' color='blue' LineCenter={true} />
                <div className={`subTitle ${theme===true ? 'darktheme' : ''}`}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim vero fugiat iusto harum commodi atque culpa error minima quisquam tempore omnis.
                    </p>
                </div>
            </motion.div>
            <motion.div className="content" ref={element}>
                <Card title="Kishan H.Sheth"   Logo={<HiLightBulb/>} animateCustom={controls}/>
                <Card title="Kishan H.Sheth"  Logo={<HiLightBulb/>} animateCustom={controls}/>
                <Card title="Kishan H.Sheth"  Logo={<HiLightBulb/>} animateCustom={controls}/>
            </motion.div>
        </div>


    </div>
  )
};

export default Testimonials;
