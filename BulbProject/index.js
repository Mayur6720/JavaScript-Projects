let btn = document.querySelector(".btn");
let spanon = document.querySelector(".on");
let spanoff = document.querySelector(".off");
let count = 0;

spanon.addEventListener("click", function (e) {
if (count === 0) {
    img.src = "./img/Bulb-On.png";
    img.style.borderRadius = "16rem 16rem ";
    document.body.style.backgroundColor = "white";
    btn.classList.add("btnbg");
    e.target.classList.add("btnon");
    spanoff.style.backgrondColor = " white";
    count = 1;
}});
spanoff.addEventListener("click", function (e) {
    if(count === 1){
        spanon.classList.remove("btnon");
        img.src = "./img/Bulb-Off.png";
        btn.classList.remove("btnbg");
        document.body.style.backgroundColor = "#000";
        count = 0;
    }
})
