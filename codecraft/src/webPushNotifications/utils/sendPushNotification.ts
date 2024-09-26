import axios from 'axios';

const sendPushNotification = async (
    subscription: PushSubscription, 
    payload: any, 
    endpoint: string
): Promise<void> => {
    try {
        await axios.post(endpoint, {
            subscription,
            payload,
        });
    } catch (error) {
        console.error('Error sending push notification:', error);
        throw error; // Optionally rethrow the error for further handling
    }
};

export default sendPushNotification;
