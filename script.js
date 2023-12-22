let animatedPerfumeBTL = document.getElementById("animatedPerfumeBTL");
let addToCartBtn = document.getElementById("addToCart");

animatedPerfumeBTL.addEventListener('mousemove', (dets) => {
    let x = Math.round((dets.clientX * 0.01));
    let y = Math.round((dets.clientY * 0.01));

    animatedPerfumeBTL.style.left = -x + "px";
    animatedPerfumeBTL.style.top = -y + "px";
});
