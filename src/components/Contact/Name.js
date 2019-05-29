import styled from 'styled-components';


const Name = styled.h3`
    font-family: 'Montserrat Semibold', sans-serif;
    font-size: 2.5rem;
    margin: 10px auto;
    text-align: center;

    ${({theme}) => theme.media.tablet} {
        font-size: 3.7rem;
    }

    ${({theme}) => theme.media.laptop} {
        position: absolute;
        top: 67vh;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 4.4vw;
    }
`

  
  export default Name;