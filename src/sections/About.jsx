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
import { useSelector} from 'react-redux'; 
import '../styles/sections/About.scss'


const About = () => {
    const [element,controls] = useScroll()
    const theme = useSelector(state=>state.theme.darkTheme)
  return (
      <div className={`about-container ${theme===true ? 'darktheme' : ''}`} id='about' ref={element}>
            <div className="container">
                <motion.div className="details" animate={controls} variants={reveal} transition={{delay:0.6,stiffness:300}}>
                    <Title title="About Medicalist" color="blue"/>
                    <p className={`detailsP ${theme===true ? 'darktheme' : ''}`}>
                    Many older adults share a common concern: “How can I trust the health information I find on the Internet?”

                    There are thousands of medical websites. Some provide reliable health information. Some do not. Some of the medical news is current. Some of it is not. Choosing which websites to trust is an important step in gathering reliable health information.
                    </p>
                   
                    <Button content="why Medicalist?" />
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
