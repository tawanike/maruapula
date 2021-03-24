import { useContext } from 'react';
import { CartContext } from 'src/components/Cart/context';
import { Drawer } from 'antd';
import { toggleCartDrawer } from 'src/components/Cart/actions';

export default function CartDrawer(props) {
  const cartContext = useContext(CartContext);

  const onClose = () => {
    cartContext.dispatch(toggleCartDrawer(!cartContext.state.drawer.visible));
  }
  return (
    <Drawer
        title="Cart"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={cartContext.state.drawer.visible}
      >
        { cartContext.state.products && cartContext.state.products.map(product =>{
          return <p>{product.title}</p>
        })}
      </Drawer>
  )
}
