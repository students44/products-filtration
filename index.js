document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("myinput");
    const noResults = document.getElementById("no-results");

    input.addEventListener("keyup", function () {
      const value = input.value.toLowerCase();
      const cards = document.querySelectorAll(".card");
      let matchFound = false;

      cards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();
        const parent = card.closest(".col-md-4");

        if (cardText.includes(value)) {
          parent.style.display = "";
          matchFound = true;
        } else {
          parent.style.display = "none";
        }
      });

      // Show or hide "No records found" message
      noResults.style.display = matchFound ? "none" : "block";
    });
  });