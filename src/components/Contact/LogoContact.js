import styled from 'styled-components';


const LogoContact = styled.img`
       width: 250px;
       margin: 20px auto;
  
${({theme}) => theme.media.tabletVertical} {
       display: none;
}
`

  
  export default LogoContact;