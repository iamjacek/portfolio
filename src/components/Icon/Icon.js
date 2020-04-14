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

const Icon = ({ aria, src, ...props }) => (
  <a {...props} href={props.direct} target="_blank" aria-label={aria}>
    <IMG src={src} alt="Icon on Web Develompent and Design Jacek Witucki" />
  </a>
)

export default Icon
