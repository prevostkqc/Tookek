const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Ajout de CORS
require('dotenv').config();

const app = express();

app.use(cors()); // Active CORS pour toutes les routes
app.use(express.json());

app.post('/send-email', (req, res) => {
    const { name, company, description } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'ssl0.ovh.net',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'contact@tookek.fr',
        subject: `Contact depuis tookek.fr de ${name}`,
        text: `Nom: ${name}\nMail: ${mail}\nType: ${company || 'N/A'}\nDescription du projet: ${description}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            return res.status(500).send('Erreur lors de l\'envoi de l\'email');
        }
        console.log('Email envoyé avec succès:', info.response);
        res.status(200).send('Email envoyé avec succès');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
