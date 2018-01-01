import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import pages from '../utils/pages'

const ChevronLinks = styled.div`
  display: flex;
  justify-content: space-between;

  .chevron-link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaa;
    cursor: pointer;
  }

  .chevron-link:hover {
    color: black;
  }

  @media (max-width: 1150px) {
    .chevron-link-wrapper {
      flex-grow: 1;
    }

    .chevron-link-wrapper:empty {
      display: none;
    }

    .chevron-link {
      height: 60px;
    }
  }

  @media (min-width: 1151px) {
    .chevron-link-wrapper {
      flex-grow: 0;
      margin: 20px;
    }

    .chevron-link {
      position: fixed;
      top: 50px;
      bottom: 50px;
      width: 60px;
      height: auto;
      transform: translateX(-50%);
    }
  }
`

const ChevronLink = props => (
  <div className='chevron-link-wrapper'>
    {props.href && <Link prefetch={props.prefetch} href={props.href}>
      <i className={`chevron-link fa fa-chevron-${props.direction}`} aria-hidden='true' />
    </Link>}
  </div>
)

class SiblingPagesNav extends React.PureComponent {
  render () {
    const { previousPage, nextPage } = this.getSiblingPages()

    return (
      <ChevronLinks>
        <ChevronLink prefetch href={previousPage && previousPage.url} direction='left' />
        <ChevronLink prefetch href={nextPage && nextPage.url} direction='right' />
      </ChevronLinks>
    )
  }

  componentDidMount () {
    this.handler = e => this.onKeyDown(e)
    document.body.addEventListener('keydown', this.handler)
  }

  componentWillUnmount () {
    document.body.removeEventListener('keydown', this.handler)
  }

  onKeyDown (e) {
    const { previousPage, nextPage } = this.getSiblingPages()

    const urls = {
      ArrowLeft: previousPage && previousPage.url,
      ArrowRight: nextPage && nextPage.url
    }

    if (urls[e.key]) {
      Router.push(urls[e.key])
    }
  }

  getSiblingPages () {
    const currentPageIndex = pages.findIndex(page => page.url === this.props.router.route)
    const nextPage = pages[currentPageIndex + 1]
    const previousPage = pages[currentPageIndex - 1]

    return { previousPage, nextPage }
  }
}

export default withRouter(SiblingPagesNav)
