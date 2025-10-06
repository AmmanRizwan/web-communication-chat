import express, { Request, Response } from "express";
import cors from "cors";
import env from "./config/env";
import { logger } from "./utils/logger";
import pinoLogger from "./middleware/logger";

const PORT = env.PORT;
const ALLOW_ORIGIN = env.ALLOW_ORIGIN;

const app = express();

app.use(cors(
  {
    origin: ALLOW_ORIGIN.split(","),
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }
));
app.use(pinoLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "OK"});
})

app.listen(PORT, () => {
  logger.info(`Server is running on port: ${PORT}`);
})