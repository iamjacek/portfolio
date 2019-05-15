import styled from 'styled-components';


const FlexPic = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 20%;
    overflow: hidden;
    @media (max-height: 690px){
      display: none;
    }

    ${({theme}) => theme.media.tablet} {
      position: absolute;
      display: block;
      height: 100%;
    }
    ${({theme}) => theme.media.laptop} {

    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default FlexPic;