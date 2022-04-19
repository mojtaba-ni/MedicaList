import React from 'react';
import workImage from '../assets/landing.png'
import {GoPlay} from 'react-icons/go'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import '../styles/sections/Starter.scss'
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import {motion} from "framer-motion"
import { useScroll } from '../components/useScroll';
import {HeaderAnimations,ImageAnimations} from "../Animations"
import {useSelector} from 'react-redux'

const Starter = () => {
    const [element,controls] = useScroll()
    const theme = useSelector(state=>state.theme.darkTheme)
  return (
      <div className={`main-container ${theme===true ? "darktheme" : ""}`} id='service' ref={element} >
          <Navbar/>
            <div className="container">
                <motion.div className="image" variants={ImageAnimations} animate={controls} transition={{type:"tween"}}>
                    <img src={workImage} alt="" />
                </motion.div>
                <motion.div className='content' variants={HeaderAnimations} animate={controls} transition={{delay:0.4,type:"tween"}}>
                    <h1 className={`contentH1  ${theme===true ? "darktheme" : ""}`}>
                        Personal care for your healthy living
                    </h1>
                    <p className={`containerP ${theme===true ? "darktheme" : ""}`}>
                       From preventive care and checkups, to immunizatons and exams, our primary care physicians and providers work to keep 
                       you and your whole Family healthy and strong each and everyday
                    </p>
                    <div className="button-container">
                       
                        <Button content="Request Quote" icon={<HiOutlineArrowNarrowRight/>} color='pink'/>
                    </div>
                </motion.div>
            </div>
      </div>
  )
};

export default Starter;
