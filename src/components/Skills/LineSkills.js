import styled from 'styled-components';


const LineSkills = styled.div`
    opacity: 0;
    transition: all 200ms ease-in;
    ${({theme}) => theme.media.tablet} {
     
    }

    ${({theme}) => theme.media.tabletVertical} {
        height: 10px;
        width: 800%;
        background: ${({theme}) => theme.colors.white};
        position: absolute;
        top: 0;
        right: -400%;
        transform: rotate(2deg);
        
    }
 
    ${({theme}) => theme.media.laptop} {

    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default LineSkills;