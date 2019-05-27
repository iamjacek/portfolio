import styled from 'styled-components';


const HowWrapper = styled.div`
   
    ${({theme}) => theme.media.tabletVertical} {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 1000px;
        margin: 0 auto;
        justify-content: center;
        align-content: space-around;
        height: 77vh;
    }

    ${({theme}) => theme.media.laptop} {
        height: 76vh;
        width: 1000px;
    }

    ${({theme}) => theme.media.hd} {  
        height: 70vh;
    }
`

  
  export default HowWrapper;