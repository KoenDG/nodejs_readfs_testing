import { readdirp } from 'readdirp';

export const getTotalDirectorySize = async (directoryPath) => {
    let totalNoFiles = 0;
    let prom;

    try {
      prom = new Promise((resolve, reject) => {
        readdirp(directoryPath, { alwaysStat: false, type: 'files' })
        .on('data', (entry) => {
          totalNoFiles +=1;
        })
        .on('end', () => resolve());
      });

      await prom;
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
