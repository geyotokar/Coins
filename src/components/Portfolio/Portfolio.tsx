import React from 'react'
import '../../styles/style.css'
import {PieChart} from './Pie'
import {Aside, ChartContainer, Container, container, Content, SecondaryText, Section} from '../../styles/components'
import styled from 'styled-components'
import {SVG} from '../assets/SVG'
import {useSelector} from 'react-redux'
import {AppStateType} from '../REDUX'
import {SmallPie} from './SmallPie'

const Portfolio: React.FC = React.memo(() => {
    const theme = useSelector((state: AppStateType) => state.theme)
    let bg = theme.colors.bg
    let font = theme.colors.font
    return <Content>
        <Section>
            <h1>Wallet</h1>
            <Container bg={font} font={bg}>
                <h5><SecondaryText>Total balance</SecondaryText></h5>
                <h2><SVG id='usd' fill={bg}/> 9866660</h2>
            </Container>
            <CoinItem id='btc' name='BTC Bitcoin' color1='#A1DFB3' color2='#BCD9FF'/>
            <CoinItem id='eth' name='ETH Ethereum' color1='#DDCDCC' color2='#FCF9D9'/>
            <CoinItem id='usd' name='USD US Dollar' color1='#DCD9D9' color2='#A7E6BA'/>
        </Section>
        <Aside>
            <ChartContainer>
                <PieChart/>
            </ChartContainer>
        </Aside>
    </Content>
})

const CoinItem: React.FC<CoinItemType & CoinItemTypeS> = (props) => {
    return <CoinItemS color1={props.color1} color2={props.color2}>
        <SmallPie />
        <h4>{props.name}</h4>
        <h2><SVG id={props.id} fill='#FFFFFF'/> 9866660</h2>
    </CoinItemS>
}

export default Portfolio

const CoinItemS = styled.div<CoinItemTypeS>`
  ${container};
  height: 4em;
  color: #FFFFFF;
  background: linear-gradient(to right, ${props => props.color1}, ${props => props.color2});
`

type CoinItemTypeS = {
    color1: string
    color2: string
}
type CoinItemType = {
    name: string
    id: "logo" | "theme" | "portfolio" | "converter" | "btc" | "eth" | "usd"
}