import styled from 'styled-components';
import JobDescription from './JobDescription'

const JobDescriptionDark = styled(JobDescription)`
       display: none;
    
    ${({theme}) => theme.media.tablet} {
     
    }


    ${({theme}) => theme.media.laptop} {
      cursor: pointer;
      display: block;
      opacity: 0;
      transition: all 200ms ease-in;
      position: absolute;
      margin: 83px;
      padding: 40px;
      left: 14px;
      top: -24px;
      width: 205px;
      height: 422px;
      z-index: 1;
      color: ${({theme}) => theme.colors.gray};
      
      ::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${({theme}) => theme.colors.white};
        z-index: -1;
        opacity: .9;
      }
    }
    ${({theme}) => theme.media.hd} {  
      left: -46px;
      top: -24px;
    }
`

  
  export default JobDescriptionDark;