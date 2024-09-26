const notifyUser = (title: string, options?: NotificationOptions): void => {
    new Notification(title, options);
};

export default notifyUser;
