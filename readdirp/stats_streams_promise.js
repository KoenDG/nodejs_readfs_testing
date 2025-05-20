import { readdirpPromise } from 'readdirp';

export const getTotalDirectorySize = async (directoryPath) => {
    let totalSize = 0;
    let totalNoFiles = 0;

    try {
      const files = await readdirpPromise(directoryPath, { alwaysStat: true, type: 'files' });
      files.forEach((item, i) => {
        totalSize += item.stats.size;
        totalNoFiles +=1;
      });

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
