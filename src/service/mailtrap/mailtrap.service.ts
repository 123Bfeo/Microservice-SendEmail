/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import {
  MAILTRAP_HOST,
  MAILTRAP_PASS,
  MAILTRAP_PORT,
  MAILTRAP_USER,
} from '../../../variables';

@Injectable()
export class MailtrapService {
  async emailSendConfirmation(dato: any) {
    try {
      const transport = nodemailer.createTransport({
        host: MAILTRAP_HOST,
        port: MAILTRAP_PORT,
        auth: {
          user: MAILTRAP_USER,
          pass: MAILTRAP_PASS,
        },
      });
      const { email, fullname } = dato;
      await transport.sendMail({
        from: 'RedSocial',
        to: email,
        subject: 'Confirmación  de registro exitoso.',
        text: 'Tu registro fue exitoso.',
        html: `
                      <p>Hola ${fullname}, tu registro fue exitoso en nuestra plataforma.</p>
                      <p>Tu cuenta ya está lista, disfruta de los beneficios que te ofrecemos al comunicarte con tus amigos y seres queridos </p>
                      <p>Si tú no creaste esta cuenta, puedes ignorar el mensaje.</p>
    
    
                      <p>No responder a este correo.</p>
                    `,
      });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      throw new Error('Error al enviar el correo electrónico.');
    }
  }
}
