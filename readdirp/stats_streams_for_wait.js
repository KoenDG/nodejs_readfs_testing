import { readdirp } from 'readdirp';

export const getTotalDirectorySize = async (directoryPath) => {
    let totalSize = 0;
    let totalNoFiles = 0;

    try {
        // readdirp returns an async iterator, which can be consumed with for-await-of
        for await (const entry of readdirp(directoryPath, { alwaysStat: true, type: 'files' })) {
            totalSize += entry.stats.size;
            totalNoFiles +=1;
        }
    } catch (error) {
        console.error(`Error reading directory or summing file sizes for ${directoryPath}:`, error);
        throw error;
    }

    return {
      totalSize,
      totalNoFiles
    };
};


export default {
	getTotalDirectorySize,
};
