import styled from 'styled-components';


const Line = styled.div`
    width: 62vw;
    height: 5px;
    background: ${({theme}) => theme.colors.white};
    position: relative;
    margin: 20px auto;
    z-index: 1;
    
${({theme}) => theme.media.tablet} {
    
}
${({theme}) => theme.media.laptop} {
    width: 52vw;
}
${({theme}) => theme.media.hd} {
    width: 42vw;
}
`


export default Line;