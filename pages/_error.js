import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.main`
  text-align: center;
  margin-top: 150px;  
`

export default () =>
  <Wrapper>
    <h3>Strona, której szukasz nie istnieje lub została usunięta</h3>
    <p>
      Być może znajdziesz coś interesującego na tych stronach, które ciągle
      istnieją :)
    </p>
    <Link href='/'><a class='button'>Wróć do strony głównej</a></Link>
  </Wrapper>
