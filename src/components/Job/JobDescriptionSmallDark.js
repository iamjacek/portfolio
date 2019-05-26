import styled from 'styled-components';
import JobDescriptionDark from './JobDescriptionDark'

const JobDescriptionSmallDark = styled(JobDescriptionDark)`
       display: none;
    
    ${({theme}) => theme.media.tablet} {
     
    }


    ${({theme}) => theme.media.laptop} {
      display: block;
      position: absolute;
      margin: 22px;
      padding-top: 10px;
      padding-left: 20px;
      padding-right: 10px;
      left: 95px;
      top: 16px;
      width: 185px;
      height: 205px;
      z-index: 1;
      color: ${({theme}) => theme.colors.gray};
      line-height: 1.4rem;
      ::before{
        content: "";
        position: absolute;
        left: -18px;
        top: 4px;
        width: 205px;
        height: 100%;
        background: ${({theme}) => theme.colors.white};
        z-index: -1;
        opacity: .9;
      }
    }
    ${({theme}) => theme.media.hd} {  
      left: 35px;
      top: 15px;
      height: 187px;
    }
`

  
  export default JobDescriptionSmallDark;