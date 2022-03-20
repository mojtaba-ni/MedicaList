import React,{useState} from 'react'
import circle from '../assets/circle.png'
import { update } from '../redux/themeSlice';
import { useDispatch,useSelector} from 'react-redux'; 
import '../styles/components/Toggle.scss'

const Toggle = () => {
  const [DarkTheme, setDarkTheme] = useState(false)
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.darkTheme)
  console.log("DarkTheme")
  console.log(DarkTheme)
  console.log("theme")
  console.log(theme)
  
  const HandleTheme = () =>{
    setDarkTheme(!DarkTheme)
    const themechange = !DarkTheme
    dispatch(update({themechange}))
  }

  
  return (
    <div className='toggle'>
        <img src={circle} className={`toggle-img ${DarkTheme=== true ? 'img-active' : ''}`} onClick={HandleTheme}/>
    </div>
  )
}

export default Toggle