import styled from 'styled-components';


const TitleLine = styled.div`
    width: 62vw;
    height: 5px;
    background: ${({theme}) => theme.colors.white};
    position: relative;
    margin: 20px auto 240px auto;
    
${({theme}) => theme.media.tablet} {
    margin: 20px auto 68vw auto;
}
${({theme}) => theme.media.laptop} {
    margin: 30px auto;
    position: absolute;
    top: 180px;
    left: 0;
    right: 0;
    width: 80%;
}
${({theme}) => theme.media.hd} {
    top: 20vh;
}
`


export default TitleLine;