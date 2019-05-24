import styled from 'styled-components';


const TitleLine = styled.div`
    width: 62vw;
    height: 5px;
    background: ${({theme}) => theme.colors.white};
    position: relative;
    margin: ${props => props.noMargin ? '20px auto' : '20px auto 240px auto'};
    
${({theme}) => theme.media.tablet} {
    margin: ${props => props.noMargin ? '20px auto' : '20px auto 68vw auto'};
}
${({theme}) => theme.media.laptop} {
    margin: 30px auto;
    position: ${props => props.relative ? "relative" : "absolute"};
    top: ${props => props.relative ? "5vh" : "calc(180px + 1vw + 2vh)"};
    left: 0;
    right: 0;
    width: 80%;
}
${({theme}) => theme.media.hd} {
    top: 20vh;
}
`


export default TitleLine;