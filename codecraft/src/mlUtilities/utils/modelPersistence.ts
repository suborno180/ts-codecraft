import * as fs from 'fs';

const saveModel = (model: any, filePath: string): void => {
    fs.writeFileSync(filePath, JSON.stringify(model));
};

const loadModel = (filePath: string): any => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

export { saveModel, loadModel };
