import * as fs from 'fs';

const watchFileChanges = (filePath: string, callback: () => void): void => {
    fs.watch(filePath, (eventType: 'rename' | 'change') => {
        if (eventType === 'change') {
            callback();
        }
    });
};

export default watchFileChanges;
