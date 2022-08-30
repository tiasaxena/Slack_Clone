import styled from "styled-components";

export const HeaderStyle=styled.div`
   padding:3rem 0rem 9rem 1.5rem;
   max-width:100vw;
   height:auto;
   background-color:#541554;
    display:flex;
    align-items: center;
   font-family: Slack-Larsseit,"Helvetica Neue",Helvetica,"Segoe UI",Tahoma,Arial,sans-serif;
   overflow-x:hidden;
   @media(max-width:880px){
     display:block;
    }
  
`
export const HeaderContent=styled.div`
    flex:0.45;
    color:white;
    padding:2rem;
   
    h2{
       font-size:4rem;
       font-weight:bold;
       word-spacing:0em;
       @media(max-width:880px){
        text-align:center;
       }
       @media(max-width:340px){
        font-size:2rem;
       }
    }
    p{
       font-weight:bold;
        span{
            color:#ecb22e!important;
        }
        @media(max-width:880px){
        text-align:center;
       }
    }
   
`
export const Button =styled.div`
   display:flex;
   align-items:center;
   margin-top:1.25rem;
   overflow-x:visible;
   @media(max-width:1080px){
     display:inline;
   }
   .btn1{
        color:"#541554";
        background-color:white;
        border:transparent;
        padding:.9375rem;
        font-weight:bold;
        border-radius:0.3rem; 
        @media(max-width:1080px){
            margin-top:1.25 rem;
            padding:0.9375rem 1.562rem;
        }
        @media(max-width:880px){
            margin:1.25rem 3.75rem 0rem 4.375rem;
            width:80%;
        }
        @media(max-width:430px){
            margin-left:2.813rem;
        }
        @media(max-width:325px){
            margin-left:1.875rem;
        }
    }
    .btn1:hover{
        cursor: pointer;
        border-radius:0rem;
    }
    .btn2{
        overflow-x:visible;
        display:flex;
        align-items:center;
        background-color:#4285f4;
        padding-top:0.1rem;
        border-radius:0.25rem;
        width:15.625rem;
        height:2.25rem;
        margin-left:1.25rem;
        @media(max-width:1080px){
            margin-top:1.25rem;
            margin-left:0rem;
        }
        @media(max-width:880px){
            margin:1.25rem 3.75rem 0rem 4.375rem;
            width:79%;
        }
        @media(max-width:430px){
            margin-left:2.813rem;
        }
        @media(max-width:325px){
            margin-left:1.875rem;
        }
        img{
            width:1.25rem;
            height:2.25rem;
            flex:20%;
            object-fit:contain;
        }
        p{
            padding-bottom:-2.5rem;
            flex:80%;
            color:white;
            font-weight:bold;
        }
    }
    .btn2:hover{
        cursor: pointer;
        
    }
`
export const HeaderVideo=styled.div`
     margin-left:2.5rem;
     flex:0.55;
     justify-content:flex-end;
     object-fit:contain;
     overflow-x:hidden;
    video{
      /* width:500px;
      height:300px; */
      width:90%;
      overflow-x:hidden;
      @media(max-width:880px){
        /* right:0px;
        width:100%; */
    }
    }
    
`
