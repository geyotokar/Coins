import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  svg {
    position: relative;
    top: 3px;
  }
`