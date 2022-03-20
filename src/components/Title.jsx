import React from 'react';
import { useSelector} from 'react-redux'; 
import '../styles/components/Title.scss'

const Title = ({title,color,LineCenter=false}) => {
  const theme = useSelector(state=>state.theme.darkTheme)
  return (
      <div className={`title ${LineCenter===true ? "center" : ""}`}>
        <h2 className={`titleH2 ${theme===true ? "darktheme" : ""}`}>{title}</h2>
        <div className={`${color}`}>
            
        </div>
      </div>
  )
};

export default Title;
