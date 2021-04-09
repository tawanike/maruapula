import axios from 'axios';
const sgMail = require('@sendgrid/mail');


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
                customer_name: req.body.user.first_name,
                customer_email: req.body.user.email,
                products: req.body.products
            },
        };

        const msg1 = {
            to: 'sales@maruapula.store',
            from: 'sales@maruapula.store',
            templateId: 'd-b792a77ffa0247fe940b0ee1aa0e3ed8',
            dynamic_template_data: {
                subject: 'New Online Order',
                service_fee: 'R50.00',
                total: req.body.total,
                customer_name: 'sales@maruapula.store',
                customer_email: 'sales@maruapula.store',
                products: req.body.products
            },
        };

        const max = 999999;
        const min = 111111;

        const headers = {
            'X-Version': 1,
            'Authorization': `bearer ${process.env.CLICKATEL_AUTH_TOKEN}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        console.log(Math.floor(Math.random() * (max - min + 1)) + min )

        await axios
            .post( 'https://api.clickatell.com/rest/message', {
                to: [req.body.user.mobile],
                text: `We have received your order. See your email for details. Note:
                All orders received before 14H00, will be delivered in 2 days.
                Deliveries from 09H00 to 17H00, daily
                No deliveries on Sundays and public holidays
                Delivery fee: R50.
                Contact us: Monday to Saturday (08H00 to 17H00) on 083 668 5785; sales@maruapula.store or www.maruapula.store
                Share your Maruapula experience!! Send this message to your trusted family, friends, neighbours, and colleagues.`
            }, { headers: headers} );
        

        // Send Email and SMS to user
    }else{

    }
}