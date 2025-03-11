const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/frequencies", async (req, res) => {
    try {
        const response = await axios.get("https://opendata.traficom.fi/api/v1/taajuusjakotaulukko");
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});