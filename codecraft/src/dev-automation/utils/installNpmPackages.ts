import { exec } from 'child_process';
import { promisify } from 'util';

const installNpmPackages = async (packages: string[]): Promise<void> => {
    const execPromise = promisify(exec);
    await execPromise(`npm install ${packages.join(' ')}`);
};

export default installNpmPackages;