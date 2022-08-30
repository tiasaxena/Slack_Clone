import React from 'react'
import {CardStyle,
       Bottom} from '../style/Details.style';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Cards(props) {
  let Style={
    color:"#1264a3"
}
  return (
    <CardStyle className="card">
      <div className="fig">
       <img src={props.img} alt=""/>
      </div>
      <div className="top">
            <p>{props.topic}</p>
            <h3>{props.content}</h3>
      </div>
      <Bottom>
          <span>{props.more}</span>
          <div className="arrow">
          <ArrowForwardIcon style={Style}/>
          </div>
      </Bottom>
    </CardStyle>
  )
}
