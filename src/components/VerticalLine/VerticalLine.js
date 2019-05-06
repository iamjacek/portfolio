import styled from 'styled-components';


const VerticalLine = styled.div`
${({theme}) => theme.media.laptop} {
    width: calc(80px + 20vw);
    height: 4px;
    background: ${({theme}) => theme.colors.white};
    position: absolute;
    left: 5vw;
    top: 45%;
}
${({theme}) => theme.media.hd} {
    width: calc(120px + 20vw);
    left: 4vw;
    top: 48%;
}
`


export default VerticalLine;