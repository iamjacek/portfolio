import styled from 'styled-components';


const Avatar = styled.img`
  
    width: calc(150px + 10vw);
    margin: 10px auto;
    
    ${({theme}) => theme.media.tablet} {
        width: calc(150px + 10vw);
        margin: -10px auto 10px auto;
    }

    

    ${({theme}) => theme.media.laptop} {  
        position: absolute;
        top: 32vh;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0;
        margin-bottom: 0;
        width: unset;
        height: 30vh;
    }
`

  
  export default Avatar;