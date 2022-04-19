import React,{useState} from 'react';
import Button from './Button'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose}from 'react-icons/md'
import BrandName from './BrandName';
import { motion } from 'framer-motion';
import { navbarAnimations } from '../Animations'; 
import { useScroll } from './useScroll';
import '../styles/components/Navbar.scss'
import '../components/Toggle'
import Toggle from '../components/Toggle';
import { useSelector} from 'react-redux'; 



const Navbar = () => {
    const [element,controls] = useScroll()
    const [toggleNavbar,setToggleNavbar ] = useState(false);
    const theme = useSelector(state=>state.theme.darkTheme)

    const HandleToggleNavbar = () =>{
        setToggleNavbar(!toggleNavbar)
    }
  return (
    <motion.div className={`navbar ${toggleNavbar===true  ? "active" : ""}`} 
    variants={navbarAnimations}  transition={{delay:0.4}}>
        <nav>
            <div className="links">
                <ul>
                    <li>
                        <Button content="Contact" />
                    </li>
                    <li>
                       <Toggle/>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#service">Service</a>
                    </li>
                    <li>
                        <a href="#testimonial">List</a>
                    </li>
                    <li>
                        <a href="#blog">Blog</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="col">
            <BrandName/>
            <div className="collapseble-button">
                {!toggleNavbar ?
                <GiHamburgerMenu onClick={HandleToggleNavbar}/> :
                <GiHamburgerMenu onClick={HandleToggleNavbar}/>
                }
            </div>
        </div>
    </motion.div>
  )
};

export default Navbar;

