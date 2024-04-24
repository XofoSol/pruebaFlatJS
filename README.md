# Prueba Técnica Javascript
Desarrolla un snippet en JavaScript para https://www.flat101.es/ que cuando cambies de
pestaña, cambie el título de la página a “Te echamos de menos...” y cuando vuelvas a la
página restablezca el título original.
Tendrá que respetar las siguientes normas:
- Solo usar JavaScript, si hay que modificar el HTML, que lo haga el JS.
Opcional:
- solo se active si sales a una pestaña que no sea de https://www.flat101.es/.
- solo se active en una sola pestaña de Flat101, la última en la que estuviste.

## Uso:

Simplemente agregar el javascript al documento html donde se quiera ejecutar.  Puede agregarse en cualquier posición del documento, ya que se ejecuta hasta que el DOM esté cargado.

```
<script src="script.js"></script>
```

## Restricciones Técnicas:
Dado que javascript no puede controlar la información de otras pestañas del navegador, salvo la pestaña en donde se está ejecutando (al menos no sin crear un plugin para el navegador directamente), el control de los dos flujos opcionales únicamente se puede llevar a cabo si el usuario sale de la pestaña a través de un enlace dentro del documento.  
Si el usuario sale a través del mismo navegador (cambiando de pestaña o abriendo una nueva), se ejecutará el flujo por default.

## Ejemplos de uso:
Dentro de éste repositorio, además del archivo javascript hay dos ejemplos de uso en html:
- index.html
- sigoaqui.html

Además, incluimos un docker-compose para que pueda ejecutarse el ejemplo en un entorno aislado y completamente funcional.
Para ejecutar este entorno, basta con iniciar el contenedor de docker a través del comando 

```
docker-compose up -d
```

El ejemplo se ejecutará en la url http://localhost:8000