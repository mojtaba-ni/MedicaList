import React from 'react';
import Title from '../components/Title';
import Button from '../components/Button'
import Card from '../components/Card';
import {HiLightBulb} from 'react-icons/hi';
import {BsCalendarFill} from 'react-icons/bs';
import {BiSupport} from 'react-icons/bi';
import {SiGooglemessages} from 'react-icons/si';
import {reveal} from  '../Animations'
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import '../styles/sections/About.scss'


const About = () => {
    const [element,controls] = useScroll()
  return (
      <div className='about-container' id='about' ref={element}>
            <div className="container">
                <motion.div className="details" animate={controls} variants={reveal} transition={{delay:0.6,stiffness:300}}>
                    <Title title="About cryo" color="blue"/>
                    <p>
                        We believed that everyone deservesto have a Website or Online Store.
                        Innovation and simplicity make us happy. Our mission is to help people
                        achieve what they have passionate about it. 
                    </p>
                    <p>
                        We are excited to simplify  SEO  for everyone  through  software , education, or cimmunity.
                    </p>
                    <Button content="why cryo?" />
                </motion.div>
                <div className="cards" ref={element}>
                    <Card 
                    title="Innovative Ideas" 
                    Logo={<HiLightBulb/>} 
                    animateCustom={controls}/>
                    <Card 
                    title="Planning" 
                    Logo={<BsCalendarFill/>} 
                    animateCustom={controls}/>
                    <Card 
                    title="Communication" 
                    Logo={<BiSupport/>} 
                    animateCustom={controls}/>
                    <Card 
                    title="24 * 7 support" 
                    Logo={<SiGooglemessages/>}  
                    animateCustom={controls}/>
                </div>
            </div>
      </div>
  )
};

export default About;
