import React from 'react'
import Link from 'next/link'

import chapter from '../../utils/chapter'
import Example from '../../components/Example'
import Box from '../../components/Box'

export default () => chapter`
### Absolute positioning
Absolutely positioned elements are removed from normal document flow. They don't occupy space and other elements
behaves is if the absolutely positioned element didn't exist.

${<Example options={[`
  .blue-box {
    position: static;
  }
`, `
.blue-box {
  position: absolute;
}
`]}>
    <Box color='red'>First box</Box>
    <Box className='blue-box' color='blue' size='70'>Second</Box>
    <Box color='red'>Third box</Box>
  </Example>}

The exact position of elements with ''position: absolute'' is defined using the 
''left'', ''top'', ''right'' and ''bottom'' properties. They determine offset from 
the edges of the element's **containing block** (usually a first ancestor element that has
''position'' other than ''static'' - more about this in chapter about 
${<Link href='/containing-block'><a>containing blocks</a></Link>}).

${<Example options={[`
.blue-box {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
`, `
.blue-box {
  position: absolute;
  left: 100px;
  right: 200px;
  top: 50px;
  bottom: 10px;
}
`]} >
    <Box className='blue-box' color='blue' size='auto'>Blue box</Box>
  </Example>}
`
