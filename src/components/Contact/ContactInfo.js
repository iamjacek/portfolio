import styled from 'styled-components';


const ContactInfo = styled.p`
    font-family: "Rubik";
    white-space: pre-wrap;
    text-align: center;
    
    ${({theme}) => theme.media.tablet} {
      font-size: 1.3rem;
    }

    ${({theme}) => theme.media.laptop} {
        position: absolute;
        top: unset;
        bottom: 8vh;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 1.5vw;
    }

    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default ContactInfo;