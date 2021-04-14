import axios from 'axios';
const sgMail = require('@sendgrid/mail');
const twilio = require('twilio');
const twilioClient = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export default async (req, res) => {
    if (req.method === 'POST') {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Replace with environment variable
        const msg = {
            to: req.body.user.email,
            from: 'sales@maruapula.store',
            templateId: 'd-b792a77ffa0247fe940b0ee1aa0e3ed8',
            dynamic_template_data: {
                subject: 'Online Order Confirmation',
                service_fee: 'R50.00',
                total: req.body.total,
                tracking_code: req.body.order_reference,
                customer_name: req.body.user.first_name,
                customer_email: req.body.user.email,
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
                subject: 'New Online Order',
                service_fee: 'R50.00',
                total: req.body.total,
                tracking_code: req.body.order_reference,
                customer_name: 'sales@maruapula.store',
                customer_email: 'sales@maruapula.store',
                products: req.body.products
            },
        };

        try {
            await sgMail.send(msg1);
          } catch (error) {
            console.error(error);
        
            if (error.response) {
              console.error(error.response.body)
            }
          }

        sgMail.send()
        const headers = {
            'X-Version': 1,
            'Authorization': `bearer ${process.env.CLICKATEL_AUTH_TOKEN}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        // await axios
        //     .post( 'https://api.clickatell.com/rest/message', {
        //         to: [req.body.user.mobile],
        //         text: ``
        //         }, { headers: headers} );
        console.log(req.body.user.mobile)
        try {
          twilioClient.messages
          .create({
             body: `Thank you for your Maruapula order!! We will contact you soon to finalise your order + payment arrangements. Call 0836685785 for queries. Ref #${req.body.order_reference}`,
             from: '	+27600702641',
             to: req.body.user.mobile
           })
          .then(message => console.log(message.sid));
  // Send Email and SMS to user
        } catch (error) {
          console.log(error)
        }
         
    }else{

    }
}