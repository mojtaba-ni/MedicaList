import React from 'react';
import Title from '../components/Title';
import {GoPlay} from 'react-icons/go'
import "../styles/sections/Why.scss"

const Why = () => {
  return (
    <div className='why-container'>
        <div className="container">
            <div className="top">
                <Title title='Why cryo?' color='pink' LineCenter={true} />
                <div className="subTitle">
                    <p>
                        Always stay Updated with the technologies thus  we help our clients 
                        by giving the best solutions for their needs  
                    </p>
                </div>
            </div>
            <div className="content">
                <div className=''>
                    <div className="video">
                        <GoPlay/>
                    </div>
                </div>
                <div className="reasons">
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
                </div>
            </div>
        </div>


    </div>
  )
};

export default Why;
