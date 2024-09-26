import notificationManager from './notificationManager';

const listNotifications = (): Notification[] => {
    return notificationManager.getNotifications();
};

export default listNotifications;
