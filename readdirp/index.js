const test_dir = '/mnt/remote_data_dir/';
// const test_dir = '/tmp/';

import { getTotalDirectorySize } from './stats_streams_for_wait.js';
// import { getTotalDirectorySize } from './stats_streams_no_for_wait.js';
// import { getTotalDirectorySize } from './stats_streams_promise.js';

// import { getTotalDirectorySize } from './no_stats_streams_for_wait.js';
// import { getTotalDirectorySize } from './no_stats_streams_no_for_wait.js';
// import { getTotalDirectorySize } from './no_stats_streams_promise.js';

const init = async () => {
  const start = process.hrtime.bigint();  // Start time in nanoseconds
  const obj = await getTotalDirectorySize(test_dir);
  const end = process.hrtime.bigint();  // Start time in nanoseconds

  const durationNs = end - start;  // Duration in nanoseconds (BigInt)
  const durationMs = Number(durationNs) / 1e9;  // Convert to seconds (float)

  console.log(`Duration: ${durationNs} nanoseconds (${durationMs.toFixed(3)} s)`);
	// console.log(`Amount of files: ${obj.totalNoFiles}.`);
	console.log(`Amount of files: ${obj.totalNoFiles} for ${obj.totalSize} bytes.`);
};

(async () => {
    await init();
})().catch((e) => {
    console.error(`${e}`);
});
