const examples = document.querySelectorAll(".example");
const preview = document.querySelector(".preview");
const outline = document.querySelector(".outline");
const whiteout = document.querySelector(".white-outline");
const images = [
    "Images/head.png",
    "Images/partial.png",
    "Images/full-partial.png",
    "Images/planti-full.png",
    "Images/digi-full.png"
];

const outlines = [
    "Images/outline.png",
    "Images/planti-outline.png",
    "Images/white-outline.png",
    "Images/planti-white-outline.png"
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
            whiteout.src = outlines[3];
        }
        else{
            outline.src = outlines[0];
            whiteout.src = outlines[2];
        }
    });
});