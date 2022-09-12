import { createGlobalStyle } from 'styled-components'
import { fonts, sizes, theme } from './theme.js'

const GlobalStyles = createGlobalStyle`
    ${ theme }
    ${ fonts }
    ${ sizes }

    ::-webkit-scrollbar {
		width: 0px;
	}

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
	    -webkit-tap-highlight-color: transparent;
    }

    html,
    body{
      color: var(--primary-100);
      background-size: 40px 40px;
      font-size: var(--font-size-global);
      background-color: var(--background-color);
      font-family: 'Poppins';
      background-image: radial-gradient(var(--primary-200) 1px, transparent 0);
    }

    body {
	    overflow-y: hidden;
}
`
export default GlobalStyles
