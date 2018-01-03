import React from 'react'
import Link from 'next/link'

import chapter from '../../utils/chapter'

export default () => chapter`
### Podstawy

W tej części strony wprowadzę kilka podstawowych pojęć związanych z CSS, 
które każdy frontend developer powinien znać, a które z jakiegoś powodu w większości
dostępnych kursów traktowane są po macoszemu.

Czasami będę korzystał z terminów omawianych dopiero w dalszej częsci podręcznika.
Nie przejmu się, jeśli początkowo nie zrozumiesz część omawianych tematów - prawdopodobnie dopiero 
po drugim lub trzecim przeczytaniu całości wszystko 'zaklika' w Twojej głowie.

Wynika to trochę z natury samego CSS - poszczególne style często wzajemnie na siebie wpływają i nie da się 
w pełni wytłumaczyć ich działania w osobno. Tak jest na przykład z ''transform: translateX(0)'', który wpływa 
na sposób działania ''position: fixed'' pomimo, że na pierwszy rzut oka te dwa style nie mają ze sobą wiele 
wspólnego. 

Jeśli uważasz, że jakiś temat da się wytłumaczyć prościej niż ja to zrobiłem 
będę wdzięczny za ${<a href='mailto:mateusz.mzielinski@gmail.com'>maila</a>} :)
`
