/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MailtrapService } from './service/mailtrap/mailtrap.service';
import { EmailController } from './controllers/email/email.controller';
import { BullModule } from '@nestjs/bull';
import { EmailQueueService } from './service/email-queue/email-queue.service';
import { EmailWorker } from './service/worker/email.worker';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'email',
    }),
  ],
  controllers: [AppController, EmailController],
  providers: [AppService, MailtrapService, EmailQueueService, EmailWorker],
})
export class AppModule {}
