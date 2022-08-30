import styled from "styled-components"

export const ReviewsStyle=styled.div`
   background-color:white;
   h2{
     margin-top:6.25rem;
     text-align:center;
     font-weight:bold;
     font-size:2.5rem;
   }
   p{
     margin-top:1.25rem;
     text-align:center;
    
   }
   .bottom{
     padding:1.25rem;
     font-size:.75rem;
     color:#696969!important;
   }
`
export const Button=styled.div`
  display:flex;
  align-items:center;
  margin-left: 35%;
  padding: 2rem 0rem;
  @media(max-width:880px){
    flex-direction:column;
    width:100%;
    margin-left: 0%;
  }
  .first{
    background-color:#541554;
    color:white;
    border-radius:.125rem;
    padding:1rem 2rem;
    border:transparent;
    @media(max-width:880px){
      width:80%;
    }
  }
  .second{
    background-color:transparent;
    color:#541554;
    border:1px solid #541554;
    border-radius:.125rem;
    padding:.938rem 1.875rem;
    margin-left:.625rem;
    @media(max-width:880px){
      margin-top:1.25rem;
      margin-left:0rem;
      width:80%;
    }
  }
`
export const ReviewBox=styled.div`
   display:flex;
   align-items:center;
   justify-content: center;
   @media(max-width:880px){
    flex-direction:column;
   }

`
export const ReviewStyle=styled.div`
    margin:2.5rem;
    flex-wrap:wrap;
    h1{
      font-size:3.75rem;
      color:#541554;
      font-weight:bold;
      text-align:center;
      margin-bottom:0rem;
    }
    p{
      font-weight:bold;
      text-align:center;
    }
`
