const proxyURL = "https://your-proxy-server-url.com/webhook";

const payload = {
    content: `🚗 **New Driving Test Request** 🚗\n**Username:** ${username}\n**Test Type:** ${testType}`
};

try {
    const response = await fetch(proxyURL, {
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
