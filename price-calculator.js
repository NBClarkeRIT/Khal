const examples = document.querySelectorAll(".example");
const preview = document.querySelector(".preview");
const outline = document.querySelector(".outline");
const images = [
    "Images/head.png",
    "Images/partial.png",
    "Images/full-partial.png",
    "Images/planti-full.png",
    "Images/digi-full.png"
];

const outlines = [
    "Images/outline.png",
    "Images/planti-outline.png"
]
function switchColor(){

}

examples.forEach(el => {
    el.addEventListener("click", () => {
        examples.forEach(e => e.classList.remove("active"));
        el.classList.add("active");
        const index = el.dataset.img;
        preview.src = images[index];

        if(index === "3"){
            
            outline.src = outlines[1];
        }
        else{
            outline.src = outlines[0];
        }
    });
});