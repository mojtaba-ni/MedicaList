import React from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title'
import Button from '../components/Button';
import BlogImage1 from '../assets/blogImage1.jpg'
import BlogImage2 from '../assets/blogImage2.jpg'
import BlogImage3 from '../assets/blogImage3.jpg'
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
                <p>
                    Insights and advice from our experts.
                </p>
            </motion.div>
            <div className="blogs" ref={element}>
                <Blog
                image={BlogImage1}
                title="Top list off Mistakes to Avoid During MVP development "
                subTitle="Always stay Updated with the technologies thus  we help our clients 
                by giving the best solutions for their needs  "
                animateCustom={controls}               
                />
                <Blog
                image={BlogImage2}
                title="A Day in the life on Developer Manager "
                subTitle="Always stay Updated with the technologies thus  we help our clients 
                by giving the best solutions for their needs  "
                animateCustom={controls}
                />
                <Blog
                image={BlogImage1}
                title="How to Build a Strong Remote Work Culture "
                subTitle="Always stay Updated with the technologies thus  we help our clients 
                by giving the best solutions for their needs  "
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
