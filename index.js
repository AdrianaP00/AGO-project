const express = require("express");
const cors = require("cors");

const { connect } = require("./src/utils/db");
connect();

const PORT = process.env.PORT;



const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();
const chatRoutes = require("./src/api/routes/chat.routes");
const userRoutes = require("./src/api/routes/user.routes");
const advRoutes = require("./src/api/routes/advertisement.routes");
const commentRouter = require("./src/api/routes/comment.routes");
const jobRoutes = require("./src/api/routes/job.routes");
const companyRoutes = require("./src/api/routes/company.routes");
const mapRoutes = require("./src/api/routes/map.routes");
const formRouter = require("./src/api/routes/form.routes");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AGO-BACK Documentation",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5003",
        description: "AGO API Documentation",
      },
    ],
  },
  // This is to call all the file
  apis: ["./src/api/**/*.js"],
};

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({
    // origin: "*",
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use("/chat", chatRoutes);
app.use("/user", userRoutes);
app.use("/comments", commentRouter);
app.use("/advertisement", advRoutes);
app.use("/jobs", jobRoutes);
app.use("/company", companyRoutes);
app.use("/map", mapRoutes);
app.use("/form", formRouter);

const specs = swaggerJsDoc(options);

app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(specs, { customCssUrl: CSS_URL })
);

app.listen(PORT, () =>
  console.log(`escuchando en el puerto http://localhost:${PORT}`)
);

module.exports = app;
