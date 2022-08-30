import React,{useState} from 'react'
import {RowsStyle} from '../style/Footer.style';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function FooterRows(props) {
  const[open,setOpen]=useState(false);
  let extendTopics=()=>{
    setOpen(true);
  }
  let closeTopics=()=>{
    setOpen(false);
  }
  return (
    <RowsStyle open={open}>
        <h5>{props.heading}<ArrowForwardIosIcon className="openIcon" onClick={extendTopics} />
                          <KeyboardArrowDownIcon className="closeIcon" onClick={closeTopics}/></h5>
        <div >{props.topic1}</div>
        <div>{props.topic2}</div>
        <div>{props.topic3}</div>
        <div>{props.topic4}</div>
        <div>{props.topic5}</div>
        <div>{props.topic6}</div>
        <div>{props.topic7}</div>
    </RowsStyle>
  )
}
