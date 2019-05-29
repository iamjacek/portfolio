import styled from 'styled-components';


const Wrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  
    
    ${({theme}) => theme.media.tabletVertical} {
        padding-top: 15vh;
        max-width: 1024px;
        margin: 0 auto;
    }

    ${({theme}) => theme.media.laptop} {
        max-width: 100vw;
    }

    ${({theme}) => theme.media.hd} {  
    
    }
`
export default Wrap;
  