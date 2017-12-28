import React from 'react'
import styled from 'styled-components'

const Article = styled.article`
  max-width: 800px;
  margin: auto;
`

export default class Content extends React.PureComponent {
  render () {
    return <Article>{this.props.children}</Article>
  }
}
