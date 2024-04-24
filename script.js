(function(){
    
    // Iniciamos las variables que estamos utilizanod.
    var originalTitle;
    var sameMarvelousPage = false;

    /**
     * Cambia el título del documento html
     * @param {string} title 
     */
    var setPageTitle = function(title){
        document.title = title
    }

    /**
     * Verifica el estado de visibilidad de la pestaña.
     * Si esta oculta (o no es visible) cambia el título del documento a "Te echamos de menos..."
     * De lo contrario, si es o vuelve a estar visible, regresa el título original.
     */
    var doOnTabChange = function(){
        if(document.visibilityState === 'hidden' && !sameMarvelousPage){
            setPageTitle("Te echamos de menos...")
        }else{
            setPageTitle(originalTitle);
            sameMarvelousPage = false;
        }
    }

    /**
     * Interrumpe el evento del click, para verificar si el enlace al que se está dirigiendo el usuario esta dentro o fuera
     * del mismo dominio del documento.  De ser así, lo indica a través de la bandera establecida.
     * @param {Event} event 
     */
    var doOnLinkClick = function(event){
        event.preventDefault();
        targetUrl = new URL(event.target.href);
        if(targetUrl.hostname == window.location.hostname){
            sameMarvelousPage = true;
        }else{
            sameMarvelousPage = false;
        }
        window.open(event.target.href);
    }

    /**
     * Agrega las escuchas a los eventos necesarias para ejecutar la funcionalidad requerida.
     * Los eventos que escucha son el cambio de visibilidad de la pestaña (visibilitychange)
     * y el click en todos los enlaces del documento.
     */
    var addEvents = function(){
        document.addEventListener('visibilitychange', doOnTabChange);
        var links = document.querySelectorAll('a');
        links.forEach(function(currentLink){
            currentLink.addEventListener('click', doOnLinkClick);
        });
    }

    // Aquí agregamos una escucha al evento de carga del DOM.  Cuando esté cargado completamente, agregamos los demás eventos
    // a sus correspondientes elementos dentro del DOM.
    document.addEventListener('DOMContentLoaded', () => {
        originalTitle = document.title;
        addEvents();
    })
    
})();