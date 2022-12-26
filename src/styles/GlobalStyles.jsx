import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
${reset}

* {
	box-sizing: border-box;
}
    
body {
	font-family: apple-system, 'Open Sans', sans-serif;
	background-color:  ${(props) => props.theme.colors.background};
	color:  ${(props) => props.theme.colors.textcolor};
}

ol, ul {
	list-style: none;
}

a{
	text-decoration: none;
	color: inherit;

	&:hover {
    	text-decoration: none;
		color: none;
	}
    
	&:active {
    	text-decoration: none;
		color: black;
	}
        
    &:visited {
    	text-decoration: none;
		color: black;
	}
        
	&:link {
    	text-decoration: none;
		color: black; 
	}
}
`;

export default GlobalStyles;
