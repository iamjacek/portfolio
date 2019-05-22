import styled from 'styled-components';

const SkillsWrapper = styled.div`
  z-index: 1001;
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ${({theme}) => theme.media.tablet} {
    display: block;
    }

  ${({theme}) => theme.media.laptop} {
    padding-top: 0;
  }
 `

  export default SkillsWrapper;