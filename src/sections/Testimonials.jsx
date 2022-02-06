import React from 'react';
import Card from '../components/Card';
import Title from '../components/Title';
import {HiLightBulb} from 'react-icons/hi';
import "../styles/sections/Testimonials.scss"

const Testimonials = () => {
  return (
    <div className='testimonials-container' id='testimonial'>
        <div className="container">
            <div className="top">
                <Title title='Testimonials' color='blue' LineCenter={true} />
                <div className="subTitle">
                    <p>
                        Always stay Updated with the technologies thus  we help our clients 
                        by giving the best solutions for their needs  
                    </p>
                </div>
            </div>
            <div className="content">
                <Card title="Kishan H.Sheth"   Logo={<HiLightBulb/>}/>
                <Card title="Kishan H.Sheth"  Logo={<HiLightBulb/>}/>
                <Card title="Kishan H.Sheth"  Logo={<HiLightBulb/>}/>
            </div>
        </div>


    </div>
  )
};

export default Testimonials;
