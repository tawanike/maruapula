import { Button } from 'antd';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from 'src/components/Cart/context';
import CartProduct from 'src/components/Cart/Product';


export default function Cart() {
    const router = useRouter();
    const cartContext = useContext(CartContext);
  return (
    <div>
        <div className="row">
            <div className="col">
                <h5>Your Cart Items</h5>
            </div>
        </div>
      
        <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col">Price</div>
            <div className="col">Qty</div>
            <div className="col">Subtotal</div>
        </div>
        {
            cartContext.state.products.map(product => {
                return <CartProduct key={product.id} product={product} />
            })
        }
        <div className="row">
            <div className="col">
            <Button type="primary" block onClick={() => {
                router.push('/cart/checkout');
                }
            }>Checkout</Button>
            </div>
        </div>
    </div>
  )
}
