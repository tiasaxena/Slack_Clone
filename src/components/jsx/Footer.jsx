import React from 'react'
import {FooterStyle, AboveLine, BelowLine, Logo, Content, Links, LeftContainer, RightContainer, Contact}from '../style/Footer.style'
import Row from '../jsx/FooterRows';
import logo from '../../assets/images/logo.png';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
      <FooterStyle>
       <AboveLine>
         <Logo>
            <img src={logo} alt=""/>
         </Logo>
         <Content>
            <Row
              heading="WHY SLACK?"
              topic1="Slack vs email"
              topic2="Channels"
              topic3="Engagement"
              topic4="Scale"
              topic5="Watch the demo"
              topic6=""
              topic7=""
              />
             <Row
              heading="PRODUCT"
              topic1="Features"
              topic2="Integrations"
              topic3="Enterprise"
              topic4="Solutions"
              topic5=""
              topic6=""
              topic7=""
              />
               <Row
              heading="PRICING"
              topic1="Subscription"
              topic2="Paid vs free"
              topic3=""
              topic4=""
              topic5=""
              topic6=""
              topic7=""
              />
               <Row
              heading="RESOURCES"
              topic1="Parteners"
              topic2="Developers"
              topic3="Community"
              topic4="Apps"
              topic5="Blog"
              topic6="Help Centre"
              topic7="Events"
              />
               <Row
              heading="COMPANY"
              topic1="About us"
              topic2="Leadership"
              topic3="Investor relations"
              topic4="News"
              topic5="Media kit"
              topic6="Careers"
              topic7=""
              />
         </Content>
       </AboveLine>
       <hr/>
       <BelowLine>
         <Contact>
           <LeftContainer>
              <Links className="link" to="/">Status</Links>
              <Links className="link" to="/">Privacy</Links>
              <Links className="link" to="/">Terms</Links>
              <Links className="link" to="/">Cookie preferences</Links>
              <Links className="link" to="/">Contact us</Links>
              <Links className="link-last" to="/"><LanguageIcon/>Change region<KeyboardArrowDownIcon/></Links>
           </LeftContainer>
           <RightContainer>
             <Links className="link-first"><CloudDownloadOutlinedIcon/><span>Download Slack</span></Links>
             <Links className="link"><TwitterIcon/></Links>
             <Links className="link"><FacebookIcon/></Links>
             <Links className="link"><YouTubeIcon/></Links>
             <Links className="link"><LinkedInIcon/></Links>
           </RightContainer>
         </Contact>
        <span className="copyright">©2022 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</span>
       </BelowLine>
    </FooterStyle>
  )
}
