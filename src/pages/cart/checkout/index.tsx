import React, { useContext, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

import { CartContext } from 'src/components/Cart/context';
import CartProduct from 'src/components/Cart/Product';
import cart from '..';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export default function Checkout() {
  const [cartTotal, seCartTotal] = useState<number>(0);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    let total = cartContext.state.products.reduce((total, product) =>{
      return total + (product.price * product.quantity);
    }, 0);
    seCartTotal(total);
  }, []);

  const onFinish = async (values: any) => {
    console.log(cartTotal)

    const response = await fetch('/api/cart/checkout',  {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({total: cartTotal, user: values.user, products: cartContext.state.products})
    });
    const content = await response.json();

    console.log(content)
  
  };

  return (
    <div>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <div className="row">
        <div className="col-5">
          <h3>Billing Details</h3>
          
            <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'mobile']} label="Mobile" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'address_one']} label="Address line one" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'address_two']} label="Address line two">
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'address_three']} label="Address line three">
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'city']} label="City" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'province']} label="Province" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'postcode']} label="Postcode" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            
          
        </div>
        <div className="col-7">
        <div className="row">
            <div className="col">
              <h3>Your Order</h3>
            </div>
          </div>
        
          <div className="row">
            <div className="col">
              <ul>
                <li>Product <span className="">Total</span></li>
                {
                  cartContext.state.products.map(product => {
                    return<li>{ product.title} x{product.quantity}</li>
                  })
                }
                <li>Shipping <span className="">Total</span></li>
                <li>Total <span className="">Total</span></li>
              </ul>
            </div>

            <Form.Item className="mt-5" wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Place order
              </Button>
            </Form.Item>
          </div>
        </div>
      </div>
      </Form>
    </div>
  )
}
