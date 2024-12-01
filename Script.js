document.getElementById("webhook-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const testType = document.getElementById("test-type").value;

    const webhookURL = "https://discord.com/api/webhooks/1312670115258695750/Qo6hWHvi2MgeHL29-CBBf0O3TpsyK9bxD3GcCzh1YXH-LTm1dQZ4vCE7saFopaZJT8HZ";

    // Construct payload for Discord webhook
    const payload = {
        content: `🚗 **New Driving Test Request** 🚗\n**Username:** ${username}\n**Test Type:** ${testType}`
    };

    try {
        const response = await fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("Your test request has been submitted!");
        } else {
            alert("Failed to submit your request. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while submitting your request.");
    }
});
