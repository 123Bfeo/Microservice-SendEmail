/* eslint-disable prettier/prettier */
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { MailtrapService } from 'src/service/mailtrap/mailtrap.service';

@Processor('email')
export class EmailWorker {
  constructor(private readonly mailtrapService: MailtrapService) {}

  @Process('send-email')
  async sendEmail(job: Job) {
    const data = job.data;
    //console.log('worker :', data);
    try {
      await this.mailtrapService.emailSendConfirmation(data);
    } catch (error) {
      console.error('Error al enviar el correo:', error.message);
      throw new Error('Error al enviar el correo');
    }
  }
}
