import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                color: 'white',
            },
        },
    },
});
function CawApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}


export default CawApp;
