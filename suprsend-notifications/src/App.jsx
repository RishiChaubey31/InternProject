// src/App.js

import React from 'react';
import NotificationInbox from './components/NotificationInbox';
import { sendNotification } from './utils/suprsend';
import './App.css';

function App() {
    const handleSendNotification = async () => {
        try {
            await sendNotification({
                title: 'New Notification',
                message: 'This is a test notification from SuprSend.'
            });
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>SuprSend Notifications</h1>
                <button onClick={handleSendNotification}>Send Notification</button>
                <NotificationInbox />
            </header>
        </div>
    );
}

export default App;
