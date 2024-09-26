import readFileAsText from './readFileAsText';

const readJsonFile = async (filePath: string): Promise<any> => {
    const data = await readFileAsText(filePath);
    return JSON.parse(data);
};

export default readJsonFile;
