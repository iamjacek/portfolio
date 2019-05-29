import styled from 'styled-components';


const IMG = styled.img`
            width: 10vw;
            left: ${props => props.right ? "unset" : "90px"};
            right: ${props => props.right ? "90px" : "unset"};
            top: 50px;
            position: absolute;
  
    
    ${({theme}) => theme.media.tabletVertical} {
      max-width: 110px;
    }

    ${({theme}) => theme.media.laptop} {
        max-width: unset;
        width: ${props => props.right ? "8vw" : "7vw"};
        left: ${props => props.right ? "unset" : "5vw"};
        right: ${props => props.right ? "5vw" : "unset"};
        top: 5vh;
    }

    ${({theme}) => theme.media.hd} {  
        width: ${props => props.right ? "7vw" : "6vw"};
    }
`
export default IMG;