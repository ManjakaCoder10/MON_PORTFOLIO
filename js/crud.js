const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res, next) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fanomezantsoamanjakatsilavina@gmail.com',
      pass: '',
    },
  });

  const mailOptions1 = {
  from: `${name}`,

    to: 'fanomezantsoamanjakatsilavina@gmail.com',
    subject: `Contact from ${email}`,
    text: `${message} ${email}  `,
  };
  const mailOptions2 = {
    from: 'fanomezantsoamanjakatsilavina@gmail.com',
  
      to: email,
      subject: `Contact from manjaka`,
      text: `Merci de m'avoir contacté via mon portfolio. J'ai bien reçu votre message et je vais vous répondre dès que possible.

      Cordialement, ${name}   `  ,
    };

  try {
    const info = await transporter.sendMail(mailOptions1);
    const info1 = await transporter.sendMail(mailOptions2);
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    next(error); // Pass the error to the error handling middleware
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
