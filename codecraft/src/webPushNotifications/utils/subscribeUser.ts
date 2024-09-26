const urlB64ToUint8Array = (base64String: string): Uint8Array => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4); // Add necessary padding
    const base64 = (base64String + padding)
        .replace(/-/g, '+') // Replace '-' with '+'
        .replace(/_/g, '/'); // Replace '_' with '/'
    
    const rawData = window.atob(base64); // Decode base64 to binary string
    return new Uint8Array([...rawData].map(char => char.charCodeAt(0))); // Convert to Uint8Array
};

const subscribeUser = async (registration: ServiceWorkerRegistration): Promise<PushSubscription> => {
    const options: PushSubscriptionOptions = {
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array('YOUR_PUBLIC_VAPID_KEY'), // Replace with your VAPID public key
    };
    return await registration.pushManager.subscribe(options);
};

export default subscribeUser;
