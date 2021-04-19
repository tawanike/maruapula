import accounting from 'accounting-js';
const sgMail = require('@sendgrid/mail');
const sgMail1 = require('@sendgrid/mail');
const twilio = require('twilio');
const twilioClient = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export default async (req, res) => {
    if (req.method === 'POST') {
      console.log(req.body)
        sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Replace with environment variable
        sgMail1.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: req.body.user.email,
            from: 'sales@maruapula.store',
            templateId: 'd-b792a77ffa0247fe940b0ee1aa0e3ed8',
            dynamic_template_data: {
                subject: 'Online Order Confirmation',
                service_fee: 'R50.00',
                total: accounting.toFixed(parseInt(req.body.total) + parseInt('50'), 2),
                tracking_code: req.body.order_reference,
                customer_name: req.body.user.first_name,
                customer_email: req.body.user.email,
                mobile_number: req.body.user.mobile,
                address_line_one: req.body.user.address_one,
                address_line_two: req.body.user.address_two,
                address_line_three: req.body.user.address_three,
                city: req.body.user.city,
                province: req.body.user.province,
                postcode: req.body.user.postcode,
                delivery_instructions: req.body.user.delivery_instructions,
                products: req.body.products
            },
        };

        try {
            await sgMail.send(msg);
          } catch (error) {
            console.error(error);
        
            if (error.response) {
              console.error(error.response.body)
            }
          }

        const msg1 = {
            to: 'sales@maruapula.store',
            from: 'sales@maruapula.store',
            templateId: 'd-b792a77ffa0247fe940b0ee1aa0e3ed8',
            dynamic_template_data: {
              subject: 'Online Order Confirmation',
              service_fee: 'R50.00',
              total: accounting.toFixed(parseInt(req.body.total) + parseInt('50'), 2),
              tracking_code: req.body.order_reference,
              customer_name: req.body.user.first_name,
              customer_email: req.body.user.email,
              mobile_number: req.body.user.mobile,
              address_line_one: req.body.user.address_one,
              address_line_two: req.body.user.address_two,
              address_line_three: req.body.user.address_three,
              city: req.body.user.city,
              province: req.body.user.province,
              postcode: req.body.user.postcode,
              delivery_instructions: req.body.user.delivery_instructions,
              products: req.body.products
          },
        };

        try {
            await sgMail1.send(msg1);
          } catch (error) {
            console.error(error);
        
            if (error.response) {
              console.error(error.response.body)
            }
          }

        const headers = {
            'X-Version': 1,
            'Authorization': `bearer ${process.env.CLICKATEL_AUTH_TOKEN}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        try {
          await twilioClient.messages
          .create({
             body: `Thank you for your Maruapula order!! We will contact you soon to finalise your order + payment arrangements. Call 0836685785 for queries. Ref #${req.body.order_reference}`,
             from: '	+27600702641',
             to: `+${req.body.user.mobile}`
           });
  // Send Email and SMS to user
        } catch (error) {
          console.log(error)
        }
         
    }else{

    }
}