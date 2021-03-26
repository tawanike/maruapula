
export default async (req, res) => {
    if (req.method === 'POST') {
        console.log('POST REQUEST')

            console.log(req.body);
        
            const sgMail = require('@sendgrid/mail');
            sgMail.setApiKey('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'); // Replace with environment variable
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
            sgMail.send(msg);
    }else{

    }
}