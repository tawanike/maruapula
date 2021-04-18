/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useContext, useState, useEffect } from "react";
import { Form, Input, Button, Modal } from "antd";
import { useRouter } from "next/router";
import { CartContext } from "src/components/Cart/context";
import { emptyCart } from "src/components/Cart/actions";
import { toFixed } from "accounting-js";
import { ShoppingCartOutlined } from "@ant-design/icons";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};

export default function Checkout() {
    const router = useRouter();
    const cartContext = useContext(CartContext);
    const [order_reference, setOrder_reference] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const [cartTotal, seCartTotal] = useState<number>(0);
    const [userDetails, setUserDetails] = useState<any>();
    const [placeOrder, setPlaceOrder] = useState<boolean>(false);
    const [showPlaceOrder, setShowPlaceOrder] = useState<boolean>(false);
    const [showAfterPlaceOrder, setShowAfterPlaceOrder] = useState<boolean>(false);
    const { TextArea } = Input;

    useEffect(() => {
        let total = cartContext.state.products.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
        seCartTotal(total);
        setPlaceOrder(false);
        setLoading(false);

        setOrder_reference(Math.floor(Math.random() * (100000 - 999999 + 1)));
    }, []);

    const validatePhoneNumber = (value) => {
        const trimmed = value.replace(/\s/g, '');
        const regex = /^27(6|7|8){1}[0-9]{1}[0-9]{7}$/;
        if (regex.test(trimmed) === true) {
            return true;
        } else {
            return false;
        }
            
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo.errorFields);
        setHasError(errorInfo.errorFields > 0);
    };

    const submitOrder = (user) => {
        setUserDetails(user);
        setPlaceOrder(true);
        setShowPlaceOrder(true);
    }

    const onFinish = async (values: any) => {
        // Add error handling here
        setLoading(true);
        
        await fetch("/api/cart/checkout", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                total: cartTotal,
                user: userDetails.user,
                products: cartContext.state.products,
                order_reference: order_reference
            }),
        });
        setLoading(false);

    };

    return (
        <div>
            <Form
                name="nest-messages"
                onFinish={submitOrder}
                onFinishFailed={onFinishFailed}
                validateMessages={validateMessages}
                layout="vertical"
            >
                <div className="row gx-5">
                    <div className="col-12 col-md-7">
                        <h2>Billing & Delivery Details</h2>
                        <div className="row">
                            <div className="col-12">
                                <Form.Item
                                    name={["user", "name"]}
                                    label="Name"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Item
                                    name={["user", "email"]}
                                    label="Email"
                                    rules={[{ type: "email", required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Item
                                    name={["user", "mobile"]}
                                    label="Mobile"
                                    rules={[{ required: true }, (_) => ({
                                        validator(_, value) {
                                          if (validatePhoneNumber(value)) {
                                            return Promise.resolve();
                                          }
                                          return Promise.reject(new Error('Mobile should be in the format “27123456789” with 11 digits, no special characters, or spaces.'));
                                        },
                                      })]}
                                    extra="Mobile should be in the format “27123456789” with 11 digits, no special characters, or spaces."
                                    hasFeedback

                                >
                                    <Input />
                                </Form.Item>
                            </div>

                            <div className="col-12 col-md-12">
                                <Form.Item
                                    name={["user", "address_one"]}
                                    label="Delivery Address Line 1"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>

                            <div className="col-12 col-md-12">
                                <Form.Item
                                    name={["user", "address_two"]}
                                    label="Delivery Address Line 2"
                                >
                                    <Input />
                                </Form.Item>
                            </div>

                            <div className="col-12 col-md-12">
                                <Form.Item
                                    name={["user", "address_three"]}
                                    label="Delivery Address Line 3"
                                >
                                    <Input />
                                </Form.Item>
                            </div>

                            <div className="col-12 col-md-4">
                                <Form.Item
                                    name={["user", "city"]}
                                    label="City"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>

                            <div className="col-12 col-md-4">
                                <Form.Item
                                    name={["user", "province"]}
                                    label="Province"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>

                            <div className="col-12 col-md-4">
                                <Form.Item
                                    name={["user", "postcode"]}
                                    label="Postcode"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Item
                                    name={["user", "delivery_instructions"]}
                                    label="Additional Delivery Instructions"
                                >
                                    <TextArea
                                        sx={{ width: "100%", height: "300px" }}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 ">
                        <div className="row">
                            <div className="col">
                                <h2>Your order summary</h2>
                            </div>
                        </div>

                        <div className="CheckOut row p-5">
                            <div className="col">
                                <ul className="CheckOut__list">
                                    <li className="CheckOut__infor">
                                        <div className="row">
                                            <div className="col-md-8">
                                                Product
                                            </div>
                                            <div className="col-md-4 CheckOut__totals">
                                                Total
                                            </div>
                                        </div>
                                    </li>
                                    {cartContext.state.products.length ? (
                                        cartContext.state.products.map(
                                            (product) => {
                                                return (
                                                    <li
                                                        className="CheckOut__product my-3"
                                                        key={product.id}
                                                    >
                                                        <div className="row">
                                                            <div className="col-md-8">
                                                                {product.title}{" "}
                                                                x
                                                                {
                                                                    product.quantity
                                                                }
                                                            </div>
                                                            <div className="col-md-4 CheckOut__totals">
                                                                R
                                                                {toFixed(
                                                                    product.quantity *
                                                                        product.price,
                                                                    2
                                                                )}
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            }
                                        )
                                    ) : (
                                        <div className="row empty">
                                            <div
                                                className="col-12 mt-3"
                                                sx={{ variant: "center" }}
                                            >
                                                <ShoppingCartOutlined
                                                    sx={{
                                                        fontSize: "68px",
                                                        color: "gray",
                                                    }}
                                                />
                                            </div>
                                            <div
                                                className="col-12"
                                                sx={{ variant: "center" }}
                                            >
                                                <p
                                                    sx={{
                                                        color: "gray",
                                                    }}
                                                >
                                                    No Items in your cart
                                                </p>
                                            </div>
                                            <div
                                                className="col-12 mb-5"
                                                sx={{ variant: "center" }}
                                            >
                                                <Button
                                                    type="primary"
                                                    onClick={() =>
                                                        router.push("/shop")
                                                    }
                                                >
                                                    Shop now
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                    <li
                                        className="CheckOut__infor pt-3"
                                        sx={{ borderTop: "1px solid black" }}
                                    >
                                        <div className="row">
                                            <div className="col-md-8">
                                                Sub Total
                                            </div>
                                            <div className="col-md-4 CheckOut__totals">
                                                R{toFixed(cartTotal, 2)}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="CheckOut__infor">
                                        <div className="row">
                                            <div className="col-md-8">
                                                Delivery Fee
                                            </div>
                                            <div className="col-md-4 CheckOut__totals">
                                                {cartTotal ? "R50.00" : "R0.00"}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="CheckOut__infor">
                                        <div className="row">
                                            <div className="col-md-8">VAT</div>
                                            <div className="col-md-4 CheckOut__totals">
                                                R0.00
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="CheckOut__infor pt-3"
                                        sx={{ borderTop: "1px solid black" }}
                                    >
                                        <div className="row">
                                            <div className="col-md-8">
                                                Total
                                            </div>
                                            <div className="col-md-4 CheckOut__totals">
                                                {cartTotal ? (
                                                    <>
                                                        R
                                                        {toFixed(
                                                            cartTotal +
                                                                parseInt("50"),
                                                            2
                                                        )}
                                                    </>
                                                ) : (
                                                    "R0.00"
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <Form.Item className="mt-3 col-12">
                                <div
                                    className="col-12"
                                    sx={{
                                        display: "grid",
                                        placeItems: "center end",
                                    }}
                                >
                                    <Button htmlType="submit" type="primary">
                                        Place order
                                    </Button>
                                </div>
                            </Form.Item>
                        </div>
                    </div>
                </div>
            </Form>

            <Modal
                title="Confirm order"
                visible={showPlaceOrder}
                maskClosable={false}
                okText="Continue"
                onOk={() => {
                    setShowPlaceOrder(false);
                    setPlaceOrder(false);
                    setShowAfterPlaceOrder(true);
                    onFinish(userDetails);
                }}
                className="mt-5"
                onCancel={() => {
                    setShowPlaceOrder(false);
                }}
            >
                <div>
                    <p>Order confirmation reference #{order_reference}</p>
                    <ul>
                        <li>Monday to Saturday 08H00 to 17H00</li>
                        <li>Deliveries daily, from 09H00 to 17H00</li>
                        <li>
                            No deliveries on Sundays and Public Holidays.
                        </li>
                        <li>Delivery fee: R50.</li>
                    </ul>
                </div>
            </Modal>

            <Modal
                title="Confirm order"
                visible={showAfterPlaceOrder}
                maskClosable={false}
                okText="Done"
                onOk={() => {
                        setShowAfterPlaceOrder(false);
                        cartContext.dispatch(emptyCart());
                        router.push("/");
                }}
                className="mt-5"
                onCancel={() => {
                    setShowAfterPlaceOrder(false);
                }}
            >
                <div>
                    <h3>
                        Your order has been submitted, please check your
                        email inbox for more information.
                    </h3>
                </div>
            </Modal>
        </div>
    );
}
