const {createLogger,transports,format}= require('winston')

const formatConf = format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.json(),
    
  );
const logger = createLogger({
    transports:[
    new transports.File({
        filename:'info.logs',
        level:'info',
        format:formatConf
    }),
    
]
    
});
module.exports=logger