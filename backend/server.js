
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const { ethers } = require('ethers');
const axios = require('axios');
const HDWalletProvider = require('@truffle/hdwallet-provider');

app.use(bodyParser.json());

app.get('/price', async (req, res) => {
    try {
        const { data } = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        res.json({ eth: data.ethereum.usd });
    } catch (err) {
        res.status(500).send("Price fetch error");
    }
});

app.post('/bet', (req, res) => {
    const { address, amount, direction, duration } = req.body;
    // Save to DB and trigger contract interaction (not implemented here)
    res.send("Bet placed");
});

app.post('/withdraw', (req, res) => {
    const { address, amount } = req.body;
    if (amount <= 200) {
        // simulate auto-send
        res.send("Auto withdrawal sent");
    } else {
        res.send("Admin approval required");
    }
});

app.listen(3000, () => console.log("BvsB backend engine running"));
