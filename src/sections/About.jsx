import React from 'react';
import Title from '../components/Title';
import Button from '../components/Button'
import Card from '../components/Card';
import {HiLightBulb} from 'react-icons/hi';
import {BsCalendarFill} from 'react-icons/bs';
import {BiSupport} from 'react-icons/bi';
import {SiGooglemessages} from 'react-icons/si';
import '../styles/sections/About.scss'


const About = () => {
  return (
      <div className='about-container'>
            <div className="container">
                <div className="details">
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
                </div>
                <div className="cards">
                    <Card title="Innovative Ideas" Logo={<HiLightBulb/>}/>
                    <Card title="Planning" Logo={<BsCalendarFill/>}/>
                    <Card title="Communication" Logo={<BiSupport/>}/>
                    <Card title="24 * 7 support" Logo={<SiGooglemessages/>}/>
                </div>
            </div>
      </div>
  )
};

export default About;
