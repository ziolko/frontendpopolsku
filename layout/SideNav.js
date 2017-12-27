import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

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

export default class extends React.PureComponent {
  render () {
    return menu.map(category =>
      <Category key={category.url}>
        <CategoryHeader>
          <Link href={category.url}><a>{category.name}</a></Link>
        </CategoryHeader>
        <CategoryContent>
          {category.children && category.children.map(page =>
            <Link href={page.url} key={page.url}><a>{page.name}</a></Link>
          )}
        </CategoryContent>
      </Category>
    )
  }
}
