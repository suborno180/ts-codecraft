import { exec } from 'child_process';
import { promisify } from 'util';

const runShellCommand = async (command: string): Promise<string> => {
    const execPromise = promisify(exec);
    const { stdout, stderr } = await execPromise(command);

    if (stderr) {
        throw new Error(`Error executing command: ${stderr}`);
    }

    return stdout;
};

export default runShellCommand;
