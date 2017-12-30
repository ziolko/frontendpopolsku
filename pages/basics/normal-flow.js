import React from 'react'
import Link from 'next/link'

import chapter from '../../utils/chapter'

export default () => chapter`
### Normal flow

Renderując stronę internetową przeglądarka działa wg schematu zwanego **normal flow**.
Schemat ten opisany został w specyfikacji CSS w sposób dość zawiły i postaram się wyłożyć go
prościej w ramach tego podręcznika.

Aby zrozumieć *normal flow* należy cofnąć się do połowy lat 90, kiedy to pierwsza wersja
CSS była dopiero definiowana. W tamtym czasie strony internetowe miały niewiele wspólnego z
obecnymi witrynami i aplikacjami internetowymi. Przypominały one raczej artykuły z gazet -
z dużym nagłówkiem i kilkoma paragrafami tekstu w których niektóre słowa były wytłuszczone lub 
pisane kursywą. 

Ta właśnie struktura została przeniesiona do CSS. Pojęcie **inline formatting context** 
oznacza obszar strony, w którym elementy układane są jak pojedyncze słowa - w liniach, 
jeden za drugim. Kiedy w obecnej linii kończy się miejsce, tworzona jest nowa.

Z drugiej strony **block formatting context** to obszar strony, w którym elementy układane są jak 
całe paragrafy - jeden pod drugim i zajmują całą dostępną szerokość. O tym, jak stworzyć
nowy *block formatting context* i jakie ma to konsekwencje piszę w kolejnym rozdziale.
`
