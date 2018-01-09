import React from 'react'
import Link from 'next/link'

import chapter from '../../utils/chapter'
import Example from '../../components/Example'
import Box from '../../components/Box'
import { Info } from '../../components/Utils'

const TextLine = props => (
  <span style={{ display: 'block', position: 'absolute', left: 0, right: 0 }}>
    <span style={{
      display: 'inline-block',
      width: '100%',
      borderBottom: `1px solid ${props.color}`,
      verticalAlign: props.verticalAlign
    }} />
  </span>
)

const TextLines = props => (
  <div style={{ marginBottom: 20, fontSize: 60, textAlign: 'center', position: 'relative', ...props.style }}>
    <div style={props.style}>
      {props.baseline && <TextLine color='red' verticalAlign='baseline' />}
      {props.line && <TextLine color='green' verticalAlign='top' />}
      {props.line && <TextLine color='green' verticalAlign='bottom' />}
      {props.text && <TextLine color='blue' verticalAlign='text-top' />}
      {props.text && <TextLine color='blue' verticalAlign='text-bottom' />}
      A Ä b q y
    </div>
  </div>
)

export default () => chapter`
### Jak działa wyrównanie w pionie

Niestety, twórcy CSS niepotrzebnie skomplikowali sprawę stylu ''vertical-align'', bo w 
zależności od kontekstu działa on na dwa zupełnie różne sposoby.

#### Działanie vertical-align dla komórek tabeli

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
          <td className='czerwona' style={{ border: '1px solid #ccc', position: 'relative' }}>
            <TextLine color='red' verticalAlign='baseline' />
            Baseline tego tekstu wyrównany jest z baselinem komórki obok.
          </td>
          <td className='niebieska' style={{ border: '1px solid #ccc', position: 'relative' }}>
            <TextLine color='red' verticalAlign='baseline' />
            Ta komórka ma ustawiony padding na 100px, więc jej baseline
            również przesuwa się w dół.
          </td>
        </tr>
      </tbody>
    </table>
  </Example>}

${<Info>
    <em>Baseline</em> (po polsku <em>linia bazowa</em> lub <em>lina główna</em>) to linia pokrywającą
  się z dolną krawędzią wszystkich dużych liter i małych liter bez wydłużeń dolnych. W przykładach
  na tej stronie <em>baseline</em> zawsze zaznaczony będzie na czerwono.
  <TextLines baseline />
  </Info>}

Dla większości znaczników HTML domyślnym ustawieniem jest
''vertical-align: baseline'', którego zachowanie, jak pokazano powyżej, może być nieco zaskakujące.
Ustawiając ''display: table-cell'' np. elementom typu ''<div>'', pamiętaj o zmianie
''vertical-align'' na jedną z wartości: ''top'', ''middle'' lub ''bottom''.

#### Działanie vertical-align dla elementów liniowych

W przykładzie poniżej mamy paragraf (tag ''<p>'') tekstu. Tekst umieszczany jest w liniach. Każda linia
ma swoją wysokość, oraz *baseline* (*baseline* pierwszej linii zaznaczony został na czerwono). Wysokość
linii można kontrolować przy pomocy stylu ''line-height'' ustawionego na kontenerze (na tagu ''<p>'').

${<Example options={[`
  p {
    line-height: 25px;
  }`, `
  p {
    line-height: 40px;
  }`]}>
    <p>
      <TextLine color='red' verticalAlign='baseline' />
      Cały ten tekst znajduje się w jednym paragrafie. Czerwona linia
      pokazuje baseline pierwszej linijki tekstu. Wysokość
      linijek możesz kontrolować ustawiając styl line-height na paragrafie.
    </p>
  </Example>}

Cały tekst w przykładzie powyżej używa tego samego kroju i wielkości czcionki. Co powinno się 
stać, gdyby w środku linijki pojawił się fragment pisany większą czcionką? Są dwie opcje:

- wysokość linijki pozostaje bez zmian i tekst pisany większą czcionką 'nachodzi' na 
  linijki powyżej i poniżej, albo
- wysokość linijki zwiększa się tak, żeby pomieścić tekst pisany większą czcionką.

Twórcy CSS zdecydowali się na drugą opcję, co możesz zauważyć w przykładzie poniżej.

${<Example options={[`
  .niebieski {
    color: blue;
    font-size: inherit;
  }
  `, `
  .niebieski {
    color: blue;
    font-size: 50px;
  }
  `]}>
    <p>
      Wielkość czcionki niebieskiego tekstu możesz zmienić, wybierając
      odpowiedni edytor. Zwróć <span className='niebieski'>uwagę</span> na
      to, że cała linia zwiększyła swoją wysokość.
    </p>
  </Example>}

W powyższym przykładzie należy zauważyć dwie istotne rzeczy:
- styl ''line-height'' ustawiony na kontenerze oznacza **minimalną** wysokość linii. Może
być ona większa, jeśli jest taka potrzeba (jak w przykładzie powyżej). Nigdy jednak wielkość
linii tekstu nie będzie mniejsza niż ''line-height''.
- zmiana rozmiaru częsci tekstu zaznaczonej na niebiesko spowodowała zmianę pozycji
reszty tekstu - został on przesunięty w dół.

Domyślnym ustawieniem ''vertical-align'' dla większości elementów HTML jest ''vertical-align: baseline''.
Kiedy przyjrzymy się przykładowi powyżej, okazuje się, że rzeczywiście *baseline* niebieskiego i czarnego
tekstu znajduje się w tym samym miejscu. Zwróć uwagę na to, że pozycja *baseline* danej linijki nie jest 
określona z góry i zależy od jej zawartości (w powyższym przykładzie zmiana rozmiaru czcionki niebieskiego 
tekstu powoduje przesunięcie *baseline* całej linijki).

Jeśli dany element nie ma *baseline* (na przykład obrazek) i ma ustawione ''vertical-align: baseline'',
to dolna granica jego marginesu zostanie wyrównana do *baseline* linijki. Przykład takiego zachowania
znajdziesz poniżej.

${<Example options={[`
  img {
    vertical-align: baseline;
    height: 20px;
  }`, `
  img {
    vertical-align: baseline;
    height: 10px;
  }`]}>
    <img src='/static/favicon.ico' /> Tekst z <code>vertical-align: baseline</code>
  </Example>}

##### vertical-align: top oraz bottom

Inną dozwoloną wartością ''vertical-align'' jest ''vertical-align: top''. Po ustawieniu tej wartości
górna granica elementu na którym ją ustawimy zawsze będzie wyrównana do górnej granicy linijki, w której się znajduje.
Podobnie, ''vertical-align: bottom'' wyrówna dolną granicę elementu do dolnej granicy linijki.

W przykładzie poniżej w jednej linii znajdują się trzy elementy typu ''<span>''. Pierwszy z nich 
ma ustawiony ''vertical-align: top'', drugi ''vertical-align: bottom'', a trzeci ''vertical-align: baseline''. 
W tym przykładzie możesz kontrolować wielkość czcionki trzeciego elementu. Zwróć uwagę na to, jak 
zmienia się ustawienie pozostałych dwóch.

${<Example options={[`
  .baseline {
    font-size: inherit;
  }`, `
  .baseline {
    font-size: 20px;
  }`, `
  .baseline {
    font-size: 50px;
  }`]}>
    <span style={{ verticalAlign: 'top' }}>Top </span>
    <span style={{ verticalAlign: 'bottom' }}>Bottom </span>
    <span className='baseline'>Baseline</span>
  </Example>}

Przy ''font-size: inherit'' wszystkie trzy elementy znajdują się w jednej linii. Jeśli uważnie 
przestudiujesz ten przykład to dojdziesz do wniosku, że:
- górna granica elementu z ''vertical-align: top'' jest wyrównana do górnej granicy linijki,
- dolna granica elementu z ''vertical-align: bottom'' jest wyrównana do dolnej granicy linijki,
- *baseline* elementu z ''vertical-align: baseline'' jest wyrównany z *baseline* linijki.

Po zwiększeniu rozmiaru czcionki trzeciego elementu, dolna granica linijki oraz *baseline* przesuwają
się w dół, co wymusza zmianę położenia innych elementów w tej samej linii.

${<Info>
    Uwaga: styl <code>vertical-align</code> ustawiamy na elemencie, którego wyrównanie
  chcemy zmienić, a nie na kontenerze (jak <code>{'<p>'}</code>, czy <code>{'<div>'}</code>),
  w którym ten element się znajduje. Zwróć uwagę na to, że w sekcji
  <em> Jak działa vertical-align dla komórek tabeli</em> było odwrotnie - ustawialiśmy <code>vertical-align</code>
    na komórce tabeli (kontenerze). To zamieszanie wynika z faktu, że działanie <code>vertical-align</code> w obu tych
  przypadkach jest zupełnie odmienne i tak właściwie powinny być to dwa style o różnej nazwie.
</Info>}

##### vertical-align: middle

Ciekawy jest sposób działania ''vertical-align: middle''. Ustawienie takiego stylu na elemencie powoduje 
wyrównanie jego środka ze środkiem małego znaku *x* czcionki ustawionej na kontenerze, w którym znajduje 
się ten element. Możesz sprawdzić to w 
${<a href='https://www.w3.org/TR/CSS22/visudet.html#propdef-vertical-align'>specyfikacji CSS</a>} oraz 
w przykładzie poniżej.

${<Example options={[`
  .kontener {
    font-size: 20px;
    background: #eee;
  }
  .box {
    vertical-align: middle
  }`, `
  .kontener {
    font-size: 60px;
    background: #eee;
  }
  .box {
    vertical-align: middle
  }`]}>
    <p class='kontener'>
      <span>x </span>
      <span className='box' style={{ display: 'inline-block', background: 'red', width: 20, height: 20 }} />
      <span> Zwróć uwagę, że środek czerwonego pudełka jest wyrównany do połowy wysokości małego znaku x.</span>
    </p>
  </Example>}
`
