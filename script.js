const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    {
        threshold: 0.15
    }
);

reveals.forEach(el => observer.observe(el));

let roundTrip = document.getElementById("round-trip-btn");
let oneTrip = document.getElementById("one-trip-btn");

roundTrip.addEventListener("click", ()=>{
    document.getElementById("only-one-trip-form").style.display = "none";
    document.getElementById("round-trip-form").style.display = "block";
    document.getElementById("round-trip-form").style.opacity = "0";
    roundTrip.style.boxShadow = "0px 4px 0px #009300";
    oneTrip.style.boxShadow = "0px 0px 0px transparent";

    setTimeout(()=>{
        document.getElementById("round-trip-form").style.opacity = "1";
    }, 100)
})
oneTrip.addEventListener("click", ()=>{
    document.getElementById("only-one-trip-form").style.display = "block";
    document.getElementById("only-one-trip-form").style.opacity = "0";
    document.getElementById("round-trip-form").style.display = "none";
    oneTrip.style.boxShadow = "0px 4px 0px #009300";
    roundTrip.style.boxShadow = "0px 0px 0px transparent";

    setTimeout(()=>{
        document.getElementById("only-one-trip-form").style.opacity = "1";
    }, 100)
});

function displayMenuBox(){
    document.getElementById("mobile-menu-outer-box").style.display = "block";
    let menuBtn = document.getElementById("menuBtnBars");
    if (menuBtnBars.classList.contains("fa-bars")){
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-x");
    }else{
        removeMenuBox();
    }
}
function removeMenuBox(){
    document.getElementById("mobile-menu-outer-box").style.display = "none";
    let menuBtn = document.getElementById("menuBtnBars");
    menuBtn.classList.remove("fa-x");
    menuBtn.classList.add("fa-bars");
}

function removeSubscribeBox(){
    document.getElementById("subscribe-box").style.display = "none";
}

