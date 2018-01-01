import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import GithubCorner from 'react-github-corner'

const TopBarWrapper = styled.nav`
  padding: 10px 0;

  &:after {
    content: '';
    display: block;
    clear: both;
  }

  .menu-toggler {
    float: left;
  }

  .page-title {
    display: block;
    text-align: center;
  }
  
  a {
    color: #999;
  }

  a:hover {
    color: black;
  }

  @media (max-width: 700px) { 
    .page-title {
      display: none;
    }
  }

  .page-title {
    opacity: 0;
    font-size: 18px;
    transition: opacity .2s;
  }

  &:hover .page-title {
    opacity: 1;
  }
`

export default class extends React.PureComponent {
  render () {
    return (
      <TopBarWrapper>
        <GithubCorner href='https://github.com/ziolko/frontendpopolsku' bannerColor='#e96f6f' size={50} />
        <a className='menu-toggler' href='#' onClick={e => { e.preventDefault(); this.props.onToggleMenuClicked() }}>
          <i className='fa fa-bars' aria-hidden='true' />
        </a>
        <Link href='/'><a className='page-title'>Frontend po polsku</a></Link>
      </TopBarWrapper>
    )
  }
}
