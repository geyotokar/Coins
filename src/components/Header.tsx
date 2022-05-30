import React from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {actions, AppStateType} from './REDUX'
import styled from 'styled-components'
import {Button, Link} from '../styles/components'
import {ThemeType} from '../types/styledTypes'
import {ConverterSVG, LogoSVG, PortfolioSVG, ThemeSVG} from './assets/SVG'

const Header: React.FC = () => {
    const theme = useSelector((state: AppStateType) => state.theme)
    let bg = theme.colors.bg
    let font = theme.colors.font
    const dispatch = useDispatch()
    const toggleTheme = () => {
        dispatch(actions.toggleTheme())
    }
    return <header>
        <SideBar bg={font} font={bg}>
            <SideBarItem><LogoSVG fill={bg}/></SideBarItem>

            <SideBarItem><Button font={bg} onClick={toggleTheme}><ThemeSVG fill={bg}/></Button></SideBarItem>
            <SideBarItem><Link font={bg}><NavLink to='/converter'><ConverterSVG fill={bg}/></NavLink></Link></SideBarItem>
            <SideBarItem><Link font={bg}><NavLink to='/portfolio'><PortfolioSVG fill={bg}/></NavLink></Link></SideBarItem>
        </SideBar>
    </header>
}

export default Header

const SideBar = styled.div<ThemeType>`
  position: absolute;
  margin: 3vh;
  height: 94vh;
  width: 4em;
  border-radius: 2em;
  color: ${props => props.font};
  background-color: ${props => props.bg};
`

const SideBarItem = styled.div`
  margin: 2em 1em 1em 1em;
  opacity: 0.8;
  &:hover, &:active {
    opacity: 1;
  }
`