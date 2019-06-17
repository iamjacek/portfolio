import styled from 'styled-components';


const FromWrapper = styled.div`
position: relative;
left: 0;
top: 0;
width: 100vw;
height: 100vh;
z-index: 1001;
overflow-y: auto;
overflow-x: hidden;

  


${({theme}) => theme.media.laptop}{
    left: unset;
    right: 10vw;
}
`

export default FromWrapper;