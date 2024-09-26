import * as fs from 'fs/promises';

const createEnvFile = async (envVars: Record<string, string>, filePath: string = '.env'): Promise<void> => {
    const content = Object.entries(envVars)
        .map(([key, value]) => `${key}=${value}`)
        .join('\n');
    await fs.writeFile(filePath, content, 'utf-8');
};

export default createEnvFile;
