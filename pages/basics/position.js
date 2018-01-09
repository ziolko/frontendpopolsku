import React from 'react'
import Link from 'next/link'

import chapter from '../../utils/chapter'
import Example from '../../components/Example'
import Box from '../../components/Box'

export default () => chapter`
### Pozycjonowanie elementów

Właściwość ''position'' definiuje jakiego algorytmu użyje przeglądarka
do ustalenia pozycji danego elementu na ekranie. 

##### position: static
Ustawienie ''position: static'' powoduje, że dany element wyświetlany jest tuż za poprzednim (czyli zgodnie z zasadami
${<Link href='/basics/normal-flow'><a>normal flow</a></Link>}). Jest to wartość domyślna - jeśli nie ustawisz 
''position'' to jego wartość będzie właśnie ''static''.

##### position: relative
''position: relative'' zachowuje się podobnie jak ''position: static'', ale pozwala 
dodatkowo przesunąć element w osi pionowej i poziomej przy pomocy właściwości ''left'', 
''right'', ''top'' i ''bottom''. Przesunięty element nie będzie 'wypychał' innych elementów, 
ale zostanie wyświetlony 'ponad' nimi (przykryje je).

${<Example options={[`
  .drugi { 
    position: static; 
  }`, `
  .drugi { 
    /* static i relative zachowują się w tym
    * przypadku tak samo, bo nie ustawiłem
    * żadnego przesunięcia */
    position: relative; 
  }`, `
  .drugi {
    position: relative;
    left: -50px;
  }`]}>
  <Box className='pierwszy' color='red'>Pierwszy</Box>
  <Box className='drugi' size={70} color='blue'>Drugi</Box>
  <Box className='trzeci' color='red'>Trzeci</Box>
</Example>}

##### position: absolute
  
''position: absolute'' powoduje, że element wypada z ${<Link href='/basics/normal-flow'><a>normal flow</a></Link>},
czyli kolejne elementy na stronie zachowują się tak, jakby go w ogóle nie było.
Jeśli nie ustawimy żadnej wartości ''top'', ''left'', 
''bottom'' ani ''right'' to element nie zmieni swojego dotychczasowego położenia. Jeśli zaś ustawimy którąś
z tych wartości, to przesunie ona element do brzegów najbliższego 
${<Link href='/basics/containing-block'><a>bloku zawierającego</a></Link>}.

${<Example options={[`
  .drugi {
    position: static;
  }`, `
  .drugi { 
    /* 'Trzeci' kwadrat wskoczy na miejsce 
      * 'drugiego', który ma ustawione 
      * 'position: absolute' */
    position: absolute; 
  }`, `
  .drugi { 
    position: absolute; 
    right: 10px;
    bottom: 10px;
  }`]}>
  <Box className='pierwszy' color='red'>Pierwszy</Box>
  <Box className='drugi' size={70} color='blue'>Drugi</Box>
  <Box className='trzeci' color='red'>Trzeci</Box>
</Example>}

##### position: fixed

''position: fixed'' działa podobnie jak ''position: absolute'' ale powoduje, że element pozostaje
w tym samym miejscu po przewinięciu strony. 

${<Example style={{ height: 250, overflowY: 'scroll' }} options={[`
  .pierwszy {
    position: absolute;
    bottom: 0;
  }
  .drugi {
    position: fixed;
    bottom: 0;
  }`]}>
  <p>
    Przewiń zawartość tego elementu, żeby zobaczyć różnicę między
    <code>position: absolute</code> a <code>position: fixed</code>.
  </p>
  <Box className='pierwszy' color='red'>Pierwszy</Box>
  <Box className='drugi' size={70} color='blue'>Drugi</Box>
  <span style={{ display: 'inline-block', marginBottom: 500 }} />
</Example>}

##### position: sticky
 
''position: sticky'' (nie wspierane w ${<a href='https://caniuse.com/#search=sticky'>części przeglądarek</a>}, 
więc przykład poniżej może działać u Ciebie nieprawidłowo) powoduje, że element zachowuje się, 
jakby miał ustawione ''position: relative'', ale po przewinięciu najbliższego elementu ze scrollbarem
'przykleja się' do jego krawędzi w odległości zdefiniowanej przez ''left'', ''right'', ''top'' i ''bottom''.

W przykładzie poniżej ustawienie ''top: 10px'' oznacza, że element będzie pozycjonowany
bez żadnego przesunięnia tak długo, jak będzie znajdował się dalej niż ''10px'' od górnej krawędzi 
najbliższego elementu ze *scrollbarem*.
Po przewinięciu *scrollbara*, element ten 'przyklei się' ''10px'' od górnej krawędzi.

${<Example options={[`
  .drugi { 
    position: sticky; 
    top: 10px;
  }`]} style={{ height: 200, overflowY: 'auto' }}>
  <p>Przewiń zawartość tego elementu, żeby zobaczyć jak działa <code>position: sticky</code>.</p>
  <Box className='pierwszy' color='red'>Pierwszy</Box>
  <Box className='drugi' size={70} color='blue'>Drugi</Box>
  <Box className='trzeci' color='red'>Trzeci</Box>
  <span style={{ display: 'inline-block', marginBottom: 500 }} />
</Example>}
`
