import React from 'react'
import Head from 'next/head'
import pages from '../utils/pages'
import { withRouter } from 'next/router'

class PageTitle extends React.PureComponent {
  render () {
    const currentPage = pages.find(page => page.url === this.props.router.route)
    return (
      <Head>
        <title>{currentPage && `${currentPage.name} -`} Frontend po polsku</title>
      </Head>
    )
  }
}

export default withRouter(PageTitle)
