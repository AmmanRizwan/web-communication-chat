import dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  ALLOW_ORIGIN,
  JWT_SECRET
} = process.env;

if (!PORT) {
  throw new Error("PORT is not set!");
}

if (!ALLOW_ORIGIN) {
  throw new Error("ALLOW_ORIGIN is not set");
}

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not set");
}

const config = {
  PORT: PORT,
  ALLOW_ORIGIN: ALLOW_ORIGIN,
  JWT: {
    SECRET: JWT_SECRET
  }
}

export default config;