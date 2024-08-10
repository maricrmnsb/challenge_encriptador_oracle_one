document.addEventListener('DOMContentLoaded', () => {
    // Asegurarse de que la imagen placeholder esté visible al cargar la página
    document.getElementById('placeholderImage').style.display = 'block';
    document.getElementById('outputContainer').style.display = 'none';
});

function validateInput() {
    const inputText = document.getElementById('inputText');
    inputText.value = inputText.value.replace(/[^a-z\s]/g, '');
}

function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
    document.getElementById('outputContainer').style.display = 'flex'; // Mostrar el contenedor
    document.getElementById('placeholderImage').style.display = 'none'; // Ocultar la imagen
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
    document.getElementById('outputContainer').style.display = 'flex'; // Mostrar el contenedor
    document.getElementById('placeholderImage').style.display = 'none'; // Ocultar la imagen
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');

    // Resetear la vista después de copiar
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
    document.getElementById('outputContainer').style.display = 'none'; // Ocultar el contenedor
    document.getElementById('placeholderImage').style.display = 'block'; // Mostrar la imagen
    alert('Texto copiado al portapapeles');
}