import React from 'react';
import Title from '../components/Title'
import Button from '../components/Button';
import BlogImage1 from '../assets/blogImage1.jpg'
import BlogImage2 from '../assets/blogImage2.jpg'
import BlogImage3 from '../assets/blogImage3.jpg'
import '../styles/sections/Blogs.scss'
import Blog from '../components/Blog';

const Blogs = () => {
  return (
    <div className='blog-container'>
        <div className="container">
            <div className="title-container">
                <Title title="Blogs" color="blue" LineCenter={true} />
                <p>
                    Insights and advice from our experts.
                </p>
            </div>
            <div className="blogs">
                <Blog
                image={BlogImage1}
                title="Top list off Mistakes to Avoid During MVP development "
                subTitle="Always stay Updated with the technologies thus  we help our clients 
                by giving the best solutions for their needs  "
                />
                <Blog
                image={BlogImage2}
                title="A Day in the life on Developer Manager "
                subTitle="Always stay Updated with the technologies thus  we help our clients 
                by giving the best solutions for their needs  "
                />
                <Blog
                image={BlogImage1}
                title="How to Build a Strong Remote Work Culture "
                subTitle="Always stay Updated with the technologies thus  we help our clients 
                by giving the best solutions for their needs  "
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
