# my-mongo-app

Seminario - MongoDB

Este es un proyecto de [Next.js](https://nextjs.org) creado para demostrar cómo conectar una aplicación web con una base de datos MongoDB Atlas usando Mongoose como ORM.

## ⚙️ Configuración de MongoDB Atlas

Sigue estos pasos para conectar tu propio cluster:

1. Crea una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea un nuevo **proyecto**
3. Crea un nuevo **cluster gratuito** 
4. Ve a **Database Access** → agrega un usuario con contraseña
5. Ve a **Network Access** → permite acceso desde tu IP actual (`0.0.0.0/0` si es solo para pruebas)
6. Ve a **Clusters** → botón **Connect** → elige **"Connect your application"**
7. Copia la **URI de conexión** (formato):

## Iniciar el servidor de desarrollo

1. Instala las dependencias y luego corre el servidor:

bash:
npm install
npm run dev

2. En tu localhost dirigete a la ruta designada asi:
(Ej. http://localhost:3001/form)

3. Llena el formulario y da click a "Send Data" para mandar los datos a tu cluster de MongoDb

