import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';


function CawApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}


export default CawApp;
