function aktualizujZegar() {
    const teraz = new Date();
    const godzina = String(teraz.getHours()).padStart(2, '0');
    const minuta = String(teraz.getMinutes()).padStart(2, '0');
    const sekunda = String(teraz.getSeconds()).padStart(2, '0');
    document.getElementById('zegar').textContent = `${godzina}:${minuta}:${sekunda}`;
}

setInterval(aktualizujZegar, 1000);
aktualizujZegar(); // Wywołaj funkcję na początku, aby natychmiast pokazać czas

const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Sprawdź zapisany tryb w localStorage i ustaw go
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

// Funkcja przełączania trybu
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Zapisz aktualny tryb w localStorage
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});