import React from 'react'
import Link from 'next/link'

import chapter from '../../utils/chapter'
import Example from '../../components/Example'
import Box from '../../components/Box'

export default () => chapter`
  ### Relative positioning

  Elements with ''position: relative'' occupy space as if they had ''position: static''. When rendered 
  they are translated as indicated by ''top'', ''left'', ''right'' and ''bottom''.

  ${<Example options={[`
  .blue-box {
    position: static;
  }`, `
  .blue-box {
    /* 
      * Without 'left', 'right', etc. 'position: relative'
      * works like 'position: static' 
      */
    position: relative;
  }`, `
  .blue-box {
    position: relative;
    left: 10px;
    top: 10px;
  }`, `
  .blue-box {
    position: relative;
    left: 100px;
    top: 10px; 
  }`, `
  .blue-box {
    position: relative;
    right: 100px;
  }`]}>
    <Box color='red'>First box</Box>
    <Box className='blue-box' color='blue'>Second box</Box>
    <Box color='red'>Third box</Box>
  </Example>}

  #### Impact on absolutely positioned descendant elements
  ''position: relative'' impacts the way ''position: absolute'' work for descendant elements. Play with the 
  example below and learn more in chapter about 
  ${<Link href='/position/absolute'><a>absolute positioning</a></Link>}.

  ${<Example options={[`
  .parent-box {
    position: static;
  }

  .child-box {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  `, `
  .parent-box {
    position: relative;
  }

  .child-box {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  `]}>
    <Box className='parent-box' color='red' size='300'>
      Parent box
      <Box className='child-box' color='blue'>Child box</Box>
    </Box>
  </Example>}
`
