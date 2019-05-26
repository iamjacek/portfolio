import styled from 'styled-components';
import JobDescription from './JobDescription'


//inherit from JobDescription
const JobDescriptionSmall = styled(JobDescription)`
        height: 160px;
        font-size: .8rem;
        line-height: 1.2rem;
        margin: 17px 0;

    ${({theme}) => theme.media.tablet} {
      margin: 35px 0;
    }
    ${({theme}) => theme.media.tabletVertical} {
      margin: 25px 0;
    }
    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default JobDescriptionSmall;