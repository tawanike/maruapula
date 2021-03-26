import React, { useContext, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

import { CartContext } from 'src/components/Cart/context';
import CartProduct from 'src/components/Cart/Product';

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

  const onFinish = (values: any) => {
    console.log(cartTotal)

  };

  return (
    <div>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <div className="row">
        <div className="col-7">
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
        <div className="col-5">
        <div className="row">
            <div className="col">
              <h3>Your Order</h3>
            </div>
          </div>
        
          <div className="row">
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

                <p>Subtotal: R{cartTotal}</p>
                <p>Service fee: R50.00</p>
                <p>Grand total: R{cartTotal + 50}</p>
              </div>
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
