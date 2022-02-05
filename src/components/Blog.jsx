import React from 'react';
import Button from '../components/Button'
import "../styles/components/Blog.scss"

const Blog = ({image,title,subTitle}) => {
  return <div className='blog-container'>
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
  </div>;
};

export default Blog;

