export enum ThemeEnum {
    light = 'light',
    dark = 'dark'
}

export type ThemeType = {
    font: string
    bg: string
}

export interface ThemeI {
    colors: {
        primary: string
        secondary: string
        success: string
        danger: string

        bg: string
        font: string
    }
    media: {
        lg: string
        md: string
        sm: string
        xs: string
    }
}