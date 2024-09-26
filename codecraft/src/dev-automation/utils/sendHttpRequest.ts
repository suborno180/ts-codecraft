import axios from 'axios';

const sendHttpRequest = async (url: string, method: 'GET' | 'POST', data?: any): Promise<any> => {
    const response = await axios({ url, method, data });
    return response.data;
};

export default sendHttpRequest;
