import React from 'react';
import workImage from '../assets/work.svg'
import {GoPlay} from 'react-icons/go'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import '../styles/sections/Starter.scss'
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import {motion} from "framer-motion"
import { useScroll } from '../components/useScroll';
import {HeaderAnimations,ImageAnimations} from "../Animations"

const Starter = () => {
    const [element,controls] = useScroll()
  return (
      <div className='main-container'id='service' ref={element} >
          <Navbar/>
            <div className="container">
                <motion.div className='content' variants={HeaderAnimations} animate={controls} transition={{delay:0.4,type:"tween"}}>
                    <h1>
                        We Provide Sulutions to Help You to Build or Grow  Your Business !
                    </h1>
                    <p>
                        A professional web and mobile app development agency  with over 100+ web and app develop.
                        We provide a high-quality service in web and mobile app development  as well as in design.
                    </p>
                    <div className="button-container">
                        <Button content="Watch Video" icon={<GoPlay/>}/>
                        <Button content="Request Quote" icon={<HiOutlineArrowNarrowRight/>} color='pink'/>
                    </div>
                </motion.div>
                <motion.div className="image" variants={ImageAnimations} animate={controls} transition={{type:"tween"}}>
                    <img src={workImage} alt="" />
                </motion.div>
            </div>
      </div>
  )
};

export default Starter;
