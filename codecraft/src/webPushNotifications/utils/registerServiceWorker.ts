const registerServiceWorker = async (url: string): Promise<ServiceWorkerRegistration> => {
    return await navigator.serviceWorker.register(url);
};

export default registerServiceWorker;
