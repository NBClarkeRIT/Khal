const examples = document.querySelectorAll(".example");

examples.forEach(el => {
    el.addEventListener("click", () => {
        examples.forEach(e => e.classList.remove("active"));
        el.classList.add("active");
    });
});