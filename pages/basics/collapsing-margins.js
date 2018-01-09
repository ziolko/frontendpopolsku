import React from 'react'
import Link from 'next/link'
import Example from '../../components/Example'
import Box from '../../components/Box'

import chapter from '../../utils/chapter'

export default () => chapter`
### Collapsing margins

W pewnych sytuacjach marginesy górny i dolny dwóch elementów blokowych na stronie
'sklejają się' w jeden. Zjawisko to nazywa się **collapsing margins**.
Na poniższym przykładzie odległość (margines pionowy) pomiędzy 
blokami czerwonym i niebieskim pozostaje stała (i równa ''10px'') niezależnie od tego, czy margines
bloku niebieskiego ustawiony jest na ''0'' czy ''10px''.

${<Example options={[`
  .czerwony {
    margin: 10px;
  }
  .niebieski {
    margin: 10px;
  }`, `
  .czerwony {
    margin: 10px;
  }
  .niebieski {
    margin: 0px;
  }`]}>
    <div className='czerwony' style={{ background: '#ffdddd', padding: 20 }}>Czerwony paragraf</div>
    <div className='niebieski' style={{ background: '#ddddff', padding: 20 }}>Niebieski paragraf</div>
  </Example>}

Marginesy sklejają się w sytuacjach opisanych poniżej. Zwróć uwagę na to, że 
marginesy poziome (lewy i prawy) **nigdy** się nie sklejają.

##### Przylegające do siebie kolejne elementy (rodzeństwo)
Marginesy pionowe dwóch przylegających do siebie elementów będących rodzeństwem 
w drzewie DOM sklejają się w jeden. Tak stało się w powyższym przykładzie z 
*czerwonym* i *niebieskim* paragrafem.

##### Rodzic i pierwsze/ostatnie dziecko
Margines górny rodzica i pierwszego dziecka sklejają się, jeśli nie rozdziela
ich ''border'',''padding'', *block formatting context* ani styl ''clear''.  Margines dolny 
rodzica i ostatniego dziecka sklejają się, jeśli nie rozdziela 
ich ''border'', ''padding'', block formatting context, ''height'', ''min-height'' 
ani ''max-height''.

Zwróć uwagę na to, że nawet, jeśli rodzic ma margines ustawiony na 0, to 
w wyniku sklejenia marginesu z dzieckiem jego ostateczna wartość może być większa od 0. 
Tak właśnie dzieje się w przykładzie poniżej.

${<Example options={[`
  .rodzic {
    margin: 0;
    background: #afa; /* zielony */
    border: 1px solid black;
    /* border powoduje, że 
     * marginesy dziecka i rodzica 
     * nie sklejają się 
     */ 
  }
  .dziecko {
    margin: 30px;
    background: #aaf; /* niebieski */
  }`, `
  .rodzic {
    margin: 0;
    background: #afa; /* zielony */
    /* Bez obramowania marginesy
     * pionowe dziecka i rodzica 
     * sklejają się w jeden 
     */
  }
  .dziecko {
    margin: 30px;
    background: #aaf; /* niebieski */
  }`]}>
    <div className='rodzic'>
      <div className='dziecko' style={{ padding: 20 }}>Dziecko</div>
    </div>
  </Example>}

Wartym odnotowania jest fakt, że *block formatting context* blokuje sklejanie się marginesów.
Możesz to zaobserwować na kolejnym przykładzie.

${<Example options={[`
  .rodzic {
    margin: 0;
    background: #afa; /* zielony */
  }
  .dziecko {
    margin: 30px;
    background: #aaf; /* niebieski */
  }`, `
  .rodzic {
    margin: 0;
    background: #afa; /* zielony */
    overflow: hidden;
    /* overflow: hidden tworzy
     * block formatting context
     */
  }
  .dziecko {
    margin: 30px;
    background: #aaf; /* niebieski */
  }`]}>
    <div className='rodzic'>
      <div className='dziecko' style={{ padding: 20 }}>Dziecko</div>
    </div>
  </Example>}

##### Bloki puste
Jeśli blok jest pusty, nie ma ustawionych właściwości ''border'', ''padding'', 
''height'' ani ''min-height'' (czyli nic, co oddzielałoby od siebie górny i dolny 
margines), to jego marginesy sklejają się w jeden.

#### Wysokość sklejonego marginesu

Kiedy dwa (lub więcej) marginesy sklejają się, wynikowy margines jest równy największemu z nich. 
Jeśli część marginesów jest ujemna, to od największego z nich odejmowana jest wysokość 
najmniejszego (najbardziej ujemnego).
W przypadku, kiedy wszystkie marginesy są ujemne, wynikowy margines jest równy najmniejszemu
z nich (najbardziej ujemnemu).

${<Example options={[`
  .rodzic {
    margin: 30px;
    background: #afa; /* zielony */
  }
  .dziecko {
    margin: 30px;
    background: #aaf; /* niebieski */
  }`, `
  /* Wynikowy margines górny nie zmieni się */
  .rodzic {
    margin: 0;
    background: #afa; /* zielony */
  }
  .dziecko {
    margin: 30px;
    background: #aaf; /* niebieski */
  }`, `
  /* Wynikowy margines górny będzie równy 0 */
  .rodzic {
    margin: -30px;
    background: #afa; /* zielony */
  }
  .dziecko {
    margin: 30px;
    background: #aaf; /* niebieski */
  }`]}>
    <div className='rodzic'>
      <div className='dziecko' style={{ padding: 20 }}>Dziecko</div>
    </div>
  </Example>}

`
