// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Plus Jakarta Sans, sans-serif',
    heading: 'Plus Jakarta Sans, sans-serif',
  },
  styles: {
    global: (props) => ({
      html: {
        height: '100%',
      },
      body: {
        bg: '#FFFFFF',
        color: '#000000',
      },
    }),
  },
});

export default theme;
