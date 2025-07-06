document.getElementById("imageInput").addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const imageDataUrl = e.target.result; // Base64-Bild

    // Setze das Bild als Hintergrund von .container
    const container = document.querySelector(".container");
    container.style.backgroundImage = `url(${imageDataUrl})`;
    container.style.backgroundSize = "cover";
    container.style.backgroundPosition = "center";
    container.style.backgroundRepeat = "no-repeat";
  };

  reader.readAsDataURL(file); // Lese Bild als Base64
});


document.addEventListener('DOMContentLoaded', function() {
    hide('KleidungsKategorieLabel');
    hide('KleidungsKategorieSelect');
    hide('KleidungsGrößeSelectLabel');
    hide('KleidungsGrößeSelect');
    hide('RequisitenGrößeLabel');
    hide('RequisitenGrößeSelect');
    hide('BuehnenbildKategorieSelect');
    hide('BuehnenbildKategorieLabel');

    document.getElementById('categorySelect').addEventListener('change', function() {
        if (this.value === 'Kleidung') {
            show('KleidungsKategorieLabel');
            show('KleidungsKategorieSelect');
            show('KleidungsGrößeSelectLabel');
            show('KleidungsGrößeSelect');

            hide('RequisitenGrößeLabel');
            hide('RequisitenGrößeSelect');
            hide('BuehnenbildKategorieSelect');
            hide('BuehnenbildKategorieLabel');
        } else if (this.value === 'Requisite') {
            show('RequisitenGrößeLabel');
            show('RequisitenGrößeSelect');

            hide('KleidungsKategorieLabel');
            hide('KleidungsKategorieSelect');
            hide('KleidungsGrößeSelectLabel');
            hide('KleidungsGrößeSelect');
            hide('BuehnenbildKategorieSelect');
            hide('BuehnenbildKategorieLabel');
        } else if (this.value === 'Bühnenbild') {
            show('BuehnenbildKategorieLabel');
            show('BuehnenbildKategorieSelect');

            hide('KleidungsKategorieLabel');
            hide('KleidungsKategorieSelect');
            hide('KleidungsGrößeSelectLabel');
            hide('KleidungsGrößeSelect');
            hide('RequisitenGrößeLabel');
            hide('RequisitenGrößeSelect');
        } else {
            // Falls nichts ausgewählt ist, alles ausblenden
            hide('KleidungsKategorieLabel');
            hide('KleidungsKategorieSelect');
            hide('KleidungsGrößeSelectLabel');
            hide('KleidungsGrößeSelect');
            hide('RequisitenGrößeLabel');
            hide('RequisitenGrößeSelect');
            hide('BuehnenbildKategorieSelect');
            hide('BuehnenbildKategorieLabel');
        }
    });

    function show(id) {
        const el = document.getElementById(id);
        if (!el) console.log("FEHLT:", id);
        else el.style.display = '';
    }
    function hide(id) {
        const el = document.getElementById(id);
        if (!el) console.log("FEHLT:", id);
        else el.style.display = 'none';
    }});