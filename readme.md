# Proyecto: M8-E2

API backend desarrollada con Express.js que permite la gestión de usuarios y subida de archivos (avatars), utilizando middleware para manejo de archivos.

## Características

- API REST con Express

- Subida de archivos (avatars)

- Validación de tipos de archivo

- Manejo de errores HTTP

- Estructura modular

## Tecnologías

- Node.js

- Express.js

- express-fileupload

- JavaScript

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/emeaereceo/m8-e2.git
cd m8-e2
```

Instala dependencias:

```bash
npm install
```

## Ejecución

Modo desarrollo:

```bash
npm run dev
```

## Estructura del proyecto (ejemplo)

m8-e2/
│── uploads/
│ └── avatars/
│── src/
│ ├── routes/
│ ├── controllers/
│ └── app.js
│── package.json

## Endpoint: Subida de Avatar

_POST_ /upload/avatar/:userId

Sube un avatar para un usuario específico.

- Request

Params:

userId → ID del usuario

Body (form-data):

avatar → archivo de imagen

- Respuesta exitosa
  {
  "mensaje": "Avatar subido exitosamente!"
  }
  ❌ Errores posibles

400 Bad Request

No se envió archivo

Extensión no permitida

500 Internal Server Error

Error al guardar el archivo

🔒 Validaciones

Extensiones permitidas:

```yaml
png

jpg

jpeg

gif
```
