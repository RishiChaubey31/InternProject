// src/utils/suprsend.js

export const sendNotification = async (event) => {
    const response = await fetch('https://api.suprsend.com/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_SUPRSEND_API_KEY}`
        },
        body: JSON.stringify({
            project_id: process.env.REACT_APP_SUPRSEND_PROJECT_ID,
            event: event
        })
    });

    if (!response.ok) {
        throw new Error('Failed to send notification');
    }

    const data = await response.json();
    console.log('Notification sent:', data);
};
