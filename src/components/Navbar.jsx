import React,{useState} from 'react';
import Button from './Button'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose}from 'react-icons/md'
import '../styles/components/Navbar.scss'
import BrandName from './BrandName';

const Navbar = () => {
    const [toggleNavbar,setToggleNavbar ] = useState(false);
    const HandleToggleNavbar = () =>{
        setToggleNavbar(!toggleNavbar)
    }
  return (
    <div className={`navbar ${toggleNavbar===true ? "active" : ""}`}>
        <div className="col">
            <BrandName/>
            <div className="collapseble-button">
                {!toggleNavbar ? 
                <GiHamburgerMenu onClick={HandleToggleNavbar }/> 
                : <MdClose onClick={HandleToggleNavbar }/> }
            </div>
        </div>
        <nav>
            <div className="links">
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Service</a>
                    </li>
                    <li>
                        <a href="#">Testimonal</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#"></a>
                    </li>
                    <li>
                        <Button content="Contact" />
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
};

export default Navbar;

