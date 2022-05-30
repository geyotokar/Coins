import {ThemeEnum, ThemeI} from '../types/styledTypes'
import {DefaultTheme} from 'styled-components'

//ThemeI - static theme
//DefaultTheme - dynamic theme

export const baseTheme: ThemeI = {
    colors: {
        primary: '#7986CB',
        secondary: '#2B2B2B',
        success: '#4CAF50',
        danger: '#F44446',

        bg: '#E5E4E8',
        font: '#19191B'
    },
    media: {
        lg: '(max-width: 1140px)',
        md: '(max-width: 960px)',
        sm: '(max-width: 720px)',
        xs: '(max-width: 540px)'
    }
}

export const lightTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.light,
    colors: {
        ...baseTheme.colors,
        bg: '#E5E4E8',
        font: '#19191B'
    }
}

export const darkTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.dark,
    colors: {
        ...baseTheme.colors,
        bg: '#19191B',
        font: '#E5E4E8'
    }
}