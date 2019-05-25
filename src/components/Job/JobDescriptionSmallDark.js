import styled from 'styled-components';
import JobDescriptionDark from './JobDescriptionDark'

const JobDescriptionSmallDark = styled(JobDescriptionDark)`
       display: none;
    
    ${({theme}) => theme.media.tablet} {
     
    }


    ${({theme}) => theme.media.laptop} {
      display: none;
      position: absolute;
      margin: 83px;
      padding: 40px;
      left: 14px;
      top: -67px;
      width: 205px;
      height: 205px;
      z-index: 1;
      color: ${({theme}) => theme.colors.gray};
      line-height: 1.4rem;
      ::before{
        content: "";
        position: absolute;
        left: 0;
        top: 23px;
        width: 100%;
        height: 100%;
        background: ${({theme}) => theme.colors.white};
        z-index: -1;
        opacity: .9;
      }
    }
    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default JobDescriptionSmallDark;