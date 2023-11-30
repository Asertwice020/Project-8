const back = document.querySelector("#back");

// FLOWTING CRSR
var crsr1 = document.querySelector("#flowtingCursor");
window.addEventListener("mousemove", (dets) => {
  (crsr1.style.left = dets.x + "px");
  (crsr1.style.top = dets.y + "px");
});

// MOUSE OVER AND MOUSE LEAVE
// back.addEventListener('mousemove', () => {
//     back.style.transform = `scale(1.04)`;
// })

// back.addEventListener('mouseleave', () => {
//     back.style.transform = `scale(1)`;
// })

// SHERY JS
Shery.imageEffect('#back', {
    style: 5,
    debug: true
})