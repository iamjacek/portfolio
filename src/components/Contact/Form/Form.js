import styled from 'styled-components';


const Form = styled.div`
@media (max-width: 767px) {
  overflow-y: auto;
    }
    min-height: 325px;
transition: 600ms left ease-in;
width: 100vw;
height: 100vh;

background: ${({theme}) => theme.colors.gray};
position: fixed;
top: 0; 
left: 100vw;
margin: 0;
padding: 0;
z-index: 1002;
opacity: 0;

${({theme}) => theme.media.tabletVertical} {
      width: 87vw;
      margin-left: 13vw;
    }
`

export default Form;