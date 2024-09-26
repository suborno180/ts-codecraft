const getSubscription = async (registration: ServiceWorkerRegistration): Promise<PushSubscription | null> => {
    return await registration.pushManager.getSubscription();
};

export default getSubscription;
