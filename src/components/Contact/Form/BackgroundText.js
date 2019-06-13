import styled from 'styled-components';


const BackgroundText = styled.span`
    position: absolute;
    font-family: 'Averia Serif Libre', cursive;
    transition: all 600ms ease-in;
    font-size: ${props => props.dev ? "20vw" : "25vw"};
    opacity: ${props => props.dev ? ".33" : ".25"};
    top: ${props => props.dev ? "-9vw" : "unset"};
    bottom: ${props => props.dev ? "unset" : "-10vw"};
    left: ${props => props.dev ? "-5vw" : "-4vw"};
    transform: rotate(-7deg);
    user-select: none;
    z-index: -10;
    width: 100%;


    ${({theme}) => theme.media.laptop}{
        bottom: unset;
        transform: rotate(-90deg);
        opacity: ${props => props.dev ? "1" : ".25"};
        font-size: ${props => props.dev ? "120px" : "180px"};
        left: unset;
        right: ${props => props.dev ? "-40vw" : "-35vw"};
        top: 200px;
    }
    ${({theme}) => theme.media.hd}{
        font-size: ${props => props.dev ? "6vw" : "10vw"};
        top: 0px;
    }
`

export default BackgroundText;