let loopBTN = document.querySelector("#loopBTN");
let P3Items = document.querySelectorAll(".P3Items");
let scrollXP3 = document.querySelector('#scrollXP3');
let P3maintop = document.querySelector("#P3maintop");
/////////////////////////////////////////////////////
var x = 10;
let leftArea = scrollXP3.style.left;
var i = document.createElement("i");
var loadingTxt = document.createElement("h1");
var forLoadingVideo = document.createElement('video');

loopBTN.addEventListener('mouseenter', () => {
    scrollXP3.style.opacity = ".7";
    loopBTN.style.border = "1px dotted #8d4053";
    loopBTN.style.opacity = "1";
    loopBTN.style.fontSize = ".7vw";
    loopBTN.style.width = "3.5vw";
    loopBTN.style.height = "3.5vw";
    forLoadingVideo.style.opacity = ".7";
    loadingTxt.style.opacity = "1";
})
loopBTN.addEventListener('mouseleave', () => {
    scrollXP3.style.opacity = "1";
    loopBTN.style.opacity = ".5";
    loopBTN.style.fontSize = "1vw";
    loopBTN.style.width = "4vw";
    loopBTN.style.height = "4vw";
    P3maintop.style.border = "none";
    forLoadingVideo.style.opacity = "1";
})

let NXTbtn = function () {
    loopBTN.innerHTML = "NEXT";
    loopBTN.style.display = "flex";
    loopBTN.style.alignItems = "center";
    loopBTN.style.justifyContent = "center";
    loopBTN.style.fontSize = "1vw";
    loopBTN.style.zIndex = "99";
};
NXTbtn();


loopBTN.addEventListener("click", function () {
    let xx = scrollXP3.clientWidth / P3Items.length;

    let stop = (-xx * P3Items.length) + 100;
    x = x - xx;

    if (x >= stop) {
        scrollXP3.style.left = x + "px";
        loopBTN.innerHTML = "NEXT";
        P3maintop.removeChild(i);
        P3maintop.removeChild(loadingTxt);
        P3maintop.removeChild(forLoadingVideo);
        P3maintop.style.background = "none";

        P3Items.forEach((val) => {
            val.style.transition = "all 3s";
            val.style.opacity = "1";
        });
    } else {
        console.log("Last Item");
        scrollXP3.style.left = stop + "px";
        P3Items.forEach((val) => {
            val.style.opacity = "0";
        });

        /////////////////////////////////
        let loadingBTN = function () {
            i.className = "fa fa-spinner fa-spin";
            /////////////////////////////////////
            function forLoadingAnimation() {
                loadingTxt.style.position = "absolute";
                loadingTxt.style.left = "50%";
                loadingTxt.style.top = "10%";
                loadingTxt.innerHTML = "LOADING...";
                loadingTxt.style.fontSize = "3vw";
                loadingTxt.style.color = "#fff";
                loadingTxt.style.textAlign = "center";
                loadingTxt.style.fontWeight = "400";
                loadingTxt.style.opacity = "1";
                loadingTxt.style.transform = "translate(-40%,-50%)"
                forLoadingVideo.style.width = "100%";
                forLoadingVideo.style.height = "100%"
                forLoadingVideo.style.objectFit = "cover";
                forLoadingVideo.setAttribute("src", "./Video/wait.mp4");
                i.style.position = "absolute";
                i.style.left = "50%";
                i.style.top = "50%";
                i.style.opacity = "1";
                i.style.scale = "3"
                i.style.transform = "translate(-50%,-50%)"
            }
            forLoadingAnimation();

            setTimeout(() => {
                P3maintop.append(i, loadingTxt, forLoadingVideo);
                forLoadingVideo.play();
                forLoadingVideo.loop = "true";
            }, 400);
            setTimeout(() => {
                x = xx;
                loadingTxt.innerHTML = "CLICK NEXT! <br> TO SKIP"
            }, 3000)
        }
        loadingBTN();
        ///////////////////////////////
    }
});