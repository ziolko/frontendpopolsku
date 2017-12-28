import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(Application => props => sheet.collectStyles(<Application {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Frontend po polsku</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />

          {this.props.styleTags}
          <script async defer src='https://buttons.github.io/buttons.js' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <link rel='stylesheet' href='//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css' />
        <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic' />
        <link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
      </html>
    )
  }
}
