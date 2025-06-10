function aktualizujZegar() {
    const teraz = new Date();
    const godzina = String(teraz.getHours()).padStart(2, '0');
    const minuta = String(teraz.getMinutes()).padStart(2, '0');
    const sekunda = String(teraz.getSeconds()).padStart(2, '0');
    document.getElementById('zegar').textContent = `${godzina}:${minuta}:${sekunda}`;
}

setInterval(aktualizujZegar, 1000);
aktualizujZegar(); // Wywołaj funkcję na początku, aby natychmiast pokazać czas