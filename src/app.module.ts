/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailtrapController } from './controllers/mailtrap/mailtrap.controller';
import { MailtrapService } from './service/mailtrap/mailtrap.service';

@Module({
  imports: [],
  controllers: [AppController, MailtrapController],
  providers: [AppService, MailtrapService],
})
export class AppModule {}
