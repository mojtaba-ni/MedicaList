import React,{useState} from 'react'
import circle from '../assets/circle.png'
import { update } from '../redux/themeSlice';
import { useDispatch,useSelector} from 'react-redux'; 
import '../styles/components/toggle.css'

const Toggle = () => {
  const [DarkTheme, setDarkTheme] = useState(false)
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.darkTheme)
 
  const HandleTheme = () =>{
    setDarkTheme(!DarkTheme)
    const themechange = !DarkTheme
    dispatch(update({themechange}))
  }

  
  return (
    <label htmlFor="theme" className="theme" >
        
        <span className="theme__toggle-wrap">
            <input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" onClick={HandleTheme} />
           
            <span className="theme__icon">
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            
            </span>
        </span>
        
    </label>
  )
}

export default Toggle