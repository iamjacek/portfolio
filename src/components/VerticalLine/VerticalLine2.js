import styled from 'styled-components';


const VerticalLine2 = styled.div`
${({theme}) => theme.media.laptop} {
    width: calc(80px + 20vw);
    height: 4px;
    background: ${({theme}) => theme.colors.white};
    position: absolute;
    right: 5vw;
    top: 45%;
}
${({theme}) => theme.media.hd} {
    width: calc(120px + 20vw);
    right: 4vw;
    top: 48%;
}

`


export default VerticalLine2;