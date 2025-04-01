document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.querySelector(".btn-blue"); // Din existerande knapp
    const modalOverlay = document.querySelector(".modal-overlay");
    const closeBtn = document.querySelector(".close-btn");

    // Öppna modalen när knappen klickas
    openBtn.addEventListener("click", () => {
        modalOverlay.classList.add("active");
    });

    // Stäng modalen när X-knappen klickas
    closeBtn.addEventListener("click", () => {
        modalOverlay.classList.remove("active");
    });

    // Stäng modalen om man klickar utanför den
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove("active");
        }
    });
});
