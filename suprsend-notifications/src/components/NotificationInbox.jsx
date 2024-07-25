import React, { useState, useEffect } from 'react';

const NotificationInbox = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Simulate fetching notifications from a server
        const fetchedNotifications = [
            { id: 1, message: 'Welcome to SuprSend!' },
            { id: 2, message: 'Your integration is successful.' }
        ];
        setNotifications(fetchedNotifications);
    }, []);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationInbox;