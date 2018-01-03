import React from 'react'
import Link from 'next/link'

import chapter from '../../utils/chapter'
import Example from '../../components/Example'
import Box from '../../components/Box'
import {Info} from '../../components/Utils'

const TextLine = props => (
  <div style={{ position: 'absolute', left: 0, right: 0 }}>
    <span style={{ 
      display: 'inline-block', 
      width: '100%', 
      borderBottom: `1px solid ${props.color}`, 
      verticalAlign: props.verticalAlign
    }} />
  </div>
)

const TextLines = props => (
  <div style={{ marginBottom: 20, fontSize: 60, textAlign: 'center', position: 'relative' }}>
    {props.baseline && <TextLine color='red' verticalAlign='baseline' />}
    {props.line && <TextLine color='green' verticalAlign='top' />}
    {props.line && <TextLine color='green' verticalAlign='bottom' />}
    {props.text && <TextLine color='blue' verticalAlign='text-top' />}
    {props.text && <TextLine color='blue' verticalAlign='text-bottom' />}
    A Ä b q y
  </div>
)

export default () => chapter`
### Jak działa wyrównanie w pionie

Aby zrozumieć działanie stylu ''vertical-align'' trzeba najpierw nauczyć się nieco o fontach. 
Każdy font ma tzw **baseline** (po polsku *linia bazowa*, *lina główna*), czyli linię pokrywającą
się z dolną krawędzią wszystkich dużych liter i małych liter bez wydłużeń dolnych. W przykładach
na tej stronie *baseline* zaznaczony będzie linią czerwoną.

${<TextLines baseline/>}

Poza *linią główną* każdy font definiuje górną i dolną linię pisma, między którymi
mieszczą się wszystkie wszystkie znaki fonta. Na tej stronie będą one zaznaczane kolorem niebieskim.

${<TextLines baseline text/>}

Znając te podstawowe pojęcia możemy przystąpić do tłumaczenia działania ''vertical-align''. 
Niestety, twórcy CSS niepotrzebnie skomplikowali sprawę, bo w zależności od kontekstu ten 
styl działa na dwa zupełnie różne sposoby.

##### Zastosowanie vertical-align dla komórek tabeli

Dla elementów z ''display: table-cell'' styl ''vertical-align'' definiuje wyrównanie w 
pionie zawartości tego elementu. W tym przypadku działa on zgodnie z intuicją, co możesz 
zaobserwować w przykładzie poniżej.

${<Example options={[`
    .table-cell {
      vertical-align: top;
    }
    `, `
    .table-cell {
      vertical-align: middle;
    }
    `, `
    .table-cell {
      vertical-align: bottom;
    }
    `]}>
    <table style={{ border: '1px solid #ccc', height: 300, marginBottom: 0 }}>
      <tbody>
        <tr>
          <td className='table-cell' style={{ border: '1px solid #ccc', padding: 5 }}>
            To jest komórka tabeli. Ten tekst zmieni swoje położenie
            w zależności od wartości stylu <code>vertical-align</code>
          </td>
          <td style={{ border: '1px solid #ccc', padding: 5 }}>
            To jest inna komórka tabeli dla porównania. Styl <code>vertical-align</code>
            ustawiony jest tutaj na wartość domyślną.
          </td>
        </tr>
      </tbody>
    </table>
  </Example>}

Jeśli komórka tabeli ma ustawiony styl ''vertical-align: baseline'', to *baseline* tej komórki
będzie wyrównany do *baseline* wszystkich innych komórek  z ''vertical-align: baseline''
znajdujących się w tym samym wierszu. Możesz to zaobserwować na przykładzie poniżej. Linia bazowa
obu komórek została zaznaczona na czerwono.

${<Example options={[`
    .czerwona {
      vertical-align: baseline;
      background: #fcc; /* czerwony */
    }
    .niebieska {
      vertical-align: baseline;
      padding-top: 100px;
      background: #ccf; /* niebieski */
    }`, `
    .czerwona {
      /* zmieniamy vertical-align
       * z 'baseline' na 'top' */
      vertical-align: top;
      background: #fcc; /* czerwony */
    }
    .niebieska {
      vertical-align: baseline;
      padding-top: 100px;
      background: #ccf; /* niebieski */
    }`]}>
    <table style={{ border: '1px solid #ccc', height: 300, marginBottom: 0 }}>
      <tbody>
        <tr>
          <td className='czerwona' style={{ border: '1px solid #ccc', position: 'relative'  }}>
            <TextLine color='red' verticalAlign='baseline'/>
            Baseline tego tekstu wyrównany jest z baselinem komórki obok.
          </td>
          <td className='niebieska' style={{ border: '1px solid #ccc', position: 'relative' }}>
            <TextLine color='red' verticalAlign='baseline'/>
            Ta komórka ma ustawiony padding na 100px, więc jej baseline
            również przesuwa się w dół.
          </td>
        </tr>
      </tbody>
    </table>
  </Example>}

${<Info>
Dla większości znaczników HTML domyślnym ustawieniem jest 
<code>vertical-align: baseline</code>, którego zachowanie, jak pokazano powyżej, może być nieco zaskakujące. 
Ustawiając <code>display: table-cell</code> np. elementom typu <code>{'<div>'}</code>, pamiętaj o zmianie 
<code>vertical-align</code> na jedną z wartości: <code>top</code>, <code>middle</code> lub <code>bottom</code>.
</Info>}


##### Zastosowanie vertical-align dla elementów liniowych

W przypadku zastosowania stylu ''vertical-align'' do elementów liniowych (np. ''display: inline'',
czy ''display: inline-block'') intuicję musisz niestety zostawić za drzwiami. W przykładzie poniżej
w jednej linii znajdują się trzy elementy typu ''<span>''. Pierwszy z nich 
ma ustawiony ''vertical-align: top'', drugi ''vertical-align: bottom''
a ustawienie trzeciego możesz kontrolować przy pomocy edytorów po lewej.

Pomimo ustawienia ''vertical-align'' na ''top'' i ''bottom'' wszystkie trzy elementy znajdują się w jednej linii. 
Po ustawieniu ''vertical-align: middle'' na trzecim elemencie można zauważyć, że pierwszy z nich
(ten z ''vertical-align: top'') pozostaje niewzruszony, natomiast drugi i trzeci delikatnie 
przesuwają się w dół. Czy takiego właśnie zachowania się spodziewasz?

${<Example options={[`
  .przyklad {
    vertical-align: baseline;
  }
  `,`
  .przyklad {
    vertical-align: middle;
  }
  `]}>
    <span style={{ verticalAlign: 'top' }}>Top </span>
    <span style={{ verticalAlign: 'bottom' }}>Bottom </span>
    <span className='przyklad'>Przykład</span>
  </Example>}

Do zrozumienia powyższego przykładu musimy przywołać rozdział o 
${<Link><a href='/basics/normal-flow'>normal flow</a></Link>}. Zdefiniowałem tam
*inline formatting context* jako obszar, w którym elementy układane są jak pojedyncze 
słowa - w liniach, jeden za drugim. Kiedy w obecnej linii kończy się miejsce, tworzona jest nowa.

Każda linia ma pewną wysokość. Przy pomocy właściwości ''line-height'' na poziomie elementu
tworzącego *inline formatting context* (czyli na przykład na poziomie paragrafu lub 
tagu ''<div>'') można ustawić wysokość pojedynczej linii tekstu w tym elemencie 
(z tym, że jest to wysokość *minimalna*, czyli linia może być wyższa, co omówię za chwilę). 

${<Example options={[`
  p {
    line-height: 1.5;
  }
  `,`
  p {
    line-height: 30px;
  }
  `,`
  p {
    line-height: 10px;
  }`]}>
    <p>
      Cały ten tekst znajduje się w jednym paragrafie. Przy pomocy właściwości
      <code>line-height</code> ustawionej na tym paragrafie możesz zmienić wysokość 
      pojedynczej linii.
    </p>
  </Example>}
`
