import React from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title'
import Button from '../components/Button';
import BlogImage1 from '../assets/d1.jpg'
import BlogImage2 from '../assets/d2.jpg'
import BlogImage3 from '../assets/d3.jpg'
import Blog from '../components/Blog';
import { useScroll } from '../components/useScroll';
import {TopAnimations} from '../Animations'
import { useSelector} from 'react-redux'; 
import '../styles/sections/Blogs.scss'


const Blogs = () => {
    const [element,controls] = useScroll()
    const theme = useSelector(state=>state.theme.darkTheme)
  return (
    <div className={`blog-container ${theme===true ? 'darktheme' : ''}`} id='blog' ref={element}>
        <div className="container">
            <motion.div className="title-container" animate={controls} variants={TopAnimations} transition={{delay:0.4}}>
                <Title title="Blogs" color="blue" LineCenter={true} />
                <p className={`blog-containerP ${theme===true ? 'darktheme' : ''}`}>
                    Insights and advice from our experts.
                </p>
            </motion.div>
            <div className="blogs" ref={element}>
                <Blog
                image={BlogImage1}
                title="Alzheimer's: Loss of wake-promoting neurons may explain sleepiness "
                subTitle="Sleep disruption is common among patients with neurodegenerative conditions. "
                animateCustom={controls}               
                />
                <Blog
                image={BlogImage2}
                title="Long COVID's cardiovascular implications"
                subTitle="Millions of people worldwide live with long COVID, a condition characterized by symptoms of COVID-19 and other"
                animateCustom={controls}
                />
                <Blog
                image={BlogImage3}
                title="What does the latest research say about multiple sclerosis?"
                subTitle="Millions of people worldwide live with multiple sclerosis (MS), a life-altering, progressive condition. "
                animateCustom={controls}
                />
            </div>
            <div className="button-container">
                <Button content="View all" color='pink' />
            </div>
        </div>

    </div>
  )
};

export default Blogs;
