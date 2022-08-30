import React from 'react';
import {DetailsStyle, CardContainer, Card1, Bottom} from '../style/Details.style';
import Cards from './Cards';
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card1.png';
import card3 from '../../assets/images/card3.jpg';
import card4 from '../../assets/images/card4.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Details() {
    let Style={
        color:"white"
    }
  return (
    <DetailsStyle>
       <h2>Take a deeper dive into a new way to work</h2>
       <CardContainer>
          <Card1 className="card">
            <div className="top">
            <p>Collection</p>
            <h4>Slack as your digital HQ</h4>
            </div>
            <div className="fig">
                <img src={card1} alt=""/>
            </div>
            <Bottom>
                <span>SEE ALL</span>
                <div className="arrow">
                <ArrowForwardIcon style={Style}/>
                </div>
            </Bottom>
          </Card1>
          <Cards 
            img={card2}
            topic="Resource"
            content="See how others are building their digital HQ"
            more="READ MORE"
          />
          <Cards 
            img={card3}
            topic="Webinar"
            content="Embracing a digital-first approach to work"
            more="WATCH NOW"
          />
          <Cards 
            img={card4}
            topic="E-book"
            content="Reinventing work: new imperatives for the future of working"
            more="GET E-BOOK"
          />
       </CardContainer>
    </DetailsStyle>
  )
}
