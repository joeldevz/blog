---
metaTitle: ¿Cómo usar Swagger para Express?
meta_description: Es el momento de documentar tu API que contruiste en Express y Nodejs
author: Joeldev
title: Docker | Entorno de Desarrollo
slug: docker-entorno-de-desarrollo
date: "31-05-2020"
icon: docker
---

Hoy aprenderemos a crear un entorno de desarrollo local en docker para nuestras
aplicaciones. Con la siguiente configuración tendremos la opción de <b>LiveReload</b>, cada cambio que hagamos en nuestra aplicación el contenedor de docker lo muestrará.

<br/>
<div class="w-full">
    <div class="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
        <div class="block text-gray-700 text-lg font-semibold py-2 px-2">
        Index 
        </div>
        <div class="py-3 text-sm">
            <a href="#Swagger" class=" flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span class="bg-indigo-400 h-2 w-2 m-2 rounded-full"></span>
                <div class="flex-grow font-medium px-2">¿Qué es Docker?</div>
            </a>
            <a href="#Swagger" class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span class="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                <div class="flex-grow font-medium px-2">Instalar Paquetes</div>
            </a>
            <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span class="bg-indigo-400 h-2 w-2 m-2 rounded-full"></span>
                <div class="flex-grow font-medium px-2">Adam Wathan</div>
            </div>
            <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span class="bg-indigo-400 h-2 w-2 m-2 rounded-full"></span>
                <div class="flex-grow font-medium px-2">Duke Street Studio Inc.</div>
            </div>
            <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span class="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                <div class="flex-grow font-medium px-2">Jeffrey Wey</div>
            </div>
        </div>
    </div>
</div>

<h2 id="Swagger" class="text-center"> ¿QUÉ ES SWAGGER?</h2>

<br/>

Para este Ejemplo vamos a crear una carpera para nuestro proyecto, donde crearemos una carpeta con el nombre <span class="border border-indigo-500 rounded px-2"> api </span>para nuestra aplicación en este caso utilizaremos <b >NodeJs</b>. Accederemos a la carpeta api y ejecutarémos el comando <span class="border border-indigo-500 rounded px-2"> npm init -y</span> para iniciar con el proyecto.
Ahora incluiremos en la raiz del proyecto dos archivo <span class="border border-indigo-500 rounded px-2"> docker-compose.yml & Dockerfile </span>. Nos debería quedar la siguiente estructura de carpetas.

```js
//Estructura de Carpeta
├───app
│   └───app.js
├───Dockerfile
└───docker-compose.yml

```

 Luego cambiaremos el contenido del fichero <span class="border border-indigo-500 rounded px-2"> package.json </span>.

```json
//package.json
{
  "name": "project",
  "scripts": {
    "start": "nodemon app.js"
  },
  "dependencies": {
    "express": "^4.x.x"
  },
  "devDependencies": {
    "nodemon": "*"
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
Para entender mejor lo que vamos hacer te recomendamos que descargues nuestro proyecto de ejemplo:

<br>

<a target="_blank" href="" class="shadow-md  w-full flex h-40 transition duration-700 ease-in-out transform hover:scale-105">
   <img class="h-full sm:w-4/12  object-cover rounded-lg rounded-r-none pb-5/6" src="https://avatars.githubusercontent.com/u/36200065?s=460&amp;u=716bb599507273f3f27fb68982ebf76015da71cc&amp;v=4" alt="bag">
   <div class="w-full  px-4 py-4 bg-white rounded-lg">
      <div class="flex items-center">
         <p class="text-lg text-gray-800 font-medium mr-auto">Your Travel Buddy</p>
      </div>
      <p class="text-sm text-gray-700 mt-4">
         Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi <br>
         <small class="text-indigo-500">Github</small>
      </p>
      
   </div>
</a>

<br>

El proyecto que se encuentra en el repositorio incluye 2 rutas <span class="text-indigo-500">GET | POST</span>
donde crearemos, obtendremos usuarios .

<br>

<h2 id="install" class="text-center"> INSTALACIÓN DE PAQUETES</h2>

<br>

Para comenzar con esta practica tendremos que instalar los paquetes necesarios usando npm:

```js
/*
instalará los paquetes
del proyecto descargado
*/
npm install

npm swagger-ui-express --save

npm install swagger-jsdoc --save
```

<br>

Ahora explicaremos un poco la funcionalidad de cada packete.
<span class="text-indigo-500 font-bold">Swagger-ui-express</span> agregará un middleware a nuestra API y nos ofrecerá una interfaz de usuario para observar nuestros endpoint, mientras que <span class="text-indigo-500 font-bold">swagger-jsdoc</span> agrega una etiqueta a nuestro bloque de comentarios.
Vamos a configurar nuestra api, para que se proccese en el endpoint <span class="text-indigo-500 font-bold">/docs</span>
