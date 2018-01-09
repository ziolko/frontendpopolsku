import React from 'react'
import Link from 'next/link'
import Example from '../../components/Example'

import chapter from '../../utils/chapter'

export default () => chapter`
### Containing block

Znajomość bloku zawierającego, czyli **containing block** jest konieczna do określenia
wartości stylów związanych z layoutem strony:

- Jeśli określimy w procentach wartości ''width'', ''height'', ''padding'', ''margin'', 
  ''left'', ''right'', ''top'' lub ''bottom'', to ich wartość wyliczona będzie na podstawie 
  wysokości lub szerokości bloku zawierającego.
- Dla elementów z ''position: fixed'' oraz ''position: absolute'' wartości ''left'', ''right'',
  ''top'' i ''bottom'' oznaczają przesunięcie od krawędzi *padding box* elementu zawierającego.

Sposób ustalania bloku zawierającego zależy od wartości stylu ''position'' zgodnie z 
zasadami opisanymi poniżej.

##### Position: static, relative lub sticky
Dla tych elementów blok zawierający jest zdefiniowany jako *content box* najbliższego przodka, 
który jest elementem blokowym (np: ''display: block'', ''display: inline-block'') lub tworzy
nowy *block formatting context* (np: ''overflow: hidden'', ''display: table'', ''display: flex'', 
''display: grid'').

Zwróć uwagę na to, że blok zawierający w tym przypadku to tylko *context box*, czyli padding, 
border i marginesy nie są jego częścią.

Na przykładzie poniżej element zielony zajmuje 100% dostępnej szerokości (wartość domyślna). 
Szerokość niebieskiego obszaru wyliczana jest jako 50% szerokości *content box* jego *containing block*,
czyli elementu zielonego. Podobnie szerokość czerwonego elementu liczona jest jako 50% *content box* 
niebieskiego.

${<Example options={[`
  .zielony {
    padding: 10px;
    background: #afa; /* zielony */
  }
  .niebieski {
    padding: 10px;
    display: inline-block;
    background: #aaf; /* niebieski */
    width: 50%; 
    /* 50% z content box zielonego  */
  }
  .czerwony {
    padding: 10px;
    background: #faa; /* czerwony */
    width: 50%; 
    /* 50% z content box niebieskiego */
  }`]}>
    <div className='zielony'>
      Zielony
      <div className='niebieski'>
        Niebieski
        <div className='czerwony'>Czerwony</div>
      </div>
    </div>
  </Example>}

##### Position: absolute

Dla elementów z ''position: absolute'' blok zawierający to *padding box*
najbliższego przodka, który ma ustawione ''position'' inne, niż ''static'' (czyli ''absolute'', ''fixed'', 
''relative'' albo ''sticky''), ''transform'' na wartość inną niż ''none'' lub ''perspective'' na wartość
inną niż ''none'' lub ''0''. 

Zwróć uwagę na to, że pojawiło się tutaj pojęcie *padding box*, a nie *content box* jak to było powyżej.

Na przykładzie poniżej widzisz, jak ustawienie na rodzicu styli ''position: relative'' lub ''transform'' 
wpływa na pozycję potomka z ''position: absolute''

${<Example style={{ height: 200 }} options={[`
  .rodzic {
  }
  .dziecko {
    position: absolute; 
    right: 0;
    bottom: 0;
  }`, `
  .rodzic {
    position: relative;
  }
  .dziecko {
    position: absolute;
    right: 0;
    bottom: 0;
  }`, `
  .rodzic {
    transform: translateX(0);
  }
  .dziecko {
    position: absolute;
    right: 0;
    bottom: 0;
  }`]}>
    <div className='rodzic' style={{ padding: 10, height: 100, background: '#afa' }}>
      Rodzic
      <div className='dziecko' style={{ padding: 10, background: '#aaf' }}>Dziecko</div>
    </div>
  </Example>}

##### Position: fixed

Dla elementów z ''position: fixed'' *containing block* to okno przeglądarki, lub
*padding box* najbliższego przodka, który ma ustawione ''transform'' na wartość inną niż ''none'' 
lub ''perspective'' na wartość inną niż ''none'' lub ''0''. 

`
