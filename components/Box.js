import styled from 'styled-components'

export default styled.div`
  vertical-align: top;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: black;
  width: ${props => props.size || '100'}px;
  height: ${props => props.size || '100'}px;
  border: 1px solid;
  border-color: ${props => props.color};
  background: linear-gradient(0, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), ${props => props.color};
  margin: 5px;
  
  opacity: 0.5;
`
