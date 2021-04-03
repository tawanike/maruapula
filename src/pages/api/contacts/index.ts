const sgMail = require('@sendgrid/mail');


export default async (req, res) => {
    if (req.method === 'POST') {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Replace with environment variable
        const msg = {
            to: req.body.email, 
            from: 'sales@maruapula.store',
            templateId: 'd-f62774d6c8ef480bb8a70661c6e5a464',
            dynamic_template_data: {
                subject: req.body.subject,
                customer_name: req.body.name,
                customer_email: req.body.email,
                message: req.body.message
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