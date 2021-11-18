import Document, {Html, Head, Main, NextScript} from "next/document";
import React from 'react';
import {ServerStyleSheets} from "@material-ui/styles"
import {MuiTheme} from "../src/MuiTheme"

type Props = {
    pageProps: any
}

class MyDocument extends Document<Props> {

    render() {
        return (
            <Html style={{fontSize: '62.5%'}}>
                <Head>
                    <meta name="theme-color" content={MuiTheme.palette.primary.main}/>
                    <meta name="keywords" content="space, next, door"/>
                    <meta name="description" content="space next door"/>
                    <meta charSet="utf-8"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
                          rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};

export default MyDocument

