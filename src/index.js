import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import {ApolloProvider} from '@apollo/react-hooks'
import theme from './theme'
import client from './graphql/client'
//css baseline не чоень работает почему то темная тема на всех идет


ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root')
);
