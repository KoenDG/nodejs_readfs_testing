import { readdirp } from 'readdirp';

export const getTotalDirectorySize = async (directoryPath) => {
    let totalNoFiles = 0;

    try {
        // readdirp returns an async iterator, which can be consumed with for-await-of
        for await (const entry of readdirp(directoryPath, { alwaysStat: false, type: 'files' })) {
            totalNoFiles +=1;
        }
    } catch (error) {
        console.error(`Error reading directory or summing file sizes for ${directoryPath}:`, error);
        throw error;
    }

    return {
      totalNoFiles
    };
};


export default {
	getTotalDirectorySize,
};
