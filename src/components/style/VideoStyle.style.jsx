
import styled from "styled-components";

export const VideoStyle=styled.div`
    display:flex;
    align-items:center;
    margin: 2rem 1rem 2rem 8rem;
    .sec3{
        border-radius:0px 150px 150px 0px;
     }
    padding-bottom: 2rem;
    @media(max-width:880px){
        display:inline;
    }
`
export const VideoBox=styled.div`
     flex:0.6;
     video{
        width: 85%;
        @media(max-width:880px){
        width:60%;
    }
    }
   
` 
export const ContentBox=styled.div`
    flex:0.4;
    margin-right: 10rem;
    flex-wrap:wrap;
    margin-top: 3rem; 
    
    h2{
        font-size:3.2rem;
        font-weight:700;
    }
    .para{
        overflow-y: hidden;
        margin-top: 1.8rem;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.8rem;
    }
    div{
        display:flex;
        align-items:center;
        span{
        color:#1264a3;
        padding-top: 1rem;
    }
    span:hover{
        text-decoration:underline;
        cursor: pointer;
    }
    }
   
    
`
export const Content=styled.div`
    flex:0.5;
    flex-wrap:wrap;
    .main{
        font-weight:lighter;
        font-size:2rem;
        text-align:left;
        font-style:italic;
        margin-bottom:2rem;
    }
    .name{
        font-weight:bold;
    }
   
    .more{
        text-align:left;
        color:#1264a3;
    }
    .more:hover{
        text-decoration:underline;
        cursor: pointer;
    }

`