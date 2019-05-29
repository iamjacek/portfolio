import styled from 'styled-components';




 const Social = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
    left: 50%;
    width: 80vw;
    height: 50px;
    text-align: center; 
    ${({theme}) => theme.media.laptop} {
      position: absolute;
      top: unset;
      bottom: 8vh;
      padding-top: 10px;
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
          width: 12vw;
          justify-content: space-between;
          margin-left: auto;
        }
        ${({theme}) => theme.media.hd} {
          
        }
    }                   
    img{
        cursor: pointer;
        transition: 200ms ease-in;
        width: 10vw; 
        max-width: 45px;     
        ${({theme}) => theme.media.tablet} {
          width: 10vw; 
          max-width: 55px;
        }
        ${({theme}) => theme.media.tabletVertical} {
          width: 11vw; 
          max-width: 60px;
        }
        ${({theme}) => theme.media.laptop} {
          width: 2.5vw; 
          max-width: 40px;
        }
        ${({theme}) => theme.media.hd} {
          width: 2.3vw; 
          max-width: 70px;
        }
    }

   
    
  `

  
  export default Social;