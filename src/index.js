// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import theme from './styles/extendedtheme';
import App from './App';
document.title = 'Milon';
const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/svg+xml';
link.rel = 'icon';
link.href = '/favicon.svg'; // Reference the icon directly without '../public/'
document.getElementsByTagName('head')[0].appendChild(link);
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ChakraProvider>,
);
