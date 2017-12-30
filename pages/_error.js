import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.main`
  text-align: center;
  margin-top: 50px;  
  padding: 0 20px;
`

export default () =>
  <Wrapper>
    <h3>Strona, której szukasz nie istnieje lub została usunięta</h3>
    <p>
      Być może znajdziesz coś interesującego na tych stronach, które ciągle
      istnieją :)
    </p>
    <p>
      Proszę <a href='mailto:mateusz.mzielinski@gmail.com'>daj mi znać</a> jeśli
      trafiłeś tu z nieprawidłowego linka z mojej strony.
    </p>
    <Link href='/'><a className='button'>Wróć do strony głównej</a></Link>
  </Wrapper>
