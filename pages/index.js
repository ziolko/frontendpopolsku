import React from 'react'

import Example from '../components/Example'
import Box from '../components/Box'
import chapter from '../utils/chapter'

import { Mobile, Info } from '../components/Utils'

export default () => chapter`
  ### Frontend po polsku - strona domowa

  ${<Info>
    Ten podręcznik licencjonowany jest zgodnie z <a href='https://creativecommons.org/licenses/by-sa/4.0/'>
    Creative Commons Attribution-ShareAlike License 4.0</a>. Kod źródłowy znajdziesz na serwisie
    <a href='https://github.com/ziolko/frontendpopolsku'> Github</a>.
  </Info>}

  Masz przed sobą podręcznik do CSS dla średniozaawansowych. Zakładam, że
  znasz już podstawy CSS i szukasz porad jak wykorzystać posiadaną wiedzę w praktyce. 
  Jeśli dopiero zaczynasz uczyć się frontendu polecam najpierw zapoznać sie z
  ${<a href='https://the-awwwesomes.gitbooks.io/html-css-step-by-step/content/pl/'>tą stroną</a>}.

  Każdy rozdział tego podręcznika opatrzony jest interaktywnymi przykładami takimi jak ten poniżej. 
  To taka piaskownica w której możesz na żywo testować jak działają poszczególne style CSS. 
  Po kliknięciu na któryś z edytorów  stanie się on aktywny (jego ramka zmieni kolor na niebieski). 
  Poświęć teraz chwilę na zapoznanie się ze sposobem działania tego przykładu.

  ${<Mobile><Info>
    Najwygodniej będzie Ci przeglądać tę witrynę na komputerze. Samo czytanie na telefonie czy tablecie nie
    powinno sprawić trudności, ale eksperymentowanie z przykładami jak ten poniżej może być utrudnione.
  </Info></Mobile>}

  ${<Example options={[`
    .first-box {
      font-size: 10px;
    }
    `, `
    .first-box {
    /* Kliknij tutaj i zobacz 
     * co się stanie 
     */
      font-size: 30px;
    }`
  ]}>
    <Box className='first-box' color='gray'>First box</Box>
    <Box className='second-box' color='gray'>Second box</Box>
    <Box className='third-box' color='gray'>Third box</Box>
  </Example>}

  Jeśli masz potrzebę skontaktowania się z autorem tej strony, znajdziesz mnie pod adresem
  ${<a href='mailto:mateusz.mzielinski@gmail.com'>mateusz.mzielinski@gmail.com</a>}.
`
