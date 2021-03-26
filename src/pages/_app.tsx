/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { ThemeProvider } from "theme-ui"
import theme from "src/_theme"
import "bootstrap/dist/css/bootstrap.min.css"
import "antd/dist/antd.css"
import "../../style.scss"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { Layout } from "antd"
import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Sidebar from "src/components/Sidebar"
import CartDrawer from "src/components/Cart/Drawer"
import CartContextProvider from "src/components/Cart/context"
import BannerContextProvider from "src/components/Banners/context"
import ProductContextProvider from "src/components/Products/context"
import { useEffect } from "react"
import { Router } from "next/router"
import '../libs/fontawesome'

NProgress.configure({
  showSpinner: false,
  easing: "ease",
  speed: 300,
  trickleRate: 0.1,
  trickleSpeed: 600
})

const { Sider, Content } = Layout

function App({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = url => NProgress.start()
    const handleCompleteChange = url => NProgress.done()
    const handleChangeError = (err, url) => NProgress.done()

    Router.events.on("routeChangeStart", handleRouteChange)
    Router.events.on("routeChangeComplete", handleCompleteChange)
    Router.events.on("routeChangeError", handleChangeError)

    return () => {
      Router.events.off("routeChangeStart", handleRouteChange)
      Router.events.off("routeChangeComplete", handleCompleteChange)
      Router.events.off("routeChangeError", handleChangeError)
    }
  }, [])
  return (
    <BannerContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <ThemeProvider theme={theme}>
            <div className="col-12 pt-2" sx={{ bg: "muted", height: "40px", textAlign: "center"}}>
              <div className="container">
                All orders received before 14:00, will be delivered in 2 days. Deliveries from 10H00 to 18H00, daily. NO DELIEVERIES ON SUNDAYS AND PUBLIC HOLIDAYS
              </div>
            </div>
            <div
              className="col-12 sticky-top"
              sx={{
                maxHeight: "150px",
                zIndex: "10000",
                bg: "rgba(255, 255, 255, 0.95)",
                boxShadow: "0 4px 6px -6px #c7c7c7"
              }}
            >
              <Header />
            </div>
            <Layout className="container" sx={{ paddingTop: "40px" }}>
              <Layout>
                <Sider className="sticky-top">
                  <Sidebar />
                </Sider>
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
  )
}

export default App
