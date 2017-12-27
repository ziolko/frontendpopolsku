import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import TopBar from './TopBar'
import SideNav from './SideNav'
import ChevronNav from './ChevronNav'
import Content from './Content'

const mobileBreak = 500
const menuWidth = 250

injectGlobal`
  html, body, body > div:first-child, #__next, #__next > div:first-child  {
    height: 100%;
    margin: 0;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const SideNavWrapper = styled.nav`
  position: absolute;
  top: 0;
  bottom: 0;
  background: #f5f5f5;
  padding: 20px;
  border-right: 1px solid #eee;
  overflow-y: auto;

  transition: left 0.3s;
  width: ${menuWidth}px;
`

const ContentWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 0 20px;
  transition: margin-left 0.3s;

  @media (max-width: ${mobileBreak}px) { 
    width: 100%;
  }
`

// next doesn't preserve state of Layout component between pages
const globalState = { isMenuOpen: true }

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...globalState }
  }

  render () {
    return (
      <Container>
        <SideNavWrapper style={{ left: this.state.isMenuOpen ? 0 : -menuWidth }} >
          <SideNav />
        </SideNavWrapper>
        <ContentWrapper style={{ marginLeft: this.state.isMenuOpen ? menuWidth : 0 }}>
          <TopBar onToggleMenuClicked={this.onToggleMenuClicked.bind(this)} />
          <Content>{this.props.children}</Content>
          <ChevronNav />
        </ContentWrapper>
      </Container>
    )
  }

  onToggleMenuClicked () {
    globalState.isMenuOpen = !globalState.isMenuOpen
    this.setState(globalState)
  }
}
