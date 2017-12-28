import React from 'react'
import styled from 'styled-components'
import Router, { withRouter } from 'next/router'

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
const MenuLink = styled.a`
  ${props => props.active && `
    color: black;
    font-weight: bold;
  `}
`

class SideNav extends React.PureComponent {
  render () {
    const currentUrl = this.props.router.route
    const categories = menu.map(category =>
      <Category key={category.url}>
        <CategoryHeader>
          <MenuLink onClick={e => this.onNavigate(e, category.url)} href={category.url} active={category.url === currentUrl} children={category.name} />
        </CategoryHeader>
        <CategoryContent>
          {category.children && category.children.map(page =>
            <MenuLink onClick={e => this.onNavigate(e, page.url)} href={page.url} key={page.url} active={page.url === currentUrl} children={page.name} />
          )}
        </CategoryContent>
      </Category>
    )

    return <div className={this.props.className}>{categories}</div>
  }

  componentDidMount () {
    menu.forEach(category => Router.prefetch(category.url))
  }

  onNavigate (event, url) {
    event.preventDefault()
    this.props.onNavigate(url)
  }
}

export default withRouter(SideNav)
