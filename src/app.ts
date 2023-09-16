import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
    res.send(
      `<h3 style='text-align: center; padding: 20px; color:green'>🐱‍🏍 Welcome to Book (Prisma-Backend) 🐱‍🏍</h3>`
    );
  });
export default app;
