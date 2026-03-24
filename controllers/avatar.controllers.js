export const procesarArchivo = (req, res) => {
  // console.log(req.files);
  if (!req.files || !req.files.avatar) {
    return res.status(400).json({ error: "No se proceso ningun archivo" });
  }

  const avatar = req.files.avatar;
  const userId = req.params.userId;

  const allowedExtensions = ["png", "jpg", "webp", "jpeg", "gif"];

  const fileName = avatar.name;

  const extension = fileName.split(".").pop().toLowerCase();

  if (!allowedExtensions.includes(extension)) {
    return res.status(400).json({
      error: "Extension de archivo no permitida",
    });
  }

  // ruta de destino
  const uploadPath = `uploads/avatars/${userId}.${extension}`;

  avatar.mv(uploadPath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "Error al guardar el archivo",
      });
    }

    res.json({
      mensaje: "Avatar subido exitosamente",
    });
  });
};
