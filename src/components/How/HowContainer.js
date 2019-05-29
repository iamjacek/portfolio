import styled from 'styled-components';


const HowContainer = styled.div`
    width: 85%;
    max-width: 300px;
    height: 240px;
    margin: 30px auto;
    position: relative;
    margin-bottom: ${props => props.ExtraMarginBot ? "70px" : "10px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${({theme}) => theme.media.tablet} {
        max-width: 350px;
    }

    ${({theme}) => theme.media.tabletVertical} {
     transform: scale(1.1);
     max-width: 360px;
    }

    ${({theme}) => theme.media.laptop} {
     transform: scale(1.23);
     max-width: 370px;
    }

    ${({theme}) => theme.media.hd} {  
        transform: scale(1.5);
        max-width: 380px;
    }

    @media (min-width: 2220px){
        transform: scale(1.5);
    }
    @media (min-width: 2520px){
        transform: scale(1.5);
        max-width: 390px;
    }
    @media (min-width: 3400px){
        transform: scale(1.5);
    }
    ${({theme}) => theme.media.fourK} {  
        transform: scale(2);
        max-width: 400px;
        margin: 0 200px;
    }
`

  
  export default HowContainer;