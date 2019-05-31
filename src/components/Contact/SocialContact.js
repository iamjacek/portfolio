import styled from 'styled-components';




 const Social = styled.div`
    position: relative;
    margin: ${props => props.margin ? "4vh 0 0 0" : "0"};
    padding: 0;
    left: 50%;
    width: ${props => props.margin ? "80%" : "100%"};
    height: 50px;
    text-align: center; 
    z-index: 1;
    ${({theme}) => theme.media.tablet} {
      max-width: ${props => props.margin ? "650px" : "unset"};
    }
    ${({theme}) => theme.media.hd} {
      max-width: ${props => props.margin ? "950px" : "unset"};
    }
    ${({theme}) => theme.media.fourK} {
      max-width: ${props => props.margin ? "1200px" : "unset"};
    }
  
    ${({theme}) => theme.media.laptop} {
      position: absolute;
      top: unset;
      bottom: 8vh;
      padding-top: 10px;
      width: ${props => props.margin ? "inherit" : "76vw"};
    }
   
    div{
        position: relative;
        left: -50%;
        display: flex;
        height: 50px;
        margin: 0 auto;
        width: 80%;
        align-items: center;
        justify-content: space-between;

        ${({theme}) => theme.media.tablet} {
          width: ${props => props.margin ? "20%" : "80vw"};
          margin: ${props => props.margin ? "0" : "0 auto"};
        }
        
        ${({theme}) => theme.media.tabletVertical} {
          max-width: 650px;
          margin: ${props => props.margin ? "0" : "auto"};
        }

        ${({theme}) => theme.media.laptop} {
          max-width: unset;
          width: 12vw;
          justify-content: space-between;
          margin: 0;
          margin-left: ${props => props.margin ? "0" : "auto"};
        }
        ${({theme}) => theme.media.laptop} {
          max-width: 250px;
          
          
        }
        
    }                   
    img{
        cursor: pointer;
        transition: 200ms ease-in;
        width: 10vw; 
        max-width: 45px;     
        ${({theme}) => theme.media.tablet} {
          width: 6.5vw; 
          max-width: 55px;
          margin: ${props => props.margin ? "0px 5px" : "0"};
        }
        ${({theme}) => theme.media.tabletVertical} {
          width: ${props => props.margin ? "40px" : "11vw"};; 
          max-width: 60px;
        }
        ${({theme}) => theme.media.laptop} {
          width: 2.5vw; 
          max-width: 40px;
        }
        ${({theme}) => theme.media.hd} {
          width: 2.3vw; 
          max-width: 50px;
        }
    }

   
    
  `

  
  export default Social;