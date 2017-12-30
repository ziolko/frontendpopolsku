import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/light'
import css from 'react-syntax-highlighter/languages/hljs/css'
import xcode from 'react-syntax-highlighter/styles/hljs/xcode'

registerLanguage('css', css)

export default props => <SyntaxHighlighter language='css' style={xcode} onClick={props.onFocus}>{props.value}</SyntaxHighlighter>
