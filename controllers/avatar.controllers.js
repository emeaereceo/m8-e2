import fs from "fs";
import path from "path";

export const procesarArchivo = async (req, res) => {
  try {
    if (!req.files || !req.files.avatar) {
      return res.status(400).json({
        error: "No se envió ningún archivo",
      });
    }

    const avatar = req.files.avatar;
    const { userId } = req.params;

    if (avatar.truncated) {
      return res.status(413).json({
        error: "El archivo excede el tamaño permitido",
      });
    }

    const allowedExtensions = ["png", "jpg", "jpeg", "gif", "webp"];
    const extension = path.extname(avatar.name).slice(1).toLowerCase();

    if (!allowedExtensions.includes(extension)) {
      return res.status(400).json({
        error: "Extensión de archivo no permitida",
      });
    }

    const fileName = `${userId}-${Date.now()}.${extension}`;

    const uploadDir = path.join(process.cwd(), "uploads", "avatars");
    const uploadPath = path.join(uploadDir, fileName);

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Utilizo async await
    await avatar.mv(uploadPath);

    return res.status(200).json({
      mensaje: "Avatar subido exitosamente",
      archivo: fileName,
    });
  } catch (error) {
    console.error("Error al subir el archivo:", error);

    return res.status(500).json({
      error: "Error interno del servidor",
    });
  }
};
