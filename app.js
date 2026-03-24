import express from "express";
import fileUpload from "express-fileupload";
import router from "./routes/avatar.routes.js";

const app = express();

// Se configura fileupload para evitar problemas de memoria
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  }),
);
app.use(router);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
