import styled from 'styled-components';




 const Social = styled.div`
    position: absolute;
    bottom: 5vh;
    padding: 0;
    left: 50%;
    width: 80vw;
    height: 50px;
    text-align: center; 
    ${({theme}) => theme.media.laptop} {
      position: absolute;
        left: 0px;
    }
    ${({theme}) => theme.media.hd} {
     
      
       
    }
    div{
        position: relative;
        left: -50%;
        display: flex;
        height: 50px;
        width: 80vw;
        
        align-items: center;
        justify-content: space-between;
        ${({theme}) => theme.media.laptop} {
          position: absolute;
            
            left: 12vw;
            width: 10vw;
        }
        ${({theme}) => theme.media.hd} {
            width: 12vw;
        }
    }                   
    img{
        cursor: pointer;
        transition: 200ms ease-in;
        width: 13vw; 
        max-width: 50px;     
        margin: 0 2vw;
        transform: scale(1);
        ${({theme}) => theme.media.laptop} {
           width: calc(30px + .5vw); 
            margin: 0 5px;
        }
        ${({theme}) => theme.media.hd} {
            width: calc(30px + 1vw);     
            margin: 0 6px;
            max-width: 100px; 
        }
    }

   
    @keyframes woobleSocial {
      0% {
        transform: skew(0deg, 0deg) translateY(0px);
      }
      25% {
        transform: skew(2deg, 2deg) translateY(-2px);
      }
      50% {
        transform: skew(0deg, 0deg) translateY(-4px);
      }
      75% {
        transform: skew(-2deg, -2deg) translateY(-2px);
      }
      100% {
        transform: skew(0deg, 0deg) translateY(0px);
      }
    }
  `

  
  export default Social;