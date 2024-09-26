import writeTextToFile from './writeTextToFile';

const writeJsonFile = async (filePath: string, data: any): Promise<void> => {
    const jsonString = JSON.stringify(data, null, 2);
    await writeTextToFile(filePath, jsonString);
};

export default writeJsonFile;
