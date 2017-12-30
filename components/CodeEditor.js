import React from 'react'
import Ace from 'react-ace'

import 'brace'
import 'brace/mode/css'
import 'brace/theme/xcode'
import 'brace/ext/language_tools'

export default props => <Ace
  mode='css'
  theme='xcode'
  width='100%'
  onFocus={props.onFocus}
  onChange={props.onChange}
  value={props.value}
  fontSize={14}
  showPrintMargin={false}
  showGutter={false}
  highlightActiveLine={false}
  editorProps={{ $blockScrolling: true }}
  setOptions={{
    wrap: true,
    maxLines: 30,
    minLines: 2,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
  }} />
