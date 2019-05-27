import styled from 'styled-components';


const Jobs = styled.div`
        position: relative;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-content: space-around;
        margin: 20px 0 120px 0; 

    ${({theme}) => theme.media.tabletVertical} {
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
    }

    ${({theme}) => theme.media.laptop} {
      top: 5vh;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      max-width: 1300px;
      margin-left: auto;
      margin-right: auto;
    }

    ${({theme}) => theme.media.hd} {  
      max-width: 1800px;
      align-items: flex-start;
      align-self: flex-start;
      transform: scale(1.1);
    }
    @media (min-width: 2220px){
      top: 7vh;
      transform: scale(1.2);
    }
    @media (min-width: 2520px){
      top: 8vh;
      transform: scale(1.3);
    }
    @media (min-width: 3400px){
      top: 12vh;
      transform: scale(1.6);
    }
    ${({theme}) => theme.media.fourK} {  
      top: 15vh;
      transform: scale(1.8);
    }
`

  
  export default Jobs;