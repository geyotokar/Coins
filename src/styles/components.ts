import styled from 'styled-components'

export const Content = styled.div`
  position: absolute;  
  top: 3em;
  width: 100%;
`

export const Section = styled.div`
  position: absolute; 
  left: 7em;
  text-align: left;
`

export const Aside = styled.div`
  position: absolute;  
  left: 40%;
`

export const Button = styled.button<{ font: string }>`
  border: none;
  color: ${props => props.font};
  background-color: inherit;
`

export const Link = styled.a<{ font: string }>`
  color: ${props => props.font};
  text-decoration: none;
`

export const Path = styled.path<{ fill: string }>`
    color: ${props => props.fill}
`

export const Icon = styled.img<{ src: string }>`
  width: 30px;
  height: 30px;
`

export const IconFont = styled.img<{ src: string }>`
  width: 15px;
  height: 15px;
`