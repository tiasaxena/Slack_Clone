import React from 'react';
import {ReviewStyle} from '../style/Reviews.style';
export default function Review(props) {
  return (
    <ReviewStyle>
       <h1>{props.per}</h1>
       <p>{props.content}</p>
    </ReviewStyle>
  )
}
