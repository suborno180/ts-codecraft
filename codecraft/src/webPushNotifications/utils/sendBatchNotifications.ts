import sendPushNotification from './sendPushNotification'; // Adjust the path accordingly

const sendBatchNotifications = async (
    subscriptions: PushSubscription[], 
    payload: any, 
    endpoint: string // Add endpoint parameter
): Promise<void[]> => {
    return Promise.all(subscriptions.map(subscription => sendPushNotification(subscription, payload, endpoint)));
};

export default sendBatchNotifications;
