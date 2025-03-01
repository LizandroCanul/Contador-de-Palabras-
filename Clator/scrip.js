document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');
    
    // Función para contar palabras
    function contarPalabras(texto) {
        if (!texto.trim()) return 0;
        
        // Dividir por espacios y filtrar elementos vacíos
        return texto.trim().split(/\s+/).filter(palabra => palabra.length > 0).length;
    }
    
  
    textInput.addEventListener('input', function() {
        const texto = this.value;
        const cantidadPalabras = contarPalabras(texto);
        wordCount.textContent = cantidadPalabras;
    });
    

    textInput.focus();
});
