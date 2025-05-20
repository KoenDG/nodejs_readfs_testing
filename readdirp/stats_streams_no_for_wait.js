import { readdirp } from 'readdirp';

export const getTotalDirectorySize = async (directoryPath) => {
    let totalSize = 0;
    let totalNoFiles = 0;
    let prom;

    try {
      prom = new Promise((resolve, reject) => {
        readdirp(directoryPath, { alwaysStat: true, type: 'files' })
        .on('data', (entry) => {
          totalSize += entry.stats.size;
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
      totalSize,
      totalNoFiles
    };
};


export default {
	getTotalDirectorySize,
};
