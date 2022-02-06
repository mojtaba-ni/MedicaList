import React,{useState} from 'react';
import {BiUpArrow} from 'react-icons/bi'
import '../styles/components/ScrollToTop.scss'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const toggleUp = () =>{
        const scroll = document.documentElement.scrollTop;
        if(scroll > 300){
            setVisible(true)
        }else if(scroll<= 300){
            setVisible(false)
        }
    }
    const scrollTop = () =>{
        window.scrollTo({top:0})
    } 
    window.addEventListener("scroll" , toggleUp)
  return (
    <>
        {visible && 
            <div className='scrollToTop' onClick={scrollTop}>
                <BiUpArrow/>
            </div>
        }
    </>
  )
};

export default ScrollToTop;
