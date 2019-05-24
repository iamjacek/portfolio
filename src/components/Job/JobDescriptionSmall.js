import styled from 'styled-components';
import JobDescription from './JobDescription'


//inherit from JobDescription
const JobDescriptionSmall = styled(JobDescription)`
        height: 160px;
        font-size: .8rem;
        line-height: 1rem;
        
    ${({theme}) => theme.media.laptop} {
   
    }
    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default JobDescriptionSmall;