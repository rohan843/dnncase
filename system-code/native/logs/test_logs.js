const logger = require('./logger');

function print_log(){

    logger.info('This is message at time');
   
    
}

setInterval(print_log,1000);

