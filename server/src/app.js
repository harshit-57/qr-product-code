import express from "express";
import Routes from "./routes/routes.js";
import { config } from "dotenv";
import dotenv from "dotenv";
import Middleware from "./middlewares/middleware.js";
dotenv.config({
  path: `${process.env.NODE_ENV ? ".env." + process.env.NODE_ENV : ".env"}`,
});
import bodyParser from "body-parser";
import Connection from "./middlewares/connection.js";

/**
 * @class App
 */
export class App {
  // set app to be of type express.Application
  constructor() {
    config();
    this.app = express();
    this.app.use(bodyParser.json({ limit: "1000mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "1000mb", extended: true })); // Ensure extended option is set
    this.app.use(express.json({ limit: "1000mb" }));
    this.app.use(express.urlencoded({ limit: "1000mb", extended: true })); // Ensure extended option is set
    Middleware.init(this);
    Connection.init(this);
    Routes.init(this);
    // CronJobs.init();
  }
}

export default new App().app;
