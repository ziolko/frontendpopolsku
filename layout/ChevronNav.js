import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { withRouter } from 'next/router'

import menu from '../menu'

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
    }

    .chevron-link {
      position: fixed;
      top: 50px;
      bottom: 50px;
      width: 40px;
      height: auto;
      transform: translateX(-50%);
    }
  }
`

const ChevronLink = props => (
  <div className='chevron-link-wrapper'>
    {props.href && <Link href={props.href}><i className={`chevron-link fa fa-chevron-${props.direction}`} aria-hidden='true' /></Link>}
  </div>
)

const pages = menu.reduce((acc, item) => [...acc, item, ...(item.children || [])], [])

export const ChevronNav = props => {
  const currentPageIndex = pages.findIndex(page => page.url === props.router.route)
  const nextPage = pages[currentPageIndex + 1]
  const previousPage = pages[currentPageIndex - 1]

  return (
    <ChevronLinks>
      <ChevronLink href={previousPage && previousPage.url} direction='left' />
      <ChevronLink href={nextPage && nextPage.url} direction='right' />
    </ChevronLinks>
  )
}

export default withRouter(ChevronNav)
