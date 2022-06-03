import styled, {css} from 'styled-components'
import {ThemeType} from '../types/styledTypes'

export const container = css`
  position: relative;
  margin-top: 0.3em;
  padding: 0.5em 1em;
  width: 20em;
  border-radius: 1em;
`

export const paper = css`
  border-radius: 1em;
  background-color: #FFFFFFEE;  
`

export const Container = styled.div<ThemeType>`
  ${container};
  padding-top: 2em;
  height: 5em;
  color: ${props => props.font};
  background-color: ${props => props.bg};
`
export const SecondaryText = styled.p`
  opacity: 0.7;
  margin-bottom: 0.3em;
`

export const Content = styled.div`
  position: absolute;  
  top: 3em;
  width: 100%;
  ${paper}
`

export const Section = styled.div`
  position: absolute; 
  left: 7em;
  text-align: left;
`

export const Aside = styled.div`
  position: absolute;
  left: 38%;
  width: 40%;
`
export const ChartContainer = styled.div`
  position: relative;
  margin-top: 2.6em;
  padding: 30px 20px;
  width: 20em;
  height: 23.4em;
  box-sizing: border-box;
  ${paper}
`

export const Button = styled.button`
  border: none;
  background-color: inherit;
`

export const Link = styled.a`
  text-decoration: none;
`

export const Icon = styled.img<{ src: string }>`
  display: inline;
  width: 30px;
  height: 30px;
`

export const IconFont = styled.img<{ src: string }>`
  display: inline;
  width: 15px;
  height: 15px;
`