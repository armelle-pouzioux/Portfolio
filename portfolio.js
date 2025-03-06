document.getElementById('hamburger').addEventListener('change', function() {
    const logo = document.getElementById('hamburger-logo');
    if (this.checked) {
        logo.textContent = "X"; // Remplace par une croix
    } else {
        logo.textContent = "☰"; // Remplace par un burger
    }
});