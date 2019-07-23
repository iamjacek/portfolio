import styled from 'styled-components';


const Frame = styled.div`
    
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 92%;
    min-height: 690px;
    width: 82vw;
    background: linear-gradient(${({theme}) => theme.colors.white} -250%, ${({theme}) => theme.colors.gray} 80%);
    margin: 40px auto 0 auto;
    border: 2px solid ${({theme}) => theme.colors.white};
    text-align: center;
    font-family: 'Rubik', sans-serif;
    font-size: 2.2rem;
    ${({theme}) => theme.media.tablet}{
      margin-bottom: 4vh;
    }
    ${({theme}) => theme.media.laptop} {
      flex-direction: row;
    }
    ${({theme}) => theme.media.hd} {  
      
    }
`

  
  export default Frame;