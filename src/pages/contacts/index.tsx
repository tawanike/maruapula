import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
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

export default function Contacts() {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Get intouch with us</h1>
      </div>
      <div className="col-md-4 p-4">
        <p>Mobile/WhatsApp	: 083 668 5785</p>
        <p>Office 			: TBC</p>
        <p>Email			: sales@maruapula.store</p>
        <p>Address			: 921 Moss Street, Weltevredenpark</p>
        <p>Contact days & times	: Monday to Saturday (08H00 to 18H00)</p>
        <p>
          <h3>Follow Us</h3>

        </p>
      </div>
      <div className="col-md-8">
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
            <Input />
          </Form.Item>
          
          <Form.Item name={['user', 'introduction']} label="Message" rules={[{ required: true }]}>
            <Input.TextArea  rows={4}/>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      
    </div>
  )
}
