const {createLogger,transports,format}= require('winston')

// const formatConf = format.combine(
//     format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
//     format.json(),
    
//   );
// const myFormat = format.printf(({ level, message, timestamp, label }) => {
//     return `${timestamp} [${label}] [${level}]: ${message}`;
//   });
const myFormat = format.printf(({ level, message, timestamp,source }) => {
    return JSON.stringify({
      level,
      source,
      message,
      timestamp
    });
  });
const logger = createLogger({
    transports:[
    new transports.File({
        filename:'info.logs',
        level:'info',
        format:format.combine(format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),myFormat),
    }),
    
]
    
});
module.exports=logger