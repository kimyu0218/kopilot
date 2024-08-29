import { Logger } from 'winston';
import { Injectable } from '@nestjs/common';
import { winstonLogger } from './winston.logger';

const COMMON_PREFIX: string = 'LOG ';

@Injectable()
export class WinstonService {
  private readonly logger: Logger = winstonLogger();

  debug(message: string, prefix: string = 'Unknown', ...args: any): void {
    this.logger.debug(this.makeLogMessage(message, prefix), ...args);
  }

  info(message: string, prefix: string = 'Unknown', ...args: any): void {
    this.logger.info(this.makeLogMessage(message, prefix), ...args);
  }

  warn(message: string, prefix: string = 'Unknown', ...args: any): void {
    this.logger.warn(this.makeLogMessage(message, prefix), ...args);
  }

  error(message: string, prefix: string = 'Unknown', trace?: string): void {
    const logMessage: string = this.makeLogMessage(message, prefix);
    this.logger.error(trace ? `${logMessage}\n${trace}` : logMessage);
  }

  private makeLogMessage(message: string, prefix: string): string {
    return `${COMMON_PREFIX}[${prefix}] ${message}`;
  }
}
