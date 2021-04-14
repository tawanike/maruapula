/** @jsxRuntime classic */
/** @jsx jsx */
import Head from 'next/head';
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import theme from "src/_theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../../style.scss";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Layout } from "antd";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import CartDrawer from "src/components/Cart/Drawer";
import CartContextProvider from "src/components/Cart/context";
import BannerContextProvider from "src/components/Banners/context";
import ProductContextProvider from "src/components/Products/context";
import { useEffect } from "react";
import { Router } from "next/router";
import "../libs/fontawesome";
import { GTMPageView } from 'src/components/utils/gtm';

NProgress.configure({
    showSpinner: false,
    easing: "ease",
    speed: 300,
    trickleRate: 0.1,
    trickleSpeed: 600,
});

const { Sider, Content } = Layout;

function App({ Component, pageProps }) {
    useEffect(() => {
        const handleRouteChange = (url) => NProgress.start();
        const handleCompleteChange = (url) => NProgress.done();
        const handleChangeError = (err, url) => NProgress.done();
        const handleRouteChanges = (url: string) => GTMPageView(url);

        Router.events.on("routeChangeStart", handleRouteChange);
        Router.events.on("routeChangeComplete", handleCompleteChange);
        Router.events.on("routeChangeError", handleChangeError);
        Router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            Router.events.off("routeChangeStart", handleRouteChange);
            Router.events.off("routeChangeComplete", handleCompleteChange);
            Router.events.off("routeChangeError", handleChangeError);
            Router.events.off('routeChangeComplete', handleRouteChanges);
        };
    }, []);
    return (
        <BannerContextProvider>
            <ProductContextProvider>
                <CartContextProvider>
                    <ThemeProvider theme={theme}>
                    <Head>
                        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"/>
                        <meta name="description" content="Fresh, Fruits and vegetables, Home food, Office, Online Deliveries, Catering, food lovers market, 
                        Gauteng, Ferreira Fresh, Raw Nutrition" />
                        <meta name="description" content="" />
                        <meta name="description" content="" />
                        <meta name="description" content="" />
                        <title>Maruapula Store | Fresh Produce | Serve Them Fresh, Daily</title>
                    </Head>
                        <div
                            className="col-12 sticky-top"
                            sx={{
                                maxHeight: "150px",
                                zIndex: "9997",
                                bg: "rgba(255, 255, 255, 0.95)",
                                boxShadow: "0 4px 6px -6px #c7c7c7",
                            }}
                        >
                            <Header />
                        </div>
                        <Layout
                            className="container"
                            sx={{ paddingTop: "50px" }}
                        >
                            <Layout>
                                <Content>
                                    <Component {...pageProps} />
                                    <CartDrawer />
                                </Content>
                            </Layout>
                            <Footer />
                        </Layout>
                    </ThemeProvider>
                </CartContextProvider>
            </ProductContextProvider>
        </BannerContextProvider>
    );
}

export default App;
