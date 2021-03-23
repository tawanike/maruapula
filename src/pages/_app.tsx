import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui';
import theme from 'src/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Sidebar from 'src/components/Sidebar';
import CartDrawer from 'src/components/Cart/Drawer';
import CartContextProvider from 'src/components/Cart/context';

const { Sider, Content } = Layout;

function App({ Component, pageProps }) {
  return <CartContextProvider>
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <Layout>
          <Sider width={260}>
            <Sidebar />
          </Sider>
          
          <Content className="pt-3 p-5">
            <Component {...pageProps} />
            <CartDrawer />
          </Content>
        </Layout>

        <Footer />
      </Layout>
      </ThemeProvider>
    </CartContextProvider>
}

export default App;
