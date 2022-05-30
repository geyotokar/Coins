import 'styled-components'
import {ThemeEnum, ThemeI} from './types/styledTypes'

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeI {
        type: ThemeEnum
    }
}