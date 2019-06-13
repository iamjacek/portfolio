


import styled from 'styled-components';


const fourOfour = styled.div`
     display: flex;
     flex-direction: column;
     align-content: center;
     justify-content: center;
     width: 100vw;
     height: 100vh;
    
    h1{
      text-align: center;
    }
    p{
      text-align: center;
      padding: 20px;
    }
    button{
      margin: 50px auto;
  
    }
    ${({theme}) => theme.media.tabletVertical} {
        h1{
        font-size: 2.8rem;
        }
        p{
          font-size: 1.4rem;
        }
    }

    ${({theme}) => theme.media.laptop} {
    
    }

    ${({theme}) => theme.media.hd} {  
      h1{
        font-size: 3.8rem;
        }
        p{
          font-size: 2.4rem;
        }
    }
`

  
  export default fourOfour;