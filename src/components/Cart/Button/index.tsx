import { useContext, useState } from "react";
import { Button } from 'antd';
import { addToCart } from 'src/components/Cart/actions';
import { CartContext } from 'src/components/Cart/context';

export default function AddToCart(props) {
  const [quantity, setQuantity] = useState<number>(1);
  const cartContext = useContext(CartContext);

  const addProductToCart = () => {
    console.log(props.product, quantity)
    cartContext.dispatch(addToCart({product: props.product, quantity}));
  }

  const removeProductFromCart = (product: any) => {}

  const updateProduct = (product: any) => {}

  return (
    <div>
      <Button onClick={ addProductToCart }>Add To Cart</Button>
      <div>
        <Button onClick={() => setQuantity(quantity-1)}>-</Button>
        {quantity}
        <Button onClick={() => setQuantity(quantity+1)}>+</Button>
      </div>
    </div>
  )
}
