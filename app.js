import express from "express";
import fileUpload from "express-fileupload";
import router from "./routes/avatar.routes.js";

const app = express();

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    limits: { fileSize: 2 * 1024 * 1024 },
  }),
);
app.use(router);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
