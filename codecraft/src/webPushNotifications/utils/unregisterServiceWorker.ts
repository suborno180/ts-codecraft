const unregisterServiceWorker = async (): Promise<void> => {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
        await registration.unregister();
    }
};

export default unregisterServiceWorker;
