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

//   function calculateTotal() {
//     let total = 0;

//     // Design complexity
//     const colors = Number(document.querySelector('input[name="colorNumber"]').value) || 0;
//     const details = Number(document.querySelector('input[name="detailNumber"]').value) || 0;
//     total += colors * 50;
//     total += details * 10;

//     // Head options
//     if (document.querySelector('input[name="head"]').checked) total += 1800;
//     const tongues = Number(document.querySelector('input[name="tongues"]').value) || 0;
//     total += tongues * 10;
//     if (document.querySelector('input[name="pickableNose"]').checked) total += 25;
//     const piercings = Number(document.querySelector('input[name="piercings"]').value) || 0;
//     total += piercings * 10;
//     if (document.querySelector('input[name="magneticEyelids"]').checked) total += 20;

//     // Paws
//     const paw = document.querySelector('input[name="paws"]:checked')?.value;
//     if (paw === "standard") total += 200;
//     else if (paw === "feral") total += 300;

//     // Armsleeves
//     const arm = document.querySelector('input[name="armsleeves"]:checked')?.value;
//     if (arm === "standard") total += 250;
//     else if (arm === "wingsleeves") total += 400;

//     // Tail
//     const tail = document.querySelector('input[name="tail"]:checked')?.value;
//     switch(tail) {
//         case "small": total += 65; break;
//         case "medium": total += 125; break;
//         case "large": total += 250; break;
//         case "floor": total += 350; break;
//         case "shark": total += 500; break;
//     }

//     // Feetpaws
//     const feet = document.querySelector('input[name="feetpaws"]:checked')?.value;
//     if (feet === "plantigrade") total += 400;
//     else if (feet === "digitigrade") total += 450;
//     if (document.querySelector('input[name="outdoorAddon"]').checked) total += 25;
//     if (document.querySelector('input[name="indoorAddon"]').checked) total += 50;

//     // Fullsuit add-ons
//     if (document.querySelector('input[name="zipOffFeet"]').checked) total += 20;
//     if (document.querySelector('input[name="zipOffTail"]').checked) total += 10;

//     // Display total
//     document.getElementById('totalPrice').textContent = total;
// }

// // Optional: recalc whenever inputs change
// document.querySelectorAll('input').forEach(input => {
//     input.addEventListener('input', calculateTotal);
//     input.addEventListener('change', calculateTotal); // for checkboxes/radios
// });

// // Initial calculation
// calculateTotal();
document.querySelectorAll('.scroll input').forEach(input => {
  input.addEventListener('focus', e => {
    e.preventDefault(); // stops some browsers from scrolling to top on focus
  });
});