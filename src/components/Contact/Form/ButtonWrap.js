import styled from 'styled-components';


const ButtonWrap = styled.div`
position: relative;
display: flex;
left: 0;
top: 0;
width: 100%;
flex-direction: column;
align-content: center;
justify-content: center;
margin: 0;
z-index: 1;
${({theme}) => theme.media.tablet} {
        width: 80%;
        max-width: 650px;
        margin: 0 auto;
        flex-direction: row;
        
    }
    ${({theme}) => theme.media.hd} {
        max-width: 950px;
    }
    ${({theme}) => theme.media.fourK} {
        max-width: 1200px;
    }
`

export default ButtonWrap;