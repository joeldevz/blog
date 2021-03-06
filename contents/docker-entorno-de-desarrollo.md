---
metaTitle: ¿Cómo usar Swagger para Express?
meta_description: Es el momento de documentar tu API que contruiste en Express y Nodejs
author: Joeldev
title: Docker | Entorno de Desarrollo
slug: docker-entorno-de-desarrollo
date: "31-05-2020"
img: /img/header/dockerEntornodedesarrollo.png
icon: [docker, nodejs]
---

Hoy aprenderemos a crear un entorno de desarrollo local en docker para nuestras
aplicaciones. Con la siguiente configuración tendremos la opción de <b>LiveReload</b>, cada cambio que hagamos en nuestra aplicación el contenedor de docker actualizará sus archivos.

<br/>
<div class="w-full">
    <div class="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
        <div class="block text-gray-700 text-lg font-semibold py-2 px-2">
        Index 
        </div>
        <div class="py-3 text-sm">
            <a href="#configurando" class=" flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span class="bg-indigo-400 h-2 w-2 m-2 rounded-full"></span>
                <div class="flex-grow font-medium px-2">Configurando archivos de Docker</div>
            </a>
            <a href="#buildApi" class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span class="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                <div class="flex-grow font-medium px-2">Crear nuestra Api en Nodejs</div>
            </a>
            <a href="#commandDocker" class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span class="bg-indigo-400 h-2 w-2 m-2 rounded-full"></span>
                <div class="flex-grow font-medium px-2">Comandos de Docker</div>
            </a>
        </div>
    </div>

</div>

<h2 id="configurando" class="text-center">CONFIGURANDO ARCHIVOS DE DOCKER</h2>

<br/>

Para este ejemplo vamos a crear una carpeta para nuestro proyecto, donde crearemos una carpeta con el nombre <span class="border border-indigo-500 rounded px-2"> api </span>para nuestra aplicación, en este caso utilizaremos <b >NodeJs</b>. Accederemos a la carpeta api y ejecutamos el comando <span class="border border-indigo-500 rounded px-2"> npm init -y</span> para iniciar con el proyecto.
Incluiremos en la raiz del proyecto dos archivos <span class="border border-indigo-500 rounded px-2"> docker-compose.yml & Dockerfile </span>. Nos debería quedar la siguiente estructura de carpetas.

<br/>

```js
//Estructura de Carpeta
├───app
│   ├───package.json
│   └───app.js
│
├───Dockerfile
└───docker-compose.yml

```

Luego cambiaremos el contenido del fichero <span class="border border-indigo-500 rounded px-2"> package.json</span>.

```json
//package.json
{
  "name": "project",
  "scripts": {
    "start": "nodemon -L app.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
```

<br/>

Procederemos a la configuración de DockerFile

```Dockerfile
#Dockerfile

FROM node:12.4.0 #imagen y version a utilizar
LABEL maintainer="info@joeldev.es" #Opcional | indica quien maneja esta imagen
WORKDIR /app #creaa una carpeta dentro del contendor
COPY app/ . #copia nuestra aplicación en el contenedor
```

<br>
En este archivo estamos indicando a docker que utilizaremos la imagen de NojeJS versión 12.4.0 como base para nuestro proyecto, y que se dirija al directorio /api. Por último que copie toda nuestra carpeta api en el contenedor.
<br/>
En el fichero docker-compose.yml debe tener la siguiente configuración:

```yml
#docker-compose.yml
version: "3"
services:
  web:
    build: .
    command: sh -c "npm install; npm run start"
    volumes:
      - ./api/:/api
    ports:
      - 3001:3001
```

Este archivo nos reducirá el código tanto en el archivo Dockerfile como los comandos al momento de correr nuestro contendor. También nos servirá para enlazar y definir otros contenedores.

Ahora explicaremos que estamos definiendo en este archivo:

<div class="p-4">

- En la primera línea declaramos que versión de docker-compose estamos utilizando es opcional.

<br>

- En segunda línea encontramos <span class="border-b font-semibold border-indigo-500">SERVICES:</span> y como su nombre indica, declararemos todos nuestros servicios, en este caso crearemos nuestro servicio WEB:.

<br>

- <span class="border-b font-semibold border-indigo-500">BUILD:</span> Indica que imagen de Dockerfile tiene que usar. Recibe como parámetro un directorio. Nosotros utilizamos <span class="border-b font-semibold border-indigo-500">.</span> ya que nuestro Dockerfile se encuentra en el directorio principal.

<br>

- <span class="border-b font-semibold border-indigo-500">COMMAND:</span> Indicamos que comando tiene que ejecutar al correr el contendor. En nuestro caso abrirá una terminal shell en el contendor ejecutará npm install y npm run start.

<br>

- <span class="border-b font-semibold border-indigo-500">VOLUMES: </span> Nos permite enlazar nuestro directorio local con el directorio que se encuentra dentro del contenedor.

<br>

- <span class="border-b font-semibold border-indigo-500">PORTS:</span> Exponemos el puerto o puertos que hayamos definido fuera del contenedor. En este caso el puerto es 3001

<br>

</div>

<h2 id="buildApi" class="text-center"> Crear nuestra API en NODEJS</h2>
<br/>

Ahora crearemos un servidor web con express en el fichero app.js:

```js
const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send(`Hello World!`);
});

app.listen(port, (err) => {
  console.log(`Server running on port ${port}`);
});
```

<br/>
<h2 id="commandDocker" class="text-center"> COMANDOS DE DOCKER</h2>
<br/>

Ahora ejecutaremos los siguientes comandos:

```js
//Crear una imagen de nuestra app
docker-compose build

//Ejecutar y crear contendor
docker-compose up

//Resultado
web_1  | added 175 packages, and audited 176 packages in 12s
web_1  |
web_1  | found 0 vulnerabilities
web_1  |
web_1  | > start
web_1  | > nodemon -L app.js
web_1  |
web_1  | [nodemon] 2.0.7
web_1  | [nodemon] to restart at any time, enter `rs`
web_1  | [nodemon] watching path(s): *.*
web_1  | [nodemon] watching extensions: js,mjs,json
web_1  | [nodemon] starting `node app.js`
web_1  | Server running on port 3001
```

<br/>

Como podemos observar en nuestra terminal, el servidor está escuchando en el puerto 3001. Si abrimos nuestro navegador con la siguiente dirección
<a href="http://locahost:3001" target="_blank">http://locahost:3001</a> y veremos esto:

<br/>

 <img class="w-full rounded" src="/img/ej-docker-entorno.png" alt="Captura ejemplo docker entorno con nodejs">
 <br>

Sin cerrar nuestro contenedor de docker, cambiaremos el mensaje que se muestra.

```
 Hello World => Hello Docker.
```
<br/>

 <img class="w-full rounded" src="/img/ej-docker-entorno-1.png" alt="Captura ejemplo docker entorno con nodejs">
 <br>
Y se actualiza sin problema. Gracias a esta manera de configurar Dockerfile tenemos un entorno de desarrollo que en un futuro podremos llevar a producción sin complicaciones y nos aseguramos que funcione en cualquier máquina.

