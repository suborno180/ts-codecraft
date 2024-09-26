import axios from 'axios';

const checkServiceStatus = async (url: string): Promise<boolean> => {
    try {
        const response = await axios.get(url);
        return response.status === 200;
    } catch {
        return false;
    }
};

export default checkServiceStatus;
