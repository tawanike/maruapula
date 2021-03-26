/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import Image from "next/image"
import { useRouter } from "next/router"

import { useContext } from "react"
import { CartContext } from "src/components/Cart/context"
import { Button, Drawer } from "antd"
import { toggleCartDrawer } from "src/components/Cart/actions"
import { removeFromCart } from 'src/components/Cart/actions';

export default function CartDrawer(props) {
  const router = useRouter()
  const cartContext = useContext(CartContext)

  const onClose = () => {
    cartContext.dispatch(toggleCartDrawer(!cartContext.state.drawer.visible))
  }

  const removeProductFromCart = (product: any) => {
    cartContext.dispatch(removeFromCart(product.id));
  }

  return (
    <Drawer
      sx={{ zIndex: "9999" }}
      title="My Shopping Cart"
      placement="right"
      closable={true}
      onClose={onClose}
      visible={cartContext.state.drawer.visible}
      width={360}
    >
      {cartContext.state.products &&
        cartContext.state.products.map(product => {
          return (
            <div key={product.id} className="CartItem row mb-4 pb-2" sx={{ borderBottom: "1px solid #e2e2e2" }}>
              <div className="col-md-4">
                <Image
                  src={`https://res.cloudinary.com/mmogomedia/image/upload/v1616594498/maruapula/products/${product.id}.jpg`}
                  alt={product.title}
                  width={240}
                  height={240}
                />
              </div>
              <div className="col-md-6">
                <p className="mb-2" sx={{ fontSize: "16px", fontWeight: "600" }}>
                  {product.title}
                </p>
                <p className="mb-2" sx={{ fontSize: "16px", fontWeight: "500", color: "muted" }}>
                  R{product.price}
                </p>
                <p className="mb-2" sx={{}}>
                  Quantity: {product.quantity}
                </p>
              </div>
              <div className="col-md-1">
                <Button onClick={() => removeProductFromCart(product)}>X</Button>
              </div>
            </div>
          )
        })}
        <div>
          <p>Subtotal: R{cartContext.state.subtotal}</p>
          <p>Delivery Fee: R50.00</p>
          <p>Total: R{cartContext.state.subtotal + cartContext.state.serviceFee}</p>
        </div>
        <div className="row">
          <div
          sx={{ variant: "containers.button", bg: "orange" }}
          className="col-12 py-2"
          onClick={() => {
            router.push("/cart/checkout")
            onClose()
          }}
        >
          <p>Checkout</p>
        </div>
      </div>
    </Drawer>
  )
}
