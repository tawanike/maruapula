import { useContext } from 'react';
import { Button } from 'antd';
import { CartContext } from 'src/components/Cart/context';
import { toggleCartDrawer } from 'src/components/Cart/actions';

export default function CartButton() {
  const cartContext = useContext(CartContext);


  return (
    <div>
      <Button onClick={() => {
        cartContext.dispatch(toggleCartDrawer(!cartContext.state.drawer.visible));
      }}>Cart</Button>
    </div>
  )
}
