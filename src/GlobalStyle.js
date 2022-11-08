import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
*,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 10px;
}

body{
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    background-color: ${(props) => props.theme.colors.ten};
    color: ${(props) => props.theme.colors.eleven};
}

`;
