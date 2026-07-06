const btn = document.getElementById("showMoreBtn");
const hiddenImages = document.querySelectorAll(".hidden-img");

btn.addEventListener("click", () => {

    const expanded = btn.textContent === "View Less";

    if (expanded) {
        // Scroll back to the button first
        btn.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        // Wait for the scroll to finish, then hide the images
        setTimeout(() => {
            hiddenImages.forEach(img => img.classList.remove("show"));
            btn.textContent = "View More";
        }, 400);

    } else {
        hiddenImages.forEach(img => img.classList.add("show"));
        btn.textContent = "View Less";
    }

});