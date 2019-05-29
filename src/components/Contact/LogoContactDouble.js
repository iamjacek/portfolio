import styled from 'styled-components';


const LogoContactDouble = styled.div`
       width: 100vw;
       height: 300px;
       position: absolute;
       top: 0;
       left: 0;
       display: none;
       
  
${({theme}) => theme.media.tabletVertical} {
       max-width: 1024px;
       display: block;
}

${({theme}) => theme.media.laptop} {
       max-width: unset;
       
}
`

  
  export default LogoContactDouble;