import express, { Express } from "express";
import cors from "cors";

import * as nodeMailerController from "./controllers/nodeMailerController/nodeMailerController";

const PORT: number = 3500;
const app: Express = express();

app.use(
    cors({
        origin: ["https://elixirivtherapy.com", "https://elixir-iv-backend.vercel.app"],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    }),
    express.json()
);

app.post("/api/sendMail", nodeMailerController.sendMail);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}🚀`);
});

export default app;
