import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

import scopeCss from 'scope-css'
import { stripIndent } from 'common-tags'

const CodeEditor = dynamic(import('./CodeEditor'), { ssr: false })

const ExampleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #f4f5f6;
  padding: 10px;
  margin-bottom: 20px;
`

const OptionsWrapper = styled.div`
  overflow: hidden;
  flex: 1 1 400px;  
  margin: 5px;
`

const OutputWrapper = styled.div`
  overflow: hidden;
  flex: 1000 1 300px;
  margin: 5px;
`

const Option = styled.div`
  border-style: solid;
  border-width: 2px 2px 2px 4px;
  transition: border-color 0.3s;
  background: white;
  border-color: ${props => props.active ? '#55f' : '#aaa'};
  cursor:  ${props => props.active ? 'text' : 'pointer'};
  width: 100%;

  &:not(:first-child) {
    margin-top: 10px;
  }

  .ace_scroller {
    cursor: inherit;
  }

  .ace_hidden-cursors { 
    opacity:0 
  } 
`

const Output = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background: white;
  transform: translateX(0);
  padding: 10px;

  & * {
    transition: all 0.1s;
  }
`

let exampleId = 0
export default class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options.map(option => stripIndent([option])),
      selectedOptionIndex: 0
    }
    this.id = `example-${exampleId++}`
  }

  render () {
    const style = scopeCss(this.state.options[this.state.selectedOptionIndex], `#${this.id}`)

    return <ExampleWrapper>
      <OptionsWrapper>
        {this.state.options.map((option, index) =>
          <Option key={index} active={this.state.selectedOptionIndex === index} >
            <CodeEditor value={option} onChange={value => this.onValueChanged(index, value)} onFocus={() => this.onOptionFocused(index)} />
          </Option>
        )}
      </OptionsWrapper>

      <OutputWrapper id={this.id}>
        <Output id={this.id}>{this.props.children}</Output>
      </OutputWrapper>

      <Head>
        <style children={style} />
      </Head>
    </ExampleWrapper >
  }

  onOptionFocused (index) {
    this.setState({ selectedOptionIndex: index })
  }

  onValueChanged (index, value) {
    this.setState({ options: [...this.state.options.slice(0, index), value, ...this.state.options.slice(index + 1)] })
  }
}
