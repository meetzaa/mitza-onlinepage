import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, {Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
    render() {
        return(
            <Html lang="en">
                <Head />
                <body>
                    <ColorModeScript intialColorMode={theme.config.initialColorMode} />
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}