export interface ISendMail {
  to: string;
  template: string;
  subject: string;
  context: object;
}
