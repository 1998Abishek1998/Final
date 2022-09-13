require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

const authRoutes = require("./routes/authRoutes");
const friendInvitationRoutes = require("./routes/friendInvitationRoutes");
const authRouter = require("./routes/authRoute.js");
const postRouter = require("./routes/postRoute.js");
const profileRouter = require("./routes/profileRoute.js");
const commentRouter = require("./routes/commentRoute.js");
const companyRouter = require("./routes/companyRoute.js");
const morgan = require("morgan");


const errorHandlerMiddleware = require("./middlewares/error-handler");
const notFoundMiddleware = require("./middlewares/not-found");
const authenticateUser = require("./middlewares/auth.js");

const { createSocketServer } = require("./socket/socketServer");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
// register the routes
app.use("/api/auth", authRoutes);
app.use("/api/invite-friend",authenticateUser, friendInvitationRoutes);
app.use(express.static("./public"));
app.use(express.json());
app.use(fileUpload());
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", authenticateUser, postRouter);
app.use("/api/v1/profile",authenticateUser,profileRouter);
app.use("/api/v1/comment",authenticateUser,commentRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const server = http.createServer(app);

// socket connection
createSocketServer(server);

const MONGO_URI =
    process.env.NODE_ENV === "production"
        ? process.env.MONGO_URI
        : process.env.MONGO_URI_DEV;


mongoose
    .connect(MONGO_URI)
    .then(() => {

        server.listen(PORT, () => {
            console.log(`SERVER STARTED ON ${PORT}.....!`);
        });
    })
    .catch((err) => {
        console.log("database connection failed. Server not started");
        console.error(err);
    });
