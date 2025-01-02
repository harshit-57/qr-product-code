import http from "http";
import app from "./src/app.js";
import {
  normalizePort,
  onError,
  onListening,
} from "./src/utils/serverHandlers.js";
import dotenv from "dotenv";

console.log("NODE_ENV : ", process.env.NODE_ENV);

dotenv.config({
  path: `${process.env.NODE_ENV ? ".env." + process.env.NODE_ENV : ".env"}`,
});

const port = normalizePort(process.env.PORT || 8002);

app.set("port", port);

const server = http.createServer(app);

// server listen
server.listen(port);

// server handlers
server.on("error", (error) => onError(error, port));

server.on("listening", onListening.bind(server));
