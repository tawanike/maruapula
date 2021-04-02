import { Form, Input, Button } from 'antd';
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
  const onFinish = async (values: any) => {
    await fetch('/api/contacts',  {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });
  };
  return (
    <div className="row">
      <div className="col-12 mb-5">

        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=921+Moss+Rd,+Weltevredenpark,+Roodepoort&zoom=17&size=1200x500&markers=label=M|921+Moss+Rd,+Weltevredenpark,+Roodepoort&key=${process.env.GOOGLE_BROWSER_API_KEY}`} 
        style={{ width: '100%', height: 600}} />
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
