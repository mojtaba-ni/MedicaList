import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button'
import { CardAnimations } from '../Animations';
import "../styles/components/Blog.scss"

const Blog = ({image,title,subTitle,animateCustom}) => {
  return <motion.div className='blog-container' animate={animateCustom} variants={CardAnimations} transition={{delay:0.4}}>
        <div className="container">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="content">
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div className="subTitle">
                    <p>{subTitle}</p>
                </div>
                <div className="button">
                    <Button content="Read more" />
                </div>
            </div>
        </div>
  </motion.div>;
};

export default Blog;

