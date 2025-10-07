import { logger } from '../utils/logger';
import { pinoHttp } from 'pino-http';

const pinoLogger = pinoHttp({
  logger,
});

export default pinoLogger;
