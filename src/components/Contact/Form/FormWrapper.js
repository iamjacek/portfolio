import styled from 'styled-components';


const FromWrapper = styled.div`
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100vh;

${({theme}) => theme.media.laptop}{
    left: unset;
    right: 10vw;
}
`

export default FromWrapper;