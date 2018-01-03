import React from 'react'
import Link from 'next/link'
import Example from '../../components/Example'

import chapter from '../../utils/chapter'

const Image = props => (
  <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
    <img src={props.src} style={{ width: 350 }} />
    <span style={{ display: 'block', fontSize: '1.5rem' }} children={props.title} />
  </p>
)

export default () => chapter`
### Box model

Zapewne zetknąłeś się już z modelem pudełkowym. Pokrótce go tutaj przypomnę, ponieważ w dalszej 
części podręcznika będę posługiwał się związanymi z nim pojęciami.

${<Image src='/static/images/box-model.png' title='Box model. Źródło: the-awwwesomes.gitbooks.io' />}

Dla każdego elementu na stronie przeglądarka tworzy pudełko (box) podzielony na kilka obszarów:

- margines (zawsze jest przezroczysty i podlega zjawisku 
  ${<Link><a href='/basics/collapsing-margins'>collapsing margins</a></Link>}),
- obramowanie (ang. *border*),
- padding (po naszemu *wyściółka*), czyli obszar między obramowaniem a zawartością elementu,
- zawartość (ang. *content*).

Znając te podstawowe pojęcia możemy zdefiniować kolejne (definicje poniżej są dość istotne, więc
poświęć chwilę na ich zrozumienie):

- *content box*, czyli obszar, w którym znajduje się zawartość (treść) elementu,
- *padding box* - jest to cały obszar znajdujący się między zewnętrznymi granicami paddingu, czyli
  *padding* + *content box*,
- *border box* - cały obszar między zewnętrznymi granicami ramki, czyli ramka + *padding box*,
- *margin box* to cały obszar między zewnętrznymi granicami marginesu, czyli margines + *border box*.
`
