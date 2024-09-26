const isPushSupported = (): boolean => {
    return 'serviceWorker' in navigator && 'PushManager' in window;
};

export default isPushSupported;
