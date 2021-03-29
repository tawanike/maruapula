import React, { useContext, useState, useEffect } from 'react';
import { Form, Input, Button, Modal } from 'antd';

import { CartContext } from 'src/components/Cart/context';
import { toFixed } from 'accounting-js'

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
  const cartContext = useContext(CartContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [cartTotal, seCartTotal] = useState<number>(0);
  const [userDetails, setUserDetails] = useState<any>();
  const [placeOrder, setPlaceOrder] = useState<boolean>(false);
  const [showPlaceOrder, setShowPlaceOrder] = useState<boolean>(false);

  useEffect(() => {
    let total = cartContext.state.products.reduce((total, product) =>{
      return total + (product.price * product.quantity);
    }, 0);
    seCartTotal(total);
  }, []);

  const onFinish = async (values: any) => {
    if (placeOrder) {
      setLoading(true);
      const response = await fetch('/api/cart/checkout',  {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({total: cartTotal, user: userDetails.user, products: cartContext.state.products})
      });
      const content = await response.json();
  
      console.log(content)
      setLoading(false);
      setShowPlaceOrder(false);
    } else {
      setUserDetails(values);
      setShowPlaceOrder(true);
    }
  };

  return (
    <div>
      <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} layout="vertical">
      <div className="row gx-5">
        <div className="col-12 col-md-7">
          <h2>Billing Details</h2>
          <div className="row">
            <div className="col-12">
              <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </div>
            <div className="col-12 col-md-6">
              <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                <Input />
              </Form.Item>
            </div>
            <div className="col-12 col-md-6">
              <Form.Item name={['user', 'mobile']} label="Mobile" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </div>

            <div className="col-12 col-md-12">
              <Form.Item name={['user', 'address_one']} label="Address line one" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </div>

            <div className="col-12 col-md-12">
              <Form.Item name={['user', 'address_two']} label="Address line two">
                <Input />
              </Form.Item>
            </div>

            <div className="col-12 col-md-12">
              <Form.Item name={['user', 'address_three']} label="Address line three">
                <Input />
              </Form.Item>
            </div>
            
            <div className="col-12 col-md-4">
              <Form.Item name={['user', 'city']} label="City" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </div>

            <div className="col-12 col-md-4">
              <Form.Item name={['user', 'province']} label="Province" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </div>

            <div className="col-12 col-md-4">
              <Form.Item name={['user', 'postcode']} label="Postcode" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </div>

            </div>
          
        </div>
        <div className="col-12 col-md-5 ">
        <div className="row">
            <div className="col">
              <h2>Your Order</h2>
            </div>
          </div>
        
          <div className="CheckOut row p-5">
            <div className="col">
              <ul className="CheckOut__list">
                <li className="CheckOut__infor">
                  <div className="row">
                    <div className="col-md-8">Product</div>
                    <div className="col-md-4 CheckOut__totals">Total</div>
                  </div>
                </li>
                {
                  cartContext.state.products.map(product => {
                    return<li className="CheckOut__product" key={product.id}>
                      <div className="row">
                        <div className="col-md-8">{ product.title} x{product.quantity}</div>
                        <div className="col-md-4 CheckOut__totals">R{toFixed(product.quantity * product.price, 2) }</div>
                      </div>
                      </li>
                  })
                }
                <li className="CheckOut__infor">
                  <div className="row">
                    <div className="col-md-8">Shipping</div>
                    <div className="col-md-4 CheckOut__totals">R50.00</div>
                  </div>
                </li>
                <li className="CheckOut__infor">
                  <div className="row">
                    <div className="col-md-8">Total</div>
                    <div className="col-md-4 CheckOut__totals">R{toFixed(cartTotal + parseInt(50), 2)}</div>
                  </div>
                </li>
              </ul>
            </div>

            <Form.Item className="mt-5" wrapperCol={{ offset: 1 }}>
              <Button type="primary" htmlType="submit">
                Place order
              </Button>
            </Form.Item>
          </div>
        </div>
      </div>
      </Form>

      <Modal 
        title="Confirm order" 
        visible={showPlaceOrder}
        onOk={() => {
          if(!loading) {
            setPlaceOrder(true); 
            onFinish(userDetails);
          } else {
            setShowPlaceOrder(false);
          }

          }
        } 
        onCancel={() => { setShowPlaceOrder(false) }}>
          { loading || <div>
            <p>“You are about to confirm your order. Kindly note the following: </p>
            <ul>
              <li>All orders received before 14:00, will be delivered in 2 days.</li>
              <li>Deliveries from 10H00 to 18H00, daily</li>
              <li>No deliveries on Sundays and public holidays</li>
              <li>Delivery fee: R50.</li>
              <li>Maruapula will be in touch to re-confirm your order where necessary, or send an invoice for EFT payment</li>
              <li>Contact us on: Monday to Saturday (08H00 to 18H00) on 083 668 5785; sales@maruapula.store or www.maruapula.store</li>
            </ul>
            <p>Share your Maruapula experience!! WhatsApp this message to your trusted family, friends, neighbours, and colleagues.</p>
          </div>}

          { loading && <div>
            <h3>Your order has been submitted, please check your email inbox for more information.</h3>
          </div>}
      </Modal>
    </div>
  )
}
