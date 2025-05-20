import { fdir as FDir } from "fdir";
import { lstat } from "node:fs/promises";

const fdir = new FDir().withFullPaths();

const getFileSize = async (path) => (await lstat(path)).size;
const sumSizes = (current, size) => current + size;

export const getTotalDirectorySize = async (directoryPath) => {
    let totalSize = 0;
    let totalNoFiles = 0;

    try {
      const files = await fdir.crawl(directoryPath).withPromise();

      const promises = files.map(getFileSize);

      totalSize = (await Promise.all(promises)).reduce(sumSizes, 0);
      totalNoFiles = promises.length;
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
