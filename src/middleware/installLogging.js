import morgan from "morgan";
import dotenv from "dotenv"

dotenv.config()

const isDev = process.env.NODE_ENV === "development";

export default (app) => {
    
  if (isDev) {
    // To enable logging on development, uncomment the next line:
    app.use(morgan("tiny"));
    console.log("Hello word 1")
  } else {
    app.use(morgan(isDev ? "tiny" : "combined"));
    console.log("Hello word 2")
  }
};