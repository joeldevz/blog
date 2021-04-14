---
metaTitle: ¿Cómo usar Swagger para Express?
meta_description: Es el momento de documentar tu API que contruiste en Express y Nodejs
author: Joeldev
title: ¿Crear Swagger para Express?
slug: swagger-api-express
date: "31-05-2020"
icon: nodejs
---

Has contruido una API-RESTFULL, y ha llegado el momento de usarla... espera que no has hecho la documentación. Bueno no pasa nada vamos ha crear la documentación para que otras personas puedan utilizar tu API o incluso tu para que puedas entender mejor tu api.

<br/>
<div class="w-full">
    <div class="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
        <div class="block text-gray-700 text-lg font-semibold py-2 px-2">
        Index 
        </div>
        <div class="py-3 text-sm">
            <a href="#Swagger" class=" flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span class="bg-indigo-400 h-2 w-2 m-2 rounded-full"></span>
                <div class="flex-grow font-medium px-2">¿Qué es Swagger?</div>
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

Es un framework para documentar **APIs Rest** desde cualquier lenguaje de programación (_JavaScript, Ruby, Java..._) e incluso archivos de configuración.
Te permite describir tus endpoints, producir, consumir y visualizar APIs. Además, ayuda a los frontend y a los tester o usuarios que buscan información sobre un fallo a entender más tu api.

<br/>

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
<span class="text-indigo-500 font-bold">Swagger-ui-express</span> agregará un middleware a nuestra API y nos ofrecerá una interfaz de usuario para observar nuestros endpoint, mientras que  <span class="text-indigo-500 font-bold">swagger-jsdoc</span> agrega una etiqueta a nuestro bloque de comentarios.
Vamos a configurar nuestra api, para que se proccese en el endpoint <span class="text-indigo-500 font-bold">/docs</span>
