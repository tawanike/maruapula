import Image from 'next/image';
import { useContext } from 'react';
import { useRouter } from 'next/router';

import { Button, Drawer } from 'antd';

import { CartContext } from 'src/components/Cart/context';
import { removeFromCart } from 'src/components/Cart/actions';


export default function CartProduct(props) {
  const router = useRouter();
  const cartContext = useContext(CartContext);

  const removeProductFromCart = (product: any) => {
    cartContext.dispatch(removeFromCart(product.id));
  }

  return (
    <div className="row">
      <div className="col">
        <Image
          src={`https://res.cloudinary.com/maruapula/image/upload/v1618326830/products/${props.product.id}.jpg`}
          alt={props.product.title}
          width={120}
          height={120}
        />
      </div>
      <div className="col">{props.product.title}</div>
      <div className="col">R{props.product.price}</div>
      <div className="col">{props.product.quantity}</div>
      <div className="col">{props.product.quantity * props.product.price}</div>
      
      { router.pathname !== '/cart/checkout' && <div className="col-md-1">
        <Button onClick={() => removeProductFromCart(props.product)}>X</Button>
      </div>}
  </div>
  )
}
