import React from 'react'
import Head from 'next/head'
import MediaQuery from 'react-responsive';
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import hash from 'object-hash'

import scopeCss from 'scope-css'
import { stripIndent } from 'common-tags'

import CodeHighlighter from './CodeHighlighter'
const CodeEditor = dynamic(import('./CodeEditor'), { ssr: false, loading: CodeHighlighter })

const ExampleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #f4f5f6;
  padding: 2px;
  margin-bottom: 20px;
`

const OptionsWrapper = styled.div`
  overflow: hidden;
  flex: 1 1 400px;  
  margin: 5px;
`

const OutputWrapper = styled.div`
  transform: translateX(0);
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

  pre {
    margin: 0;
    padding: 0 !important;
    border: 0 !important;
  }

  pre > code {
    margin: 0 !important;
    padding: 0 !important;
    background: transparent;
    font-size: 14px;
  }
`

const Output = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background: white;
  position: relative;
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

    this.id = `example-${hash(this.props.options).substring(0, 10)}`
  }

  render () {
    const style = scopeCss(this.state.options[this.state.selectedOptionIndex], `#${this.id}`)

    return <ExampleWrapper>
      <OptionsWrapper>
        {this.state.options.map((option, index) =>
          <Option key={index} active={this.state.selectedOptionIndex === index} >
            <MediaQuery minWidth={800}>
              {
                isDesktop => isDesktop
                  ? <CodeEditor value={option} onChange={value => this.onValueChanged(index, value)} onFocus={() => this.onOptionFocused(index)} />
                  : <CodeHighlighter value={option} onFocus={() => this.onOptionFocused(index)} />
              }
            </MediaQuery>
          </Option>
        )}
      </OptionsWrapper>

      <OutputWrapper id={this.id}>
        <Output id={this.id} style={this.props.style}>{this.props.children}</Output>
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
