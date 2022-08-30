import React from 'react';
import {ReviewsStyle,
        Button,
        ReviewBox} from '../style/Reviews.style'
import { VideoStyle,VideoBox,Content } from '../style/VideoStyle.style';
import Review from './Review';
import vdo from '../../assets/videos/sec3.mp4';
export default function Reviews() {
  return (
  <ReviewsStyle>
        <h2>Teams large and slow rely on slack</h2>
        <p>Slack securely scales up to support collaboration at the world’s biggest companies.</p>
        <Button>
          <button className="first">MEET SLACK FOR ENTERPRISE</button>
          <button className="second">TALK TO SALES</button>
        </Button>
        <ReviewBox>
          <Review per="85%" content="of users say Slack has improved communication*"/>
          <Review per="86%" content="feel their ability to work remotely has improved*"/>
          <Review per="88%" content="feel more connected to their team"/>
        </ReviewBox>
        <VideoStyle>
            <VideoBox >
            <video style={{width: "90%"}} className="sec3" autoPlay loop muted> 
              <source src={vdo} type="video/mp4"></source>
            </video>
            </VideoBox>
            <Content>
               <p className="main">‘We were able to create a large virtual network of employees that can communicate as though they are together. There was a lot of disruption in terms of where we worked, but in terms of how we worked – very little disruption.’</p>
               <span className="name">Mark Smith</span><br/>
               <span className="designation"> Senior Technical Product Manager, T-Mobile</span><br/>
               <p className="more">See more customer stories </p>
            </Content>
        </VideoStyle>
        <p className="bottom"> *Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
    </ReviewsStyle>
   )
}
