document.getElementById('categorySelect').addEventListener('change', function() {
    // Alle Unter-Selects ausblenden
    document.getElementById('KleidungSelect').style.display = 'none';
    document.getElementById('RequisiteSelect').style.display = 'none';
    document.getElementById('BuehnenbildSelect').style.display = 'none';

    // Je nach Auswahl das passende Select anzeigen
    if (this.value === 'Kleidung') {
        document.getElementById('KleidungSelect').style.display = '';
    } else if (this.value === 'Requisite') {
        document.getElementById('RequisiteSelect').style.display = '';
    } else if (this.value === 'Bühnenbild') {
        document.getElementById('BuehnenbildSelect').style.display = '';
    }
});