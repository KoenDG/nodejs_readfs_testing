import { fdir as FDir } from 'fdir';
import { lstat } from "node:fs/promises";

const fdir = new FDir().withFullPaths();

export const getTotalDirectorySize = async (directoryPath) => {
    try {
      const files = await fdir.crawl(directoryPath).withPromise();
    } catch (error) {
        console.error(`Error reading directory or summing file sizes for ${directoryPath}:`, error);
        throw error;
    }
};


export default {
	getTotalDirectorySize,
};
