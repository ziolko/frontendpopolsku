import React from 'react'
import Example from '../../components/Example'
import { Info } from '../../components/Utils'

import chapter from '../../utils/chapter'

export default () => chapter`
### Stacking context

Sposób ustalania kolejności renderowania elementów strony jest bardzo skomplikowany. Został on 
dokładnie opisany w ${<a href='https://drafts.csswg.org/css2/zindex.html'>specyfikacji CSS</a>}, a tutaj
przybliżam jedynie jego najważniejsze punkty.

W najprostszym przypadku elementy są renderowane zgodnie z ich kolejnością w kodzie źródłowym. 
Kiedy elementy na stronie nachodzą na siebie, to ten późniejszy przykrywa wcześniejsze.
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
        Jest to domyślne zachowanie przeglądarki.
      </span>
    </p>
  </Example>}



#### Podsumowanie

Kluczową koncepcją wymaganą do zrozumienia tego tematu jest pojęcie **stacking context**. Jest on
zawsze związany z jakimś elementem na stronie (mówimy, że ten element tworzy *stacking context*). 
Elementy znajdujące się w danym *stacking context* są renderowane zgodnie z kolejnością podaną poniżej:

* elementy tworzące *stacking context*, których ''z-index'' jest mniejszy niż
  zero, rozpoczynając od tych z najbardziej ujemną wartością ''z-index'',
* elementy, które nie tworzą *stacking context* zgodnie z kolejnością występowania w kodzie źródłowym,
* elementy tworzące *stacking context*, których ''z-index'' jest równy zero lub ''auto'',
* elementy tworzące *stacking context*, których ''z-index'' jest większy niż zero, w kolejności
 zgodnej z ''z-index''.
`
