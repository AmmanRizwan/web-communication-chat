import nodemailer from "nodemailer";
import env from "../config/env";

const transport = nodemailer.createTransport({
  service: env.STMP.SERVICE as string,
  host: env.STMP.HOST as string,
  port: parseInt(env.STMP.PORT as string),
  secure: false,
  auth: {
    user: env.STMP.USER as string,
    pass: env.STMP.PASS as string,
  }
})