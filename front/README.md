# Proyecto encuesta basica - Front

## Parte 1:
Crear una encuesta con los siguientes tres campos:
1. Nombre: Campo de texto plano.
2. Estado civil: Multiple opción (Soltero, Casado, Viudo, Divorciado). El encuestado solo podrá selecionar una opción.
3. Fecha de nacimiento: Usar formato mm-dd-yyyy.

Crear un botón Enviar y utilizar el metodo POST 'localhost:8080/encuesta/add' del back para guardar información en base de datos.

## Parte 2:
Generar un listado de las encuestas que fueron guardadas. Utilizando el metodo GET 'localhost:8080/encuesta/all' del back. Ejemplo dado a continuación:

    -----------------------------------------------------
    | Nombre        | Estado Civil | Fecha de nacimiento |
    ------------------------------------------------------
    | Pedro Alvarez |   Casado     |      10-08-1993     |
    | Juan Martinez |   Soltero    |      01-31-1980     |
    ------------------------------------------------------

Se puede utilizar boostrap para el estilo de las tablas y el formulario. Y se aconseja el uso de fetch para la comunicación con el back.

## Comandos básicos

1. Para correr este proyecto en modo desarrollo se debe usar `npm start`
2. Abrir [http://localhost:3000](http://localhost:3000) para verlo en el explorador.

## Para más información puede

Consultar documentación de ReactJs [React documentation](https://reactjs.org/).