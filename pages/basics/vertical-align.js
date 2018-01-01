import React from 'react'

import chapter from '../../utils/chapter'
import Example from '../../components/Example'
import Box from '../../components/Box'

export default () => chapter`
### Jak działa wyrównanie w pionie

Ta dość podstawowa funkcjonalność CSS sprawia wiele trudności zarówno początkującym 
jak i zaawansowanym frontendowcom. Zapewne wynika to z faktu, że w zależności od kontekstu
działa ona zupełnie inaczej.

${<Example options={[`
.blue-box {
  /* 'top' and 'left' have no impact when position is 'static' */
  position: static;
  top: 20px;
  left: 100px;
}`, `
.blue-box {
  /* 
   * When position is 'absolute' the element doesn't occupy space.
   * That's why in this example 'Third box' is put in place 
   * of 'Second box'.
   */
  position: absolute;
  top: 20px;
  left: 100px;
}`, `
.blue-box {
  /* 
   * Elements with position 'relative' still occupy space as
   * if they had position 'static'. They are just moved
   * according to 'top', 'left', 'right' and 'bottom' properties.
   */ 
  position: relative;
  top: 20px;
  left: 100px;
}`
]}>
  <Box color='red'>First box</Box>
  <Box className='blue-box' color='blue'>Second box</Box>
  <Box color='red'>Third box</Box>
</Example>}
`
