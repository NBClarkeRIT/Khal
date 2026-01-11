const examples = document.querySelectorAll(".example");
const tabs = document.querySelectorAll(".tab");
const scrolls = document.querySelectorAll(".scroll");
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

tabs.forEach(el =>{
    el.addEventListener("click", () =>{
        const index = el.dataset.page;
        tabs.forEach(e => e.classList.remove("enabled"));
        scrolls.forEach(e => e.classList.remove("enabled"));
        el.classList.add("enabled");
        scrolls[index].classList.add("enabled");
    })
})

function syncRangeAndNumber(rangeName, numberName) {
    const range = document.querySelector(`input[name="${rangeName}"]`);
    const number = document.querySelector(`input[name="${numberName}"]`);

    if (!range || !number) return;

    range.addEventListener("input", () => {
      number.value = range.value;
    });

    number.addEventListener("input", () => {
      let value = Number(number.value);

      if (value < range.min) value = range.min;
      if (value > range.max) value = range.max;

      number.value = value;
      range.value = value;
    });
  }
  syncRangeAndNumber("colorRange", "colorNumber");
  syncRangeAndNumber("detailRange", "detailNumber");
  syncRangeAndNumber("tongueRange", "tongueNumber");