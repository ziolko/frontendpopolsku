import React from 'react'
import styled from 'styled-components'

const mobileBreak = 600

export const Mobile = styled.div`
  @media (min-width: ${mobileBreak + 1}px) { 
    display: none
  }
`

export const Info = styled.div`
  border: 1px solid #c3f3c3;
  background:  #f0ffe5;
  padding: 10px;
  margin: 2.5rem 0;
`

export const Warn = styled.div`
  border: 1px solid #f0f0a9;
  background:  #ffffe9;
  padding: 10px;
  margin: 2.5rem 0;
`
