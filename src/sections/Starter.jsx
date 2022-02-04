import React from 'react';
import workImage from '../assets/work.svg'
import {GoPlay} from 'react-icons/go'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import '../styles/sections/Starter.scss'
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const Starter = () => {
  return (
      <div className='main-container'>
          <Navbar/>
            <div className="container">
                <div className='content'>
                    <h1>
                        We Provide Sulutions to Help You to Build or Grow  Your Business !
                    </h1>
                    <p>
                        A professional web and mobile app development agency  with over 100+ web and app develop.
                        We provide a high-quality service in web and mobile app development  as well as in design.
                    </p>
                    <div className="botton-container">
                        <Button content="Watch Video" icon={<GoPlay/>}/>
                        <Button content="Request Quote" icon={<HiOutlineArrowNarrowRight/>} color='pink'/>
                    </div>
                </div>
                <div className="image">
                    <img src={workImage} alt="" />
                </div>
            </div>
      </div>
  )
};

export default Starter;
