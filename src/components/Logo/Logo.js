import React from "react"
import styled from "styled-components"


const IMG = styled.img`
    height: 50%;

    animation: logoSwing 12s ease-in-out infinite;
    @keyframes logoSwing {
        0% {
        transform: translate(-6px, 0px) scale(1.025);
        }
        50% {
        transform: translate(12px,3px) scale(1);
        }
        100% {
        transform: translate(-6px, 0px) scale(1.025);
        }
    }
`

const LogoWrapper = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;

    
`

const Logo = ({src, ... props}) => (
    <LogoWrapper { ... props}>
        <IMG src={src} />
    </LogoWrapper>
)
  


export default Logo;