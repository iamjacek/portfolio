import React from 'react'
import styled from 'styled-components'

const IMG = styled.img`
  width: 48px;
  height: 48px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    animation: woobleSocial 0.25s ease-in-out;
  }
`

const Icon = ({ src, ...props }) => (
  <a {...props} href={props.direct} target="_blank">
    <IMG src={src} />
  </a>
)

export default Icon
