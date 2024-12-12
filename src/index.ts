import express, { Express, Request, Response } from "express";
import "dotenv/config";

const app: Express = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
    res.send("Everything is working fine ✨");
});

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
