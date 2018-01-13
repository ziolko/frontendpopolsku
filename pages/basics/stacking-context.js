import React from 'react'
import * as links from '../../utils/links'
import Example from '../../components/Example'
import Box from '../../components/Box'

import chapter from '../../utils/chapter'

export default () => chapter`
### Stacking context

Używając styli takich, jak ''position: absolute'' lub ''transform: translateX(100px)'' można
łatwo doprowadzić do sytuacji, kiedy dwa elementy wyświetlane są w tym samym miejscu na stronie
(patrz przykład poniżej). Potrzebne są zasady określające jednoznacznie (i spójnie między przeglądarkami),
który element będzie wyświetlany "na górze", a który "pod spodem". Zasady te zostały dokładnie opisane w 
${<a href='https://drafts.csswg.org/css2/zindex.html'>specyfikacji CSS</a>} a w tym rozdziale
przytaczam najważniejsze z nich.

${<Example options={[`
  .drugi { 
    position: relative;
    left: -20px;
    top: 10px;
  }`]}>
    <p>Który element powinien być wyświetlany na "na górze", a który "pod spodem"?</p>
    <Box className='pierwszy' style={{ opacity: 1 }} color='red'>Pierwszy</Box>
    <Box className='drugi' style={{ opacity: 1 }} color='blue'>Drugi</Box>
  </Example>}

Elementy z ''position: static'' zwykle renderowane są zgodnie z ich kolejnością
w kodzie źródłowym. Kiedy nachodzą na siebie, to te późniejsze przykrywają wcześniejsze.
Tak właśnie dzieje się z liniami tekstu na poniższym przykładzie.

${<Example options={[`
  p {
    font-size: 16px;
    line-height: 15px;
  }
  span {
    background: #fdd;
    border: 1px solid black;
  }
  `]}>
    <p>
      <span>
        Linie renderowane później 'przykrywają' linie wcześniejsze.
        Jest to zgodne ze specyfikacją zachowanie przeglądarki.
      </span>
    </p>
  </Example>}

Na kolejność elementów z ''position'' innym niż ''static'' można wpłynąć przy 
pomocy właściwości ''z-index'' tak jak w przykładzie poniżej.
(Uwaga: ustawienie ''z-index'' dla elementów z ''position: static'' nie będzie miało żadnego efektu).

${<Example options={[`
  .pierwszy { 
    position: relative;
    left: 20px;
    z-index: 0; /* Pod spodem */
  }
  .drugi {
    position: relative;
    right: 20px;
    z-index: 1; /* Na górze */
  }`, `
  .pierwszy { 
    position: relative;
    left: 20px;
    z-index: 1; /* Na górze */
  }
  .drugi {
    position: relative;
    right: 20px;
    z-index: 0; /* Pod spodem */
  }`]}>
    <Box className='pierwszy' style={{ opacity: 1 }} color='red'>Pierwszy</Box>
    <Box className='drugi' style={{ opacity: 1 }} color='blue'>Drugi</Box>
  </Example>}

Częstym błędem jest zakładanie, że ''z-index'' działa w kontekscie całej strony (czyli, że każdy
element z ''z-index: 2'' będzie zawsze wyświetlany ponad elementem z ''z-index: 1''). Jak widać na przykładzie
poniżej nie jest to prawda.

${<Example options={[`
  .pierwszy { 
    position: relative;
    z-index: 2; /* Powinen być na górze */
  }
  .kontener {
    border: 1px solid black;
    opacity: 0.999;
    padding: 10px;
  }
  .drugi {
    position: relative;
    top: -30px;
    z-index: 1;
  }`]}>
    <div className='kontener'>
      <p>
        Czerwony element znajduje się wewnątrz tego kontenera, a niebieski
        na zewnątrz.
      </p>
      <Box className='pierwszy' style={{ opacity: 1, display: 'table-cell', textAlign: 'center', verticalAlign: 'middle' }} color='red'>
        Pierwszy <code>z-index: 2</code>
      </Box>
    </div>
    <Box className='drugi' style={{ opacity: 1, display: 'table-cell', textAlign: 'center', verticalAlign: 'middle' }} color='blue'>
      Drugi <code>z-index: 1</code>
    </Box>
  </Example>}

Styl ''z-index'' działa wyłącznie w ramach tzw. **stacking context**. Element z ''z-index: 2''
będzie renderowany ponad elementami z ''z-index: 1'' znajdującymi się w tym samym *stacking context*. Jeśli 
dwa elementy znajdują się w różnych *stacking context* to ustawiając na nich ''z-index'' nie wpłyniemy
na to, który będzie wyrenderowany 'na górze', a który 'na dole'.

Nowy *stacking context* tworzony jest m.in. przez (Pełną listę znajdziesz w 
${<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context'>MDN</a>}): 
- główny element na stronie - ''<html>''.
- elementy z ''position: absolute'' lub ''position: relative'' wraz z ''z-index'' innym niż ''auto'' 
  (''z-index: auto'' nie tworzy nowego *stacking context*, ale ''z-index: 0'' tak),
- elementy z ''position: fixed'' lub ''position: sticky'',
- elementy z ''opacity'' mniejszym niż ''1'' (tak właśnie zrobiłem w przykładzie powyżej),
- elementy z ''transform'', ''filter'', ''perspective'' innymi niż ''auto''.

Elementy znajdujące się w danym *stacking context* są renderowane zgodnie z kolejnością podaną poniżej:

* elementy z ''position'' innym niż ''static'', których ''z-index'' jest mniejszy niż
  zero, rozpoczynając od tych z najbardziej ujemną wartością ''z-index'',
* elementy z ''position: static'' które nie tworzą *stacking context*,
* elementy z ''position: static'' które tworzą *stacking context* (np. ''opacity: 0.999''),
* elementy z ''position'' innym niż ''static'', których ''z-index'' jest równy ''auto'' lub ''0''
* elementy z ''position'' innym niż ''static'', których ''z-index'' jest większy niż zero, w kolejności
 zgodnej z ''z-index''.
`
