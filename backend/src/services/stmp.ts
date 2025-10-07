import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import ejs from 'ejs';
import { ISendMail } from '../types';
import env from '../config/env';
import { logger } from '../utils/logger';

const transport = nodemailer.createTransport({
  service: env.STMP.SERVICE as string,
  host: env.STMP.HOST as string,
  port: parseInt(env.STMP.PORT as string),
  secure: false,
  auth: {
    user: env.STMP.USER as string,
    pass: env.STMP.PASS as string,
  },
});

const sendMail = async (userInfo: ISendMail) => {
  const templatePath = path.join(
    __dirname,
    '..',
    'view',
    `${userInfo.template}.ejs`
  );
  const temp = fs.readFileSync(templatePath, 'utf-8');
  const html = ejs.render(temp, userInfo.context);

  const info = await transport.sendMail({
    from: `${env.STMP.NAME} <${env.STMP.EMAIL}>`,
    to: userInfo.to,
    subject: userInfo.subject,
    html: html,
  });

  logger.info('Sending Message: ' + info.messageId);
};

export default sendMail;
