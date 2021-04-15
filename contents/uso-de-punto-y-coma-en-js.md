---
metaTitle: Uso de punto y como en javascript
meta_description: Buenas
author: Joeldev
title: Uso de punto y como en javascript
slug: uso-de-punto-y-coma-en-js
date: "19-02-2021"
icon: [javascript]
---
El uso del punto y coma ***__;__*** es un caracter fundamental para muchos lenguajes de programación. En ___ JavaScript ___ no es requerido el uso de este caracter. Tu aplicación funcionará correctamente gracias al [**ASI**](#asd) que explicaremos más adelante. También desmintiremos los siguientes mitos sobre el punto y coma en a *** JavaScript ***.

<br>

> “El punto y como es necesario en todo momento” 🤔 


> “El punto y como no es necesario” 🤔 

<br>

## ¿Qué es el Automatic Semicolon Insertion?

<br>

Como hemos dicho al principo del post Javascript nos dá la opcion de utilizar **;**, y en el caso que no usemos el punto y coma, javascript hace uso del ***ASI*** que inserta o coloca un **;** en algunos lugares de su codigo donde sea necesario. Pero a veces si omitimos el **;** nuestro programa tendrá un comportamiento no deseado.<br>
Debes tener encuenta que **ASI** está activado por defecto y forma parte de este lenguaje. Debes aprender como funciona para no tener fallos al momento de ejecutar tu programa.

Veamos algunos ejemplos para enterder mejor como funciona el **ASI:**

<br>

+ Un salto de linea **"\n"** terminará con una sentencia cuando:


<br>

Si la linea contiene -- o ++

<br>

```js
//EJEMPLO-1
function sumar (){
    let number = 1
    let number1 = 1
    number
    ++
    number1
    return {number,number1}
}
console.log(sumar()) //{1,2}
```
**ASI** lo detecta de la siguiente forma
```js
//EJEMPLO-2
function sumar (){
    let number = 1
    let number1 = 1
    number
    ++number1
    return {number,number1}
}
console.log(sumar()) //{1,2}
```
Pero nadie en su sano juicio escribiría algo parecido al **EJEMPLO-1**.


Veamos otro ejemplo donde nuestro programa hace cosas no deseada:
```js
//EJEMPLO-3
fun('¿Dará erro?')
[🍲, 🥘, 🍔].map(food => {
  return food
})
```
Como podemos observar parece estar todo bien y todo correcto, pero **ASI** lo entenderá de la siguiente forma y no podrá ser ejecutado por el navegador o NodeJS:
```js
//EJEMPLO-4
fun('¿Dará erro?')[🍲, 🥘, 🍔].map(food => {
  return food
})
```
Hay algo que el punto y como no podrá salvarte y es el **Restricted Producions**. 
Te acuerdas que dije:
> Un salto de linea **"\n"** terminará con una sentenciaç

En los return, throw, break, continue, o el los operadores  ++ --, tambien les afecta mira el siguiente ejemplo:

```js
//EJEMPLO-5
function error (){
    return
    'devolver';
}
function correcto (){
    return 'devolver';
}
console.log(error()) // return undefined
console.log(correcto()) // return 'devolver'
```

<br>

### Conclusion

<br>

Como te habrás dado cuenta hemos desmentido los dos mitos y hemos aprendido que es más importante como funciona el **ASI** que la guerra de escribir o no escribir el punto y coma.
