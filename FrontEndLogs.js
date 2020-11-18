import winston from 'winston';
winston.log('debug','Now my debug message are written to console!');

const files = new wisnton.transports.file({filename: 'conmined.log'});
const console = new winston.transports.console();
winston.add(console);
winston.add(files);
winston.remove(console);