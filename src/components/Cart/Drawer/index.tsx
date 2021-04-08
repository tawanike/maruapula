/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { toFixed } from 'accounting-js'
import { useContext } from "react";
import { CartContext } from "src/components/Cart/context";
import { Drawer } from "antd";
import { toggleCartDrawer } from "src/components/Cart/actions";
import { removeFromCart } from "src/components/Cart/actions";
import { CloseCircleFilled } from "@ant-design/icons";

export default function CartDrawer(props) {
    const router = useRouter();
    const cartContext = useContext(CartContext);

    const onClose = () => {
        cartContext.dispatch(
            toggleCartDrawer(!cartContext.state.drawer.visible)
        );
    };

    const removeProductFromCart = (product: any) => {
        cartContext.dispatch(removeFromCart(product.id));
    };

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
                cartContext.state.products.map((product) => {
                    return (
                        <div
                            key={product.id}
                            className="CartItem row mb-4 pb-2"
                            sx={{ borderBottom: "1px solid #e2e2e2" }}
                        >
                            <div
                                className="col-5 col-md-4"
                                sx={{ display: "grid", placeItems: "center" }}
                            >
                                    <img
                                        src={`https://res.cloudinary.com/mmogomedia/image/upload/v1616594498/maruapula/products/${product.id}.jpg`}
                                        alt={product.title}
                                        onError={(e) => {
                                            (e.target as any).src =
                                                "./placeholder.png";
                                            (e.target as any).style.width = "40%";
                                            (e.target as any).style.height = "auto";
                                            (e.target as any).style.marginTop =
                                                "15px";
                                            (e.target as any).style.marginBottom =
                                                "15px";
                                        }}
                                        sx={{ width: "100%", height: "auto" }}
                                    />
                            </div>
                            <div className="col-5 col-md-6">
                                <p
                                    className="mb-2"
                                    sx={{ fontSize: "16px", fontWeight: "600" }}
                                >
                                    {product.title}
                                </p>
                                <p
                                    className="mb-2"
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        color: "muted",
                                    }}
                                >
                                    R{product.price}
                                </p>
                                <p className="mb-2" sx={{}}>
                                    Quantity: {product.quantity}
                                </p>
                            </div>
                            <div className="col-1 col-md-1">
                                <CloseCircleFilled
                                    onClick={() =>
                                        removeProductFromCart(product)
                                    }
                                    sx={{
                                        fontSize: "22px",
                                        color: "orange",
                                        "&:hover": {
                                            color: "muted",
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            <div className="row mb-3">
                <div className="col-8 fw-bolder">Subtotal</div>
                <div className="col-4 text-end fw-bolder">R{toFixed(cartContext.state.subtotal, 2)}</div>
            </div>
            <div className="row mb-3 text-right">
                <div className="col-8 fw-bolder">Delivery Fee</div>
                <div className="col-4 text-end fw-bolder">R{toFixed(cartContext.state.serviceFee)}</div>
            </div>
            <div className="row mb-3 text-right">
                <div className="col-8 fw-bolder">VAT </div>
                <div className="col-4 text-end fw-bolder">R{toFixed(0, 2)}</div>
            </div>
            <div className="row mb-3 text-right">
                <div className="col-8 fw-bolder">Total</div>
                <div className="col-4 text-end fw-bolder">R{toFixed(cartContext.state.subtotal + cartContext.state.serviceFee, 2)}</div>
            </div>
            <div className="row p-3">
                <div
                    sx={{ variant: "containers.button", bg: "orange" }}
                    className="col-12 py-2"
                    onClick={() => {
                        router.push("/cart/checkout");
                        onClose();
                    }}
                >
                    <p>Checkout</p>
                </div>
            </div>
        </Drawer>
    );
}
