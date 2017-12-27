import React from 'react'

import Example from '../components/Example'
import Box from '../components/Box'
import chapter from '../utils/chapter'

export default () => chapter`
  ### Wstęp

  Masz przed sobą podręcznik do CSS dla średniozaawansowych. Zakładam, że
  znasz już podstawy CSS i szukasz porad jak wykorzystać posiadaną wiedzę w praktyce. 
  Jeśli dopiero zaczynasz uczyć się frontendu polecam zapoznać sie z
  ${<a href='https://the-awwwesomes.gitbooks.io/html-css-step-by-step/content/pl/'>tą stroną</a>}.

  Każdy rozdział opatrzony jest interaktywnymi przykładami takimi jak ten poniżej. To piaskownica
  w której możesz na żywo testować jak działają style CSS. Po kliknięciu na któryś z edytorów 
  stanie się on aktywny (jego ramka zmieni kolor na niebieski). 
  Poświęć teraz chwilę na zapoznanie się ze sposobem działania tego przykładu.

  ${<Example options={[`
    .first-box {
      font-size: 10px;
    }
    `, `
    .first-box {
      /* Kliknij tutaj i zobacz co się stanie */
      font-size: 30px;
    }`, `
    .first-box {
      background: #aaf;
      color: white;
    }
    .second-box {
      /* Dodaj tutaj jakiś styl np. 'color: red' */
    }
    .third-box {
      background: #ff5;
    }`
  ]}>
    <Box className='first-box' color='gray'>First box</Box>
    <Box className='second-box' color='gray'>Second box</Box>
    <Box className='third-box' color='gray'>Third box</Box>
  </Example>}

  Kod źródłowy tego podręcznika znajdziesz na serwisie ${<a href='https://github.com/ziolko/frontendpopolsku'>Github</a>}.
  Zachęcam do zgłaszania tam swoich uwag i zadawania pytań. Jeśli masz potrzebę skontaktowania się z autorem tej strony, 
  znajdziesz mnie pod adresem
  ${<a href='mailto:mateusz.mzielinski@gmail.com'>mateusz.mzielinski@gmail.com</a>}.
`
