import { format } from 'winston';

const printfFormat = () =>
  format.printf(({ level, message, timestamp, stack }) => {
    const logMessage: string = `[${level}]\t${timestamp}\t${message}`;
    return stack ? `${logMessage}\n${stack}` : logMessage;
  });

export const customFormat = () =>
  format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.colorize(),
    printfFormat(),
  );
