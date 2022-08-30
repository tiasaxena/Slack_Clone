import styled from 'styled-components'
export const FooterStyle=styled.div`
  padding:1.25rem 1.25rem 0rem 1,25rem;
  hr{
    border-bottom:.125rem solid rgba(0,0,0,0.4);
  }
 
`
export const AboveLine=styled.div`
  display:flex;
  align-items:center;
  @media(max-width:956px){
    display:inline;
  }
`
export const BelowLine=styled.div`
   margin:1.25rem;
   .copyright{
    color:#454245;
    font-size:.75rem;
   }
`
export const Logo=styled.div`
   flex:0.1;
   margin:.625rem;
   height:15.625rem;
   padding:1.25rem;
   img{
       margin-top:1.25rem;
       width:3.125rem;
       object-fit:cover;
       display: block;
       margin-left: auto;
       margin-right: auto;
       @media(max-width:956px){
        margin:0px;
       }
    } 
    @media(max-width:956px){
        margin:0px;
        height:auto;
       }
`
export const Content=styled.div`
    margin:.625rem;
    flex:0.9;
    display:flex;
    align-items:center;
    padding:1.25rem;
    height:15.625rem;
    overflow-x:visible;
    @media(max-width:560px){
         display:inline;
    }
   
`
export const RowsStyle=styled.div`
    margin:2.5rem;
    height:13.43rem;

    overflow-x:visible;
    @media(max-width:880px){
        margin:0px auto;
    }
    @media(max-width:560px){
        height:auto;
    }
     
    h5{
        display:flex;
        margin-bottom:.625rem;
        align-items:center;
        flex:0.8;
       .openIcon{
            margin-left:auto;
            @media(min-width:560px){
              display:none;
           }
           @media(max-width:560px){
             display:${(props)=>(props.open?"none":"block")};
           }
        }
        .closeIcon{
            @media(min-width:560px){
              display:none;
           }
           @media(max-width:560px){
            margin-left:auto;
             display:${(props)=>(props.open?"block":"none")};
           }
        }
    }
    div{
        color:#454245;
        font-size: .875rem;
        margin-top:.625rem;
        margin-bottom:.625rem;
        @media(max-width:560px){
              display:${(props)=>(props.open?"block":"none")};
           }
    }
    div:hover{
        cursor:pointer;
        color:#1264a3;
    }
`
export const LeftContainer=styled.div`
    display:flex;
    align-items:center;
    flex:0.7;
    @media(max-width:560px){
        display:inline;
    }
    .link-last{
        display:flex;
        align-items:center;
    }
    .link:hover{
        cursor: pointer;
        color:#1264a3;
    }
    .link-last:hover{
        cursor: pointer;
        color:#1264a3;
    }
`
export const RightContainer=styled.div`
    flex:0.3;
    justify-content:flex-end;
    display:flex;
    align-items:center;
    @media(max-width:730px){
        justify-content:flex-start;
    }
    
    .link-first{
        display:flex;
        align-items:center;
        color:#1264a3;
        span{
            margin-left:.188rem
        }
    }
    .link:hover{
        cursor: pointer;
        color:#1264a3;
    }
    .link-first:hover{
        cursor: pointer;
    }
`
export const Links=styled.div`
  margin:.313rem;
  font-size: .800rem;
  font-weight:bold;
`
export const Contact=styled.div`
    display:flex;
    align-items:center;
    @media(max-width:730px){
        display:inline;
    }
`
