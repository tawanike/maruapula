import Document, { Html, Head, Main, NextScript } from "next/document";
import { googleTagManager } from "src/components/scripts";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        const GTM_ID = 'GTM-TP66ZCL';
        if (typeof document !== "undefined") {
            Sentry.init({
                dsn:
                    "https://b6fdd410e3264d24b7d3eac56c2334f7@o398189.ingest.sentry.io/5556015",
                autoSessionTracking: true,
                integrations: [new Integrations.BrowserTracing()],
                tracesSampleRate: 0.2,
            });
        }
        return (
            <Html lang="en">
                <Head>
                    {/* Google Tag Manager */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','${GTM_ID}');`,
                        }}
                    />
                    {/* End Google Tag Manager */}
                    {/* Google Tag Manager (noscript) */}
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                        }}
                    />
                    {/* End Google Tag Manager (noscript) */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;