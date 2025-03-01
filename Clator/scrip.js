document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');
    
    function contarPalabras(texto) {
        if (!texto || !texto.trim()) {
            return 0;
        }
        

        const palabras = texto.trim().split(/\s+/).filter(palabra => palabra.length > 0);
        
        return palabras.length;
    }
    
   
    textInput.addEventListener('input', function() {
        const texto = this.value;
        const cantidadPalabras = contarPalabras(texto);
        

        wordCount.textContent = cantidadPalabras;
    });


    function animateValue(element, start, end, duration) {
        if (start === end) {
            element.textContent = end;
            return;
        }

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            
            element.textContent = value;
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        
        window.requestAnimationFrame(step);
    }

 
    textInput.focus();
});
