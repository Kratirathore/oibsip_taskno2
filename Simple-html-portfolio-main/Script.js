const intersectionCallback = (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) { 
            entry.target.classList.add('animatedcard');
        }
    }
}
const observer = new IntersectionObserver(intersectionCallback);
const items = document.querySelectorAll('.anime');
for (const item of items) {
    observer.observe(item);
    console.log("observ");
}
$(window).on('scroll', function () {
    var st = $(this).scrollTop(),
        vh = $(this).height(),
        $counter = $('.wrapperx'),
        ct = $counter.offset().top;
    if ((st + vh) > ct) {
        // #counter is in the viewport

        let valueDisplays = document.querySelectorAll(".num");
        let interval = 100;

        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }
})
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

sidebarClose.addEventListener("click" , () =>{
    nav.classList.remove("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});
function checkScreenSize() {
    const leftSection = document.getElementById("leftSection");
    const rightSection = document.getElementById("rightSection");
    const leftSection2 = document.getElementById("leftSection2");
    const rightSection2 = document.getElementById("rightSection2");
    if (window.innerWidth < 768) {
        leftSection.parentNode.insertBefore(rightSection, leftSection);
        leftSection2.parentNode.insertBefore(rightSection2, leftSection2);
    } else {
        leftSection.parentNode.insertBefore(leftSection, rightSection);
        leftSection2.parentNode.insertBefore(leftSection2, rightSection2);
    }
}