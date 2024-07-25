import React, { useState, useEffect } from 'react';

const NotificationInbox = () => {
    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        // Simulate fetching notifications from a server
        const fetchedNotifications = [
            { id: 1, message: 'Welcome to SuprSend!' },
            { id: 2, message: 'Your integration is successful.' }
        ];
        setNotifications(fetchedNotifications);
    }, []);

    const handleShowNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    return (
        <div>
            <button onClick={handleShowNotifications}>
                {showNotifications ? 'Hide Notifications' : 'See Notifications'}
            </button>
            {showNotifications && (
                <div>
                    <h2>Notifications</h2>
                    <ul>
                        {notifications.map(notification => (
                            <li key={notification.id}>{notification.message}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NotificationInbox;
