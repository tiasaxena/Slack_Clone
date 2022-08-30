import styled from "styled-components"
export const ConnectStyle=styled.div`
    background: #4a154b;
    border: none;
    clip-path: ellipse(75% 100% at center top);
    height: auto;
    padding-bottom: 5rem!important;
    padding-top: 5rem!important;
    h1{
        color:white;
        font-weight:bold;
        text-align:center;
        font-size:3.125rem;
        margin-bottom:1.875rem;
    }
    .button{
        display:flex;
        text-align:center;
        margin:auto;
        width:60%;
       
        
    .first{
        margin:0 auto 0rem .625rem;
        padding:.93rem 1.875rem;
    }
    .second{
        margin:0 .625rem 0rem auto;
        padding:.938rem 1.875rem;
    }
    .first:hover{
        cursor: pointer;
        border:2px solid white;
    }
   .second:hover{
        cursor: pointer;
        border-radius:0rem;
    }
    }
`
export const Button1=styled.button`
        margin-left:1.25rem;
        background-color:transparent;
        border:.062rem solid white;
        padding:.625rem;
        font-weight:bold;
        border-radius:.25rem;
        color:white;
       
`
export const Button2=styled.button`
        margin-left:.625rem;
        color:"#541554";
        background-color:"white";
        border:transparent;
        padding:.625rem;
        font-weight:bold;
       
`
