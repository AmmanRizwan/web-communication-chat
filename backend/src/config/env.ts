import dotenv from 'dotenv';

dotenv.config();

const {
  NODE_ENV,
  PORT,
  ALLOW_ORIGIN,
  JWT_SECRET,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_HOST,
  STMP_SERVICE,
  STMP_HOST,
  STMP_USER,
  STMP_PASS,
  STMP_PORT,
  STMP_NAME,
  STMP_EMAIL,
} = process.env;

if (!NODE_ENV) {
  throw new Error('NODE_ENV is not set');
}

if (!PORT) {
  throw new Error('PORT is not set!');
}

if (!ALLOW_ORIGIN) {
  throw new Error('ALLOW_ORIGIN is not set');
}

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not set');
}

if (!DATABASE_HOST) {
  throw new Error('DATABASE_HOST is not set');
}

if (!DATABASE_NAME) {
  throw new Error('DATABASE_NAME is not set');
}

if (!DATABASE_PASSWORD) {
  throw new Error('DATABASE_PASSWORD is not set');
}

if (!DATABASE_PORT) {
  throw new Error('DATABASE_PORT is not set');
}

if (!DATABASE_USER) {
  throw new Error('DATABASE_USER is not set');
}

if (!STMP_SERVICE) {
  throw new Error('STMP_SERVICE is not set');
}

if (!STMP_HOST) {
  throw new Error('STMP_HOST is not set');
}

if (!STMP_USER) {
  throw new Error('STMP_USER is not set');
}

if (!STMP_PASS) {
  throw new Error('STMP_PASS is not set');
}

if (!STMP_PORT) {
  throw new Error('STMP_PORT is not set');
}

if (!STMP_EMAIL) {
  throw new Error('STMP_EMAIL is not set');
}

if (!STMP_NAME) {
  throw new Error('STMP_NAME is not set');
}

const config = {
  NODE_ENV,
  PORT,
  ALLOW_ORIGIN,
  JWT: {
    SECRET: JWT_SECRET,
  },
  DB: {
    NAME: DATABASE_NAME,
    USER: DATABASE_USER,
    PASS: DATABASE_PASSWORD,
    HOST: DATABASE_HOST,
    PORT: DATABASE_PORT,
  },
  STMP: {
    HOST: STMP_HOST,
    PORT: STMP_PORT,
    USER: STMP_USER,
    PASS: STMP_PASS,
    SERVICE: STMP_SERVICE,
    NAME: STMP_NAME,
    EMAIL: STMP_EMAIL,
  },
};

export default config;
