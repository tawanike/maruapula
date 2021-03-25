import Image from 'next/image';
import { useRouter } from 'next/router';

import { useContext } from 'react';
import { CartContext } from 'src/components/Cart/context';
import { Button, Drawer } from 'antd';
import { toggleCartDrawer } from 'src/components/Cart/actions';

export default function CartDrawer(props) {
  const router = useRouter();
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
        width={360}
      >
        { cartContext.state.products && cartContext.state.products.map(product =>{
          return <div key={product.id} className="CartItem row">
            <div className="col-md-4">
            <Image
              src={`https://res.cloudinary.com/mmogomedia/image/upload/v1616594498/maruapula/products/${product.id}.jpg`}
              alt={product.title}
              width={240}
              height={240}
            />
            </div>
            <div className="col-md-6">
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
            <div className="col-md-1">
              <Button>X</Button>
            </div>
            
            </div>
        })}
        <div>
          <p>Subtotal: </p>
          <p>Delivery Fee: </p>
          <p>Total: </p>
        </div>
        <div>
          <Button type="primary" block onClick={() => router.push('/cart/checkout')}>Checkout</Button>
        </div>
      </Drawer>
  )
}
