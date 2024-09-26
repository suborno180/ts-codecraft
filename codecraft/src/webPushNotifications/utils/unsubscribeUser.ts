const unsubscribeUser = async (subscription: PushSubscription): Promise<void> => {
    if (subscription) {
        await subscription.unsubscribe();
        console.log("User unsubscribed from push notifications.");
    }
};

export default unsubscribeUser;
