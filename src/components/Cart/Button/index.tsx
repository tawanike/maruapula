/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui"
import { useContext, useState } from "react"
import { Button, notification, Space } from "antd"
import { addToCart, changeQuantity } from 'src/components/Cart/actions';
import { CartContext } from "src/components/Cart/context"

export default function AddToCart(props) {
  const [quantity, setQuantity] = useState<number>(0);
  const cartContext = useContext(CartContext);

  const addProductToCart = () => {
    setQuantity(quantity + 1);
    cartContext.dispatch(addToCart({ product: props.product, quantity: quantity + 1 }));

    addTocartNotification('success');
  }

  const updateCart = (action) => {
    if (action === 'increase') {
      setQuantity(quantity+1);
      cartContext.dispatch(changeQuantity(props.product.id, quantity+1));
    }

    if (action === 'decrease') {
      setQuantity(quantity-1);
      cartContext.dispatch(changeQuantity(props.product.id, quantity-1));
    }

    cartUpdateNotification('success');
  }

  const addTocartNotification = type => {
    notification[type]({
      top: 150,
      message: 'Add to cart',
      description:
        'Product added to cart successfully.',
    });
  };

  const cartUpdateNotification = type => {
    notification[type]({
      top: 150,
      message: 'Update cart',
      description:
        'Cart updated successfully.',
    });
  };


  return (
    <div className="w-100" sx={{ display: "grid", placeItems: "center", marginBottom: "15px" }}>
      {quantity ? (
        <div sx={{ display: "grid", gridTemplateColumns: "30% 30% 30%" }}>
          <Button onClick={() => updateCart('decrease')}>-</Button>
          <p className="mx-3 mb-0" sx={{ display: "grid", placeItems: "center", fontWeight: "600", fontSize: "16px" }}>
            {quantity}
          </p>
          <Button onClick={() => updateCart('increase')}>+</Button>
        </div>
      ) : (
        <div className="p-2" sx={{ variant: "containers.button", bg: "muted" }} onClick={addProductToCart}>
          <p>Add To Cart</p>
        </div>
      )}
    </div>
  )
}
