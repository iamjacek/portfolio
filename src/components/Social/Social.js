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
        width: 0;
        left: 0;
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
            left: 12vw;
            width: 10vw;
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
            width: 30px;
            margin: 0 5px;
        }
        ${({theme}) => theme.media.hd} {
            width: 35px;     
            margin: 0 6px;
        }
    }

   
    
  `

  
  export default Social;