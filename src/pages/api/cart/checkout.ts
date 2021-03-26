const sgMail = require('@sendgrid/mail');


export default async (req, res) => {
    if (req.method === 'POST') {
        console.log('POST REQUEST')

        console.log(req.body);
        sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Replace with environment variable
        const msg = {
            to: req.body.user.email,
            from: 'sales@maruapula.store',
            templateId: 'd-b792a77ffa0247fe940b0ee1aa0e3ed8',
            dynamic_template_data: {
                subject: 'New Online Order',
                service_fee: 'R50.00',
                total: req.body.total,
                customer_name: req.body.user.first_name,
                customer_email: req.body.user.email,
                products: req.body.products
            },
        };

        try {
            const sent = await sgMail.send(msg);
            console.log(sent); 
        } catch (error) {
            console.log(error)
        }
        

        // Send Email and SMS to user
    }else{

    }
}