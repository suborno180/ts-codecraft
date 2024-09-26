class NotificationManager {
    private notifications: Notification[];

    constructor() {
        this.notifications = [];
    }

    public notify(title: string, options?: NotificationOptions): Notification {
        const notification = new Notification(title, options);
        this.notifications.push(notification);

        notification.addEventListener('close', () => {
            this.notifications = this.notifications.filter(n => n !== notification);
        });

        return notification;
    }

    public getNotifications(): Notification[] {
        return this.notifications;
    }

    public clearNotifications(): void {
        this.notifications.forEach(notification => notification.close()); // Close each notification
        this.notifications = []; // Clear the internal list
        console.log("All notifications closed and internal list cleared.");
    }
}

export default new NotificationManager();
