import React from 'react'
import styled from 'styled-components'
import store from 'store'
import Head from 'next/head'

import TopBar from './TopBar'
import SideNav from './SideNav'
import ChevronNav from './ChevronNav'
import Content from './Content'

const mobileBreak = 600
const menuWidth = 250

const LayoutWrapper = styled.div`
  .layout--side-nav {
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
    z-index: 100;
  }

  .layout--content {
    padding: 0 20px;
    transition: margin-left 0.3s;
  }

  @media (min-width: ${mobileBreak + 1}px) { 
    &[data-toggled="true"] .layout--content {
      margin-left: 0;
    }

    &[data-toggled="true"] .layout--side-nav {
      left: ${-menuWidth}px;
    }

    &[data-toggled="false"] .layout--content {
      margin-left: ${menuWidth}px;
    }

    &[data-toggled="false"] .layout--side-nav {
      left: 0;
    }
  }

  @media (max-width: ${mobileBreak}px) { 
    .layout--content {
      width: 100%;
    }

    &[data-toggled="false"] .layout--content {
      margin-left: 0;
    }

    &[data-toggled="false"] .layout--side-nav {
      left: ${-menuWidth}px;
    }

    &[data-toggled="true"] .layout--content {
      margin-left: ${menuWidth}px;
    }

    &[data-toggled="true"] .layout--side-nav {
      left: 0;
    }

    /* Glass shown behind menu on mobile devices */
    .layout--mobile-glass {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: black;
      z-index: 10;
    }

    &[data-toggled="false"] .layout--mobile-glass {
      opacity: 0;
      visibility: hidden;
      transition: visibility 0s linear .2s, opacity .2s ease;
    }

    &[data-toggled="true"] .layout--mobile-glass {
      opacity: 0.2;
      visibility: visible;
      transition: opacity .2s ease;
    }
  }
`

const BodyStyle = props => (
  <Head><style>
    {`
      html, body {
        width: 100%;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
      }
    `}
    {props.isMenuToggled ? `
      @media (max-width: ${mobileBreak}px) {
        html, body {
          height: 100%;
          overflow-y: hidden;
        }
      }
    ` : null}
  </style></Head>
)

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isMenuToggled: false }
  }

  componentDidMount () {
    this.syncWithStore()
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <LayoutWrapper data-toggled={this.state.isMenuToggled}>
        <BodyStyle isMenuToggled={this.state.isMenuToggled} />
        <SideNav className='layout--side-nav' onNavigate={this.onNavigate.bind(this)} />
        <div className='layout--content'>
          <TopBar onToggleMenuClicked={this.onToggleMenuClicked.bind(this)} />
          <Content>{this.props.children}</Content>
          <ChevronNav />
        </div>
        <div className='layout--mobile-glass' onClick={this.onToggleMenuClicked.bind(this)} />
      </LayoutWrapper>
    )
  }

  syncWithStore () {
    this.setState({ isMenuToggled: !!store.get('isMenuToggled') })
  }

  onToggleMenuClicked () {
    store.set('isMenuToggled', !store.get('isMenuToggled'))
    this.syncWithStore()
  }

  onNavigate (url) {
    store.set('isMenuToggled', false)
  }
}
