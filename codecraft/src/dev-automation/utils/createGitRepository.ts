import { exec } from 'child_process';
import path = require('path');
import { promisify } from 'util';

const createGitRepository = async (dirPath: string): Promise<void> => {
    const execPromise = promisify(exec);
    await execPromise(`git init`, { cwd: path.resolve(dirPath) });
};

export default createGitRepository;
