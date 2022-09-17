const sendMail = async(req, res) =>{
    try {
        const {name, email, contact} = req.body
        if(!email || !name || !contact) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Please provide name, email and contact'
            })
        }

        const output = `
            <p>You have new contact</p>
            <ul>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
                <li>Contact: ${contact}</li>
            </ul>
        `
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: process.env.EMAIL_HOST_USER,
                pass: process.env.EMAIL_HOST_PASSWORD
            }
        });
        
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: `${name} 👻" ${process.env.EMAIL_HOST_USER}`, // sender address
            to: `${email}`, // list of receivers
            subject: "Node Test ✔", // Subject line
            text: '', // plain text body
            html: output, // html body
          },function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


        res.status(200).json({
            status: 'success',
            data: {
                name,
                email,
                contact
            },
            output: output
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed',
        })
    }
}