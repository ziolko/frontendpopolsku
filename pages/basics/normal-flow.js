import React from 'react'
import Example from '../../components/Example'

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

Ta właśnie struktura została przeniesiona do nazewnictwa CSS. Pojęcie **inline formatting context** 
oznacza obszar strony, w którym elementy układane są jak pojedyncze słowa - w liniach, 
jeden za drugim. Kiedy w obecnej linii kończy się miejsce, tworzona jest nowa. W poniższym 
przykładzie cały obszar o białym tle to jeden *inline formatting context*.

${
  <Example>
    Cały ten tekst znajduje się w jednym <em>inline formatting context</em> pomimo, że
    składa się z wielu elementów (tagów HTML).
    W tym samym <em>inline formatting context</em> znajdują się
    również <strong>ten pogrubiony element</strong> oraz <u>ten podkreślony</u>.
    Z tego powodu wszystkie one układane są jeden za drugim, w liniach.
  </Example>
  }

Z drugiej strony **block formatting context** to obszar strony, w którym elementy układane są jak 
całe paragrafy - jeden pod drugim, wyrównane do lewej (do prawej dla dokumentów w języku arabskim 
czy hebrajskim). W przykładzie poniżej bloki w kolorach czerwonym, zielonym i niebieskim znajdują się
w tym samym *block formatting context*.

${<Example>
    <div style={{ background: '#ffaaaa', height: 40, margin: 10 }} />
    <div style={{ background: '#aaffaa', height: 40, width: '50%', margin: 10 }} />
    <div style={{ background: '#aaaaff', height: 40, width: '80%', margin: 10 }} />
  </Example>}

*Block formatting context* może zawierać w sobie inne *block formatting context* oraz 
*inline formatting context*. Tak więc standardowa strona internetowa składa się z 
*block formatting context* w których zagnieżdżone są *inline formatting context* tak, jak w 
przykładzie poniżej.

${<Example>
    Cały biały obszar to jeden <em>block formatting context</em>.
  <div style={{ background: '#ffaaaa', margin: 10, padding: 10 }}>
      Tutaj jest zagnieżdżony <em>inline formatting context</em>.
  </div>
    <div style={{ background: '#aaffaa', width: '50%', margin: 10, padding: 10 }}>
      Tutaj znajduje się kolejny zagnieżdżony <em>inline formatting context</em>.
  </div>
    <div style={{ background: '#aaaaff', width: '80%', margin: 10, padding: 10 }}>
      Tutaj jeszcze inny zagnieżdżony <em>inline formatting context</em>.
  </div>
  </Example>}

#### Tworzenie block formatting context
Nowy *block formatting context* tworzony jest między innymi przez:
- główny element na stronie (''html''),
- ustawienie stylu ''float'' na wartość inną niż ''none'',
- elementy pozycjonowane absolutnie (z ''position: absolute'' lub ''position: fixed''),
- elementy z ''display: inline-block'',
- elementy z ''overflow'' innymi niż ''visible'' (np. ''overflow: hidden''),
- dzieci elementów z ''display: flex'', ''display: inline-flex'',
  ''display: grid'' oraz ''disaply: inline-grid''.

Pełną listę sytuacji, w których tworzony jest *block formatting context* możesz 
znaleźć na stronach
${<a href='https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context'>
  Mozilla Developer Network (MDN)
</a>}.

To tyle teorii. O tym, jak *block formatting context* działa w praktyce
przekonasz się w kolejnych rozdziałach.
`
