import React from 'react'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  display: none;
  position: relative;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;

  z-index: 98;
  ${({ theme }) => theme.media.desktop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`

const LinkMenuDesktop = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  line-height: 2rem;
  padding: 2px 12px;

  &:hover {
    animation: woobleSocial 0.25s ease-in-out;
    color: ${({ theme }) => theme.colors.red};
  }
`

const MenuDesktop = () => (
  <MenuWrapper>
    <LinkMenuDesktop href={'#Home'}>Home</LinkMenuDesktop>
    <LinkMenuDesktop href={'#About'}>About</LinkMenuDesktop>
    <LinkMenuDesktop href={'#Job'}>Job</LinkMenuDesktop>
    <LinkMenuDesktop href={'#How'}>How</LinkMenuDesktop>
    <LinkMenuDesktop href={'#Contact'}>Contact</LinkMenuDesktop>
  </MenuWrapper>
)

export default MenuDesktop
