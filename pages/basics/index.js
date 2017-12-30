import React from 'react'
import Link from 'next/link'

import chapter from '../../utils/chapter'

export default () => chapter`
### Podstawowe pojęcia

Nie da się sensownie rozmawiać o CSS bez znajomości pewnych podstawowych pojęć zdefiniowanych w
${<a href='https://www.w3.org/TR/CSS22/'>specyfikacji</a>}. Definicje tych najbardziej podstawowych
przytoczę w kolejnych podrozdziałach.

Czasami wykorzystam pojęcia które omówione zostaną dopiero w dalszej częsci tego podręcznika. 
Nie przejmu się, jeśli początkowo nie w pełnie zrozumiesz część omawianych tematów - prawdopodobnie dopiero 
po drugim lub trzecim przeczytaniu tego podręcznika wszystko 'zaklika' w Twojej głowie.

Wynika to trochę z natury samego CSS - poszczególne style często wzajemnie na siebie wpływają i nie da się 
w pełni wytłumaczyć ich działania w osobno. Tak jest na przykład z ''transform: translateX(0)'', który wpływa 
na sposób działania ''position: fixed'' pomimo, że na pierwszy rzut oka te dwa style nie mają ze sobą wiele 
wspólnego. 

Jeśli uważasz, że jakiś temat da się wytłumaczyć prościej niż ja to zrobiłem 
będę wdzięczny za ${<a href='mailto:mateusz.mzielinski@gmail.com'>maila</a>} :)
`
