import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const TopBarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

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
        <a href='#' onClick={e => { e.preventDefault(); this.props.onToggleMenuClicked() }}>
          <i className='fa fa-bars' aria-hidden='true' />
        </a>
        <Link href='/'><a className='page-title'>Frontend po polsku</a></Link>
        <a href='https://github.com/ziolko/frontendpopolsku'>
          <i className='fa fa-github' aria-hidden='true' /> Github
        </a>
      </TopBarWrapper>
    )
  }
}
