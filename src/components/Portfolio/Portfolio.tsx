import React from 'react'
import '../../styles/style.css'
import {PieChart} from './Pie'
import {Aside, Content, Section} from '../../styles/components'
import styled from 'styled-components'


const Portfolio: React.FC = React.memo(() => {
    return <Content>
        <Section>
            <h1>Wallet</h1>
            <div>Total balance</div>
            <CoinItem color1='#BCD9FF' color2='#A1FFB3'>BTC Bitcoin</CoinItem>
            <CoinItem color1='#CCFBFF' color2='#FFCACA'>ETH Ether</CoinItem>
            <CoinItem color1='#B2FDE8' color2='#FCF9D9'>USD US Dollar</CoinItem>
        </Section>
        <Aside><PieChart/></Aside>
    </Content>
})

export default Portfolio

const CoinItem = styled.div<CoinItemType>`
  position: relative;
  margin-top: 0.3em;
  padding: 0.5em;
  height: 4em;
  width: 22em;
  border-radius: 1em;
  background: linear-gradient(${props => props.color1}, ${props => props.color2});
  box-shadow: inset 5px 5px 20px #FFFFFF, inset -5px -5px 20px #FFFFFF;
`

type CoinItemType = {
    color1: string
    color2: string
}