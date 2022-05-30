import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Provider, useSelector} from 'react-redux'
import store, {AppStateType} from './components/REDUX'
import Header from './components/Header'
import Portfolio from './components/Portfolio/Portfolio'
import Converter from './components/Converter/Converter'
import GlobalStyles from './styles/global'
import styled, {ThemeProvider} from 'styled-components'
import {ThemeType} from "./types/styledTypes";

const App: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={store.getState().theme}>
                <AppWrapper/>
                <GlobalStyles/>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
}

export default App

const AppWrapper: React.FC = () => {
    const theme = useSelector((state: AppStateType) => state.theme)
    return <Wrapper font={theme.colors.font} bg={theme.colors.bg}>
        <Header/>
        <Routes>
            <Route path='/' element={<Portfolio/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/converter/*' element={<Converter/>}/>
        </Routes>
    </Wrapper>
}

const Wrapper = styled.div<ThemeType>`
  height: 100vh;
  color: ${props => props.font};
  background-color: ${props => props.bg};
`