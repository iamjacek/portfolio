import React from "react"
import styled from "styled-components"


const IMG = styled.img`
    width: 48px;
    height: 48px;
    padding: 10px;

    &:hover{
        cursor: pointer;
        animation: woobleSocial .25s ease-in-out;
    }
`

const Icon = ({src, ... props}) => (
    <div { ... props}>
        <IMG src={src} />
    </div>
)
  


export default Icon;