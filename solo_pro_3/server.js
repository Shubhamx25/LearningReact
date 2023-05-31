import { Express } from "express";
import cors from 'cors';
import nodemailer from 'nodemailer';

let app = Express();
app.use(Express.json());
app.use(cors());

app.listen(4000, () => console.log('listening to port 4000')); 
