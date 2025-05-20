import { readdirpPromise } from 'readdirp';

export const getTotalDirectorySize = async (directoryPath) => {
    let totalNoFiles = 0;

    try {
      const files = await readdirpPromise(directoryPath, { alwaysStat: false, type: 'files' });
      files.forEach((item, i) => {
        totalNoFiles +=1;
      });

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
