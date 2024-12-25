const express = require("express");
const cors = require("cors");
const { dataBase } = require("./Database/database");
const { route } = require("./route/routes");

const app = express();
app.use(express.json());


app.use(cors(
  {
origin:["https://crud-app-8xaw.vercel.app"],
methods:["POST","GET","DELETE","PUT"],
credentials:true
  }
  ));

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello world");
  console.log("HI ABEEHA");
});

const startServer = async () => {
  try {
    await dataBase(); // Ensure database connection before starting the server
    app.listen(PORT, () => {
      console.log(`The server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

startServer();
app.use("/", route);
