import React from 'react'
import '../../styles/style.css'
import {PieChart} from './Pie'
import {Aside, Content, Section} from '../../styles/components'
import styled from "styled-components";


const Portfolio: React.FC = React.memo(() => {
    return <Content>
        <Section>
            <h1>Wallet</h1>
            <div>Total balance</div>
            <CoinItem>BTC Bitcoin</CoinItem>
            <CoinItem>ETH Ether</CoinItem>
            <CoinItem>USD US Dollar</CoinItem>
        </Section>
        <Aside><PieChart/></Aside>
    </Content>
})

export default Portfolio

const CoinItem = styled.div`
  position: relative;
  margin-top: 0.3em;
  padding: 0.5em;
  height: 4em;
  width: 22em;
  background-color: whitesmoke;
`