const urlB64ToUint8Array = (base64String: string): Uint8Array => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    
    const rawData = window.atob(base64);
    return new Uint8Array([...rawData].map(char => char.charCodeAt(0)));
};

const updateSubscription = async (
    registration: ServiceWorkerRegistration, 
    vapidKey: string
): Promise<PushSubscription | null> => {
    const currentSubscription = await registration.pushManager.getSubscription();
    
    if (currentSubscription) {
        // Unsubscribe the old subscription
        await currentSubscription.unsubscribe();
    }

    // Subscribe with the new VAPID public key
    return await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array(vapidKey), // Use the provided VAPID key
    });
};

export default updateSubscription;
