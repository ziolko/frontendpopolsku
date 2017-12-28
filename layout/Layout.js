import React from 'react'
import Swipeable from 'react-swipeable'
import styled, { injectGlobal } from 'styled-components'
import store from 'store'

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

const SwipeableWrapper = styled(Swipeable) `
  width: 100%;
  height: 100%;
`

const SideNavWrapper = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  background: #f5f5f5;
  padding: 20px;
  box-sizing: border-box;
  border-right: 1px solid #eee;
  overflow-y: auto;

  transition: left 0.3s;
  width: ${menuWidth}px;
`

const ContentWrapper = styled.div`
  padding: 0 20px;
  transition: margin-left 0.3s;

  @media (max-width: ${mobileBreak}px) { 
    width: 100%;
  }
`

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dx: 0, isMenuClosed: false }
  }

  componentDidMount () {
    this.syncWithStore()
  }

  render () {
    return (
      <SwipeableWrapper delta={20} onSwiping={this.onSwiping.bind(this)} onSwiped={this.onSwiped.bind(this)}>
        <SideNavWrapper style={{ left: this.getMenuRightEdgePosition() - menuWidth }} >
          <SideNav />
        </SideNavWrapper>
        <ContentWrapper style={{ marginLeft: this.getMenuRightEdgePosition() }}>
          <TopBar onToggleMenuClicked={this.onToggleMenuClicked.bind(this)} />
          <Content>{this.props.children}</Content>
          <ChevronNav />
        </ContentWrapper>
      </SwipeableWrapper>
    )
  }

  syncWithStore () {
    this.setState({ isMenuClosed: store.get('isMenuClosed') })
  }

  getMenuRightEdgePosition () {
    const position = (this.state.isMenuClosed ? 0 : menuWidth) - this.state.dx
    return Math.max(0, Math.min(menuWidth, position))
  }

  onSwiping (event, dx, dy) {
    if (Math.abs(dx) > Math.abs(dy)) {
      this.setState({ dx })
    }
  }

  onSwiped (event, dx, dy, isFlickr) {
    store.set('isMenuClosed', this.getMenuRightEdgePosition() < menuWidth / 2)
    this.setState({ dx: 0 })
    this.syncWithStore()
  }

  onToggleMenuClicked () {
    store.set('isMenuClosed', !this.state.isMenuClosed)
    this.syncWithStore()
  }
}
