/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { EmailQueueService } from 'src/service/email-queue/email-queue.service';

@Controller('emails')
export class EmailController {
  constructor(private readonly emailQueueService: EmailQueueService) {}

  @Post('send')
  async sendDataEmail(@Body() dtaEmail: any) {
    console.log('controllers :', dtaEmail);
    try {
      await this.emailQueueService.sendQueueEmail(dtaEmail);
    } catch (error) {
      console.error('Error enviando la data al service');
    }
  }
}
