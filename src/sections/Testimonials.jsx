import React from 'react';
import Card from '../components/Card';
import Title from '../components/Title';
import {HiLightBulb} from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import { TopAnimations } from '../Animations';
import "../styles/sections/Testimonials.scss"

const Testimonials = () => {
    const [element,controls] = useScroll()
  return (
    <div className='testimonials-container' id='testimonial' ref={element}>
        <div className="container">
            <motion.div className="top" animate={controls} variants={TopAnimations} transition={{delay:0.4}}>
                <Title title='Testimonials' color='blue' LineCenter={true} />
                <div className="subTitle">
                    <p>
                        Always stay Updated with the technologies thus  we help our clients 
                        by giving the best solutions for their needs  
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
