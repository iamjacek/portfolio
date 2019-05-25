import styled from 'styled-components';


const JobPic = styled.img`
        position: relative;

        width: 160px;
        height: 320px;
        border: solid 8px ${({theme}) => theme.colors.white};
        margin: 20px 10px;
    
    
    ${({theme}) => theme.media.tablet} {
      width: 200px;
      height: 400px;
    }

    ${({theme}) => theme.media.laptop} {
      width: 250px;
      height: 500px;
    }

    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default JobPic;