import styled from 'styled-components';


const Captcha = styled.div`
margin: 20px auto 0 auto;
${({theme}) => theme.media.tablet} {
    margin: 5vh 0 0 auto;
    }
    ${({theme}) => theme.media.hd} {
       
    }
    ${({theme}) => theme.media.fourK} {
        
    }
`

export default Captcha;