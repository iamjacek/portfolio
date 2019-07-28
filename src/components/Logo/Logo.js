import React from "react"
import styled from "styled-components"


const IMG = styled.img`
    width: 60%;
    max-width: 300px;
`

const LogoWrapper = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 999;
`

const Logo = ({src, ... props}) => (
    <LogoWrapper { ... props}>
        <IMG src={src} />
    </LogoWrapper>
)
  


export default Logo;