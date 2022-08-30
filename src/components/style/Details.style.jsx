import styled from "styled-components"

export const DetailsStyle=styled.div`
   background-color:#f4ede4!important;
   h2{
      padding-top:3.75rem;
      text-align:center;
      font-size:1.875rem;
      font-weight:bold;
   }
`
export const CardContainer=styled.div`
   display:flex;
   align-items:center;
   margin-top:1.875rem;
   padding:.938rem;
   justify-content:center;
   flex-wrap:wrap;
   .card:hover{
    transform: translate3D(0,-1px,0) scale(1.03);
    cursor: pointer;

   }
`
export const Card1=styled.div`
  background-color:#541554;
  color:white;
  box-shadow: .5rem 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
  transition: all .5s ease;
  margin:.625rem;
  min-height:25rem;
  max-width:13.75rem;
  width:100%;
  padding:.625rem;
  .top{
    margin: 1.25rem .625rem 5rem .625rem;
  }
  .fig{
    img{
       width:100%;
       object-fit:cover;
    } 
    margin-bottom:2.5rem;
  }
  
`
export const Bottom=styled.div`
     display:flex;
    align-items:center;
    span{
        margin-left:.625rem;
        font-weight:bold;
    }
    .arrow{
        justify-content:flex-end;
        margin-left:6.25rem;
    }
`
export const CardStyle=styled.div`
   box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
   transition: all .5s ease;
   margin:.625rem;
   min-height:25rem;
   max-width:15rem;
   width:100%;
   background-color:white;
   padding:.625rem;
   .fig{
    img{
       width:100%;
       object-fit:cover;
    } 
  }
  .top{
    margin: 1.25rem .625rem 5rem .625rem;
    p{
      color:grey;
    }
   
  }
 
`
