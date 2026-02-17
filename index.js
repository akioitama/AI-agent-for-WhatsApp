const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { generateResponse } = require('./llm_service');
require('dotenv').config();

const client = new Client({
    authStrategy: new LocalAuth()
});

const fs = require('fs');
const QRCode = require('qrcode');

client.on('qr', (qr) => {
    // Generate QR in terminal
    qrcode.generate(qr, { small: true });

    // Save QR to file
    QRCode.toFile('qr.png', qr, {
        color: {
            dark: '#000000',  // Blue dots
            light: '#0000' // Transparent background
        }
    }, function (err) {
        if (err) throw err
        console.log('QR code saved to qr.png');
    });
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    // Basic logging
    console.log('MESSAGE RECEIVED', msg.body);

    try {
        const response = await generateResponse(msg.body, msg.from); // msg.from is used for context
        msg.reply(response);
    } catch (error) {
        console.error('Error handling message:', error);
    }
});

client.initialize();
