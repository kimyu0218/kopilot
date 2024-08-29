import * as dotenv from 'dotenv';
import { Controller, Get, Render } from '@nestjs/common';
import { FEEDBACK_CRITERIA, MODIFICATION_OPTIONS } from './clova/constants';

dotenv.config();

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root(): any {
    return {
      apiBaseUrl: process.env.BACKEND_API_BASE_URL,
      modificationOptions: MODIFICATION_OPTIONS,
      feedbackCriteria: FEEDBACK_CRITERIA,
    };
  }
}
