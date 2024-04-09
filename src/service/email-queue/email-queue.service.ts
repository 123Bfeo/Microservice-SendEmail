/* eslint-disable prettier/prettier */
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class EmailQueueService {
  constructor(
    @InjectQueue('email')
    private readonly emailQueue: Queue,
  ) {}
  async sendQueueEmail(data: any) {
    console.log('service :', data);
    try {
      await this.emailQueue.add('send-email', data);
    } catch (error) {
      console.error('Error al encolar el correo');
      throw new Error('Error al encolar el correo electronico');
    }
  }
}
