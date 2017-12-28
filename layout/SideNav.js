import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { withRouter } from 'next/router'

import menu from '../menu'

const Category = styled.div`
  margin-bottom: 10px;

  & [aria-current="true"] {
    color: black;
  }
`

const CategoryHeader = styled.h5`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 5px;
`

const CategoryContent = styled.div`
  margin-left: 15px;
  & > a {
    display: block;
  }
`

const NavLink = props => (
  <Link href={props.href}>
    <a className={props.className}>{props.children}</a>
  </Link>
)

const MenuLink = styled(NavLink) `
  ${props => props.active && `
    color: black;
    font-weight: bold;
  `}
`

class SideNav extends React.PureComponent {
  render () {
    const currentUrl = this.props.router.route

    return menu.map(category =>
      <Category key={category.url}>
        <CategoryHeader>
          <MenuLink href={category.url} active={category.url === currentUrl} children={category.name} />
        </CategoryHeader>
        <CategoryContent>
          {category.children && category.children.map(page =>
            <MenuLink href={page.url} key={page.url} active={page.url === currentUrl} children={page.name} />
          )}
        </CategoryContent>
      </Category>
    )
  }
}

export default withRouter(SideNav)
