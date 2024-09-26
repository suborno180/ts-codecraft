const serviceWorkerStatus = async (): Promise<string[]> => {
    const registrations = await navigator.serviceWorker.getRegistrations();
    return registrations.map(reg => reg.active ? 'Active' : reg.waiting ? 'Waiting' : 'Redundant');
};

export default serviceWorkerStatus;
