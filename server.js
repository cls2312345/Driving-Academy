const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
    const discordWebhookURL = "https://discord.com/api/webhooks/1312670115258695750/Qo6hWHvi2MgeHL29-CBBf0O3TpsyK9bxD3GcCzh1YXH-LTm1dQZ4vCE7saFopaZJT8HZ";
    const { content } = req.body;

    try {
        const response = await fetch(discordWebhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content })
        });

        if (response.ok) {
            res.status(200).send({ message: "Success" });
        } else {
            res.status(500).send({ error: "Failed to send webhook" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal server error" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
