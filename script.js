let dayNight = document.querySelector(".dayNight");

let banner = document.querySelector(".banner");

dayNight.addEventListener("click", ()=>{
    banner.classList.toggle("night");
})

let typingEffect = new Typed("#text", {
    strings:["Yash Zode","Coder","from Grape City of India"],
    loop:true,
    typeSpeed:80,
    backSpeed:50,
    backDelay:1000
});