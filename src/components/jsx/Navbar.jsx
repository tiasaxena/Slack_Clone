import React,{useState} from 'react'
import img from '../../assets/images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import {NavbarContainer,
        LeftContainer,
        RightContainer,
       NavbarExtendedContainer,
       NavbarInnerContainer,
       NavbarLinks,
       NavbarLogo,
       OpenLinksButton,
       NavbarLinksExtended,
      Button1,
      Button2 } from '../style/Navbar.style';

export default function Navbar() {
  const[extendNavbar,setExtendNavbar]=useState(false);
  const[navStyle,setNavStyle]=useState(false);
  const changeNavbarStyle=()=>{
     if(window.scrollY>=100){
      setNavStyle(true);
     }
     else{
      setNavStyle(false);
     }
  }
  window.addEventListener('scroll',changeNavbarStyle);
  return (
    <NavbarContainer navStyle={navStyle} extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <NavbarLogo navStyle={navStyle}>
             <img src={img} alt="slack logo"/>
             <h2>slack</h2>
        </NavbarLogo >
         <LeftContainer>
            
            <div className="navItems">
                <NavbarLinks navStyle={navStyle} className="links" to="/">Products</NavbarLinks >
                <NavbarLinks navStyle={navStyle} className="links" to="/">Solutions</NavbarLinks >
                <NavbarLinks navStyle={navStyle} className="links" to="/">Enterprice</NavbarLinks >
                <NavbarLinks navStyle={navStyle} className="links" to="/">Resources</NavbarLinks >
                <NavbarLinks navStyle={navStyle} className="links"  to="/">Pricing</NavbarLinks >
            </div>
         </LeftContainer>
         <RightContainer navStyle={navStyle}>
           <SearchIcon className="search"/>
           <NavbarLinks navStyle={navStyle} className="links" to="/">Sign in</NavbarLinks >
           <Button1 navStyle={navStyle} className="first">TALK TO SALES</Button1>
           <Button2 navStyle={navStyle} className="second">TRY FOR FREE </Button2>
           <OpenLinksButton  navStyle={navStyle}  onClick={()=>{
               setExtendNavbar((curr)=>!curr);
           }}>{(extendNavbar)?<>&#10005;</>:<>&#8801;</>}
           </OpenLinksButton>
         </RightContainer>
      </NavbarInnerContainer>
      { extendNavbar &&(
        <NavbarExtendedContainer>
                 <NavbarLinksExtended className="links" to="/">Products</NavbarLinksExtended >
                <NavbarLinksExtended className="links" to="/">Solutions</NavbarLinksExtended >
                <NavbarLinksExtended className="links" to="/">Enterprice</NavbarLinksExtended >
                <NavbarLinksExtended  className="links" to="/">Resources</NavbarLinksExtended >
                <NavbarLinksExtended className="links"  to="/">Pricing</NavbarLinksExtended >
                <NavbarLinksExtended className="links" to="/">Sign in</NavbarLinksExtended >
      </NavbarExtendedContainer>)}
    </NavbarContainer>
  )
  
}
