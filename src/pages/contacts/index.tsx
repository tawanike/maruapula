import { useState } from 'react';
import Head from 'next/head';
import { Alert, Form, Input, Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default function Contacts() {
  const [form]  = Form.useForm();
  const [showAlert, setShowAlert] = useState(false);
  const onFinish = async (values: any) => {
    const submitted = await fetch('/api/contacts',  {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    if (submitted.status === 201){
      form.resetFields()
      setShowAlert(true)
    }
  };
  return (
    <div className="row">
      <Head>
        <title>Contacts - Maruapula Store | Fresh Produce | Serve Them Fresh, Daily | Gauteng Delivery</title>
      </Head>      
      <div className="col-md-5 p-4">
        <p><FontAwesomeIcon icon={['fas', 'phone-alt']} style={{ marginRight: 10}}/> 083 668 5785</p>
        <p><FontAwesomeIcon icon={['fas', 'envelope']} style={{ marginRight: 10}}/>sales@maruapula.store</p>
        <p><FontAwesomeIcon icon={['fas', 'map-marker-alt']} style={{ marginRight: 10}}/>921 Moss Street, Weltevredenpark</p>
        <p><FontAwesomeIcon icon={['fas', 'business-time']} style={{ marginRight: 10}}/>Monday to Saturday (08H00 to 17H00)</p>
      </div>
      <div className="col-md-7 Contacts p-5">
        {showAlert && <div className="mb-3">
          <Alert message="Your message has been sent." type="success" banner={true} />
        </div> }
        
        <div className="col-md-12">
          <h2>Get in touch with us</h2>
        </div>
        <Form form={form} layout="vertical" name="contacts" onFinish={onFinish} validateMessages={validateMessages}>
          <div className="row">
            <div className="col-md-6">
              <Form.Item name='name' label="Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </div>
            <div className="col-md-6">
              <Form.Item name='email' label="Email" rules={[{ type: 'email', required: true }]}>
                <Input />
              </Form.Item>
            </div>

            <div className="col-md-12">
              <Form.Item name='subject' label="Subject" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </div>
            <div className="col-md-12">
              <Form.Item name='message' label="Message" rules={[{ required: true }]}>
                <Input.TextArea rows={4}/>
              </Form.Item>
            </div>

            <div className="col-md-12">
              
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              
            </div>
          </div>
        </Form>
      </div>
      
    </div>
  )
}
