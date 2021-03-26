import { useContext } from 'react';
import { Button, Badge } from 'antd';
import { CartContext } from 'src/components/Cart/context';
import { toggleCartDrawer } from 'src/components/Cart/actions';

export default function CartButton() {
  const cartContext = useContext(CartContext);


  return (
    <div>
      <Badge count={cartContext.state.products && cartContext.state.products.length} showZero>
        <Button onClick={() => {
          cartContext.dispatch(toggleCartDrawer(!cartContext.state.drawer.visible));
        }}>Cart</Button>
      </Badge>
    </div>
  )
}
