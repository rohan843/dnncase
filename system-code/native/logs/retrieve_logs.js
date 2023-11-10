const winston = require('winston');
const fs = require('fs');
const readline = require('readline');

function recentNLogs(n) {
// Define the log file path
const logFilePath = 'info.logs';

// Create a custom log stream to process the latest logs
const customLogStream = new require('stream').Transform({
  transform(chunk, encoding, callback) {
    // Parse the log entry from JSON
    const logEntry = JSON.parse(chunk.toString());

    // Add the log entry to the recentLogs array
    recentLogs.push(logEntry);

    // Keep only the most recent 10 log entries
    if (n!=-1 && recentLogs.length > n) {
      recentLogs.shift();
    }

    callback();
  }
});

// Keep track of the last 10 log entries
const recentLogs = [];

// Read the log file line by line
const readStream = readline.createInterface({
  input: fs.createReadStream(logFilePath),
});

// Listen for new logs from the customLogStream
readStream.on('line', (line) => {
  customLogStream.write(line + '\n');
});

// Start streaming the log file
readStream.on('close', () => {
  console.log('Streaming complete.');

  // After streaming is complete, you can access the recentLogs array
  console.log('Recent 10 log entries:');
  console.log(recentLogs);
  recentLogs.forEach((logEntry, index) => {
    console.log(`${logEntry.timestamp} - ${logEntry.message}`);
  });
});

// Handle errors, if any
readStream.on('error', (err) => {
  console.error(`Error reading the log file: ${err}`);
});
return recentLogs
}

console.log(recentNLogs(-1));
