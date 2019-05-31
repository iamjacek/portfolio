import styled from 'styled-components';


const ButtonWrap = styled.div`
position: relative;
left: 0;
top: 0;
width: 100%;
height: 7vh;
margin: 0;
z-index: 1;
${({theme}) => theme.media.tablet} {
        width: 80%;
        max-width: 650px;
        margin: 0 auto;
    }
    ${({theme}) => theme.media.hd} {
        max-width: 950px;
    }
    ${({theme}) => theme.media.fourK} {
        max-width: 1200px;
    }
`

export default ButtonWrap;