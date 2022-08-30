import styled from "styled-components";
import {Link} from "react-router-dom";
 export  const NavbarContainer=styled.nav`
  background-color:${(props)=>(props.navStyle?"white":"#541554")};
  background-size:cover;
  height:${(props)=>(props.extendNavbar?"300px":"80px")};
  padding:10px 20px;
  color:${(props)=>(props.navStyle?"black":"white")};
  position:${(props)=>(props.navStyle?"sticky":"none")};
  top:${(props)=>(props.navStyle?"10px":"0px")};;
  z-index:100;
  width:auto;
  border-radius:${(props)=>(props.navStyle?"50px":"0px")};
  box-shadow:${(props)=>(props.navStyle?"2px 2px rgba(0,0,0,0.4)":"none")};
  margin:${(props)=>(props.navStyle?"20px":"0px")};
  font-family: Slack-Larsseit,"Helvetica Neue",Helvetica,"Segoe UI",Tahoma,Arial,sans-serif;
  overflow-x:visible;
  @media(max-width:1080px){
    border-radius:0rem;
    margin:0rem;
    top:0rem;
    box-shadow:0rem .125rem rgba(0,0,0,0.4);
  }
 @media(min-width:1080px){
    height:5rem;
 }
`
export const NavbarInnerContainer=styled.div`
      width:100%;
      height:5rem;
      display:flex;
      align-items:center;
`
export const NavbarLogo=styled.div`
      display:flex;
      align-items:center;
      overflow-x:visible;
       h2{
       font-weight:800;
       margin-left:.625rem;
       color:${(props)=>(props.navStyle?"black":"white")};
    }
    img{
      width:1.56rem;
      height:1.56rem;
    }
`
export const LeftContainer=styled.div`
   color:white;
   flex:50%;
   display:flex;
   align-items:center;
   overflow-x:visible;
   @media(max-width:1080px){
     display:none;
  } 
    .navItems{
        margin-left:1.25rem;
        overflow: hidden;
        display:flex;
        align-items:center;
        .links:hover{
            text-decoration:underline;
        } 
    }
  
`
export const NavbarLinks=styled(Link)`
   color:${(props)=>(props.navStyle?"black":"white")};
   float: left;
   font-size: .9375rem;
   font-weight:bold;
   text-decoration:none;
   margin:.625rem;
    @media(max-width:1080px){
     display:none;
  }
`
export const NavbarLinksExtended=styled(Link)`
   color:white;
   float: left;
   font-size: .9375rem;
   font-weight:bold;
   text-decoration:none;
   margin:.625rem;
   
`
export const RightContainer=styled.div`
    flex:50%;
    justify-content:flex-end;
    display:flex;
    align-items:center;
    padding-right:3.125rem;
    overflow-x:visible;
    @media(max-width:1080px){
        padding-right:0rem;
    }
    .search{
        color:${(props)=>(props.navStyle?"black":"white")};
        margin-right:1.25rem;
    }
    .search:hover{
        cursor: pointer;
    }
     .links:hover{
    text-decoration:underline;
   }
    .first:hover{
        cursor: pointer;
        border:.125rem solid ${(props)=>(props.navStyle?"#541554":"white")};
    }
   .second:hover{
        cursor: pointer;
        border-radius:0rem;
    }
`
export const Button1=styled.button`
        margin-left:1.25rem;
        color:${(props)=>(props.navStyle?"#541554":"white")};
        background-color:transparent;
        border:.063rem solid ${(props)=>(props.navStyle?"#541554":"white")};
        padding:.625rem;
        font-weight:bold;
        border-radius:.25rem;
        @media(max-width:1080px){
          display:none;
        }
`
export const Button2=styled.button`
        margin-left:.625rem;
        color:${(props)=>(props.navStyle?"white":"#541554")};
        background-color:${(props)=>(props.navStyle?"#541554":"white")};
        border:transparent;
        padding:.625rem;
        font-weight:bold;
        border-radius:0.25rem;
         @media(max-width:1080px){
            display:none;
        }
`
export const OpenLinksButton=styled.button`
  width:3.125rem;
  height:3.125rem;
  background:none;
  overflow-x:visible;
  border:none;
  color:${(props)=>(props.navStyle?"black":"white")};
  font-size:2.813rem;
  cursor: pointer;
  @media(min-width:1081px){
     display:none;
  }
`
export const NavbarExtendedContainer=styled.div`
      display:flex;
      flex-direction:column;
      color:black;
      align-items:center;
      overflow-x:visible;
      @media(min-width:1080px){
        display:none;
      }
`
