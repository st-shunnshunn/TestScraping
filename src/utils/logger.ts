import winston from 'winston';
import dotenv from 'dotenv';
dotenv.config();

// TODO そのうち環境ごとに変わるようにする
let stage = process.env.STAGE;

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'application.log' }),
    ],
});

export default logger;