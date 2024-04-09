/* eslint-disable prettier/prettier */
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { MailtrapService } from 'src/service/mailtrap/mailtrap.service';

@Processor('email')
export class EmailWorker {
  constructor(private readonly mailtrapService: MailtrapService) {}

  @Process('send-email')
  async sendEmail(job: Job) {
    try {
      const data = job.data;
      console.log('worker :', data);
      await this.mailtrapService.emailSendConfirmation(data);
    } catch (error) {
      throw new Error('Error al enviar el correo');
    }
  }
}
