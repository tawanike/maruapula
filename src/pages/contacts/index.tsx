import { Form, Input, Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  StaticGoogleMap,
  Marker,
  Path,
} from 'react-static-google-map';

const API_KEY = 'AIzaSyAQAW6W2ZNVKu_I9XIQXuSIj4q_YrjEIt4'

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
      <div className="col-12">
        <StaticGoogleMap size="600x1200" className="img-fluid" apiKey={API_KEY}>
          <Marker location="-26.1150374,27.9822172" color="green" label="P" />
        </StaticGoogleMap>
      </div>
      <div className="col-md-5 p-4">
        <p><FontAwesomeIcon icon={['fas', 'phone-alt']} size="2x" style={{ marginRight: 10}}/> 083 668 5785</p>
        <p><FontAwesomeIcon icon={['fas', 'envelope']} size="2x" style={{ marginRight: 10}}/>sales@maruapula.store</p>
        <p><FontAwesomeIcon icon={['fas', 'map-marker-alt']} size="2x" style={{ marginRight: 10}}/>921 Moss Street, Weltevredenpark</p>
        <p><FontAwesomeIcon icon={['fas', 'business-time']} size="2x" style={{ marginRight: 10}}/>Monday to Saturday (08H00 to 18H00)</p>
        {/* <p>
          <h3>Follow Us</h3>
          <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" style={{ marginRight: 10}}/>
          <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" style={{ marginRight: 10}}/>
          <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" style={{ marginRight: 10}}/>
        </p> */}
      </div>
      <div className="col-md-7 Contacts p-5">
        <div className="col-md-12">
          <h2>Get intouch with us</h2>
        </div>
        <Form layout="vertical" name="contacts" onFinish={onFinish} validateMessages={validateMessages}>
          <div className="row">
            <div className="col-md-6">
              <Form.Item name={['contacts', 'name']} label="Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </div>
            <div className="col-md-6">
              <Form.Item name={['contacts', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                <Input />
              </Form.Item>
            </div>

            <div className="col-md-12">
              <Form.Item name={['contacts', 'subject']} label="Subject" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </div>
            <div className="col-md-12">
              <Form.Item name={['contacts', 'message']} label="Message" rules={[{ required: true }]}>
                <Input.TextArea  rows={4}/>
              </Form.Item>
            </div>

            <div className="col-md-12">
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
      
    </div>
  )
}
