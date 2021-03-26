import Link from 'next/link';
import { Layout } from 'antd';

import CartDrawerButton from 'src/components/Cart/Drawer/Button';
const { Header } = Layout;

export default function HeaderComponent() {
  return (
    <Header>
      <div className="row">
        <div className="col-8">
          <h1>
          <Link href="/">
          <a>Maruapula</a>
        </Link></h1>
        </div>
        <div className="col-4">
          <CartDrawerButton />
        </div>
      </div>
    </Header>
  )
}
