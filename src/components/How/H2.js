import styled from 'styled-components';


const H2 = styled.h2`
    font-family: 'Montserrat Semibold', sans-serif;
    color: ${({theme}) => theme.colors.white};
    text-align: center;
    margin: -10px 0 30px 0;
    font-size: 1rem;
    
    ${({theme}) => theme.media.tablet} {
      font-size: 1.4rem;
    }

    ${({theme}) => theme.media.tabletVertical} {
      font-size: 1.8rem;
    }

    ${({theme}) => theme.media.laptop} {
      font-size: 2.5rem;
      transform: translateY(40px);
    }

    ${({theme}) => theme.media.hd} {  
      font-size: 3rem;
      transform: translateY(-20px);
    }
`

  
  export default H2;