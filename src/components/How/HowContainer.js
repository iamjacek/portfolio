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
    }

    ${({theme}) => theme.media.laptop} {
     transform: scale(1.23);
    }

    ${({theme}) => theme.media.hd} {  
        transform: scale(1.5);
    }
`

  
  export default HowContainer;