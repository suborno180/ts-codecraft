const requestNotificationPermission = async (): Promise<NotificationPermission> => {
    return await Notification.requestPermission();
};

export default requestNotificationPermission;
