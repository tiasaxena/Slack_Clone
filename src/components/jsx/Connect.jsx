import React from 'react';
import {ConnectStyle,Button1,Button2} from '../style/Connect.style';

export default function Connect() {
  return (
    <ConnectStyle>
       <h1>Welcome to your new digital HQ</h1>
       <div className="button">
          <Button2 className="second">TRY FOR FREE</Button2>
          <Button1 className="first">TALK TO SALES</Button1>
       </div>
    </ConnectStyle>
  )
}
