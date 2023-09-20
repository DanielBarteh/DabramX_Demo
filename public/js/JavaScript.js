$(document).ready(function () {
    var scroller_counter = false;
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) { // اگر به پایین اسکرول کردید
            $('.menu_hover span').removeClass("animate__fadeInUp animate__animated"); // مخفی کردن متن
            $('.menu_hover span').addClass("animate__fadeOutDown animate__animated");
            $('.menu_hover #menu_login').addClass("translate-y-[5px]");
            $('.menu_hover i:not(#menu_login)').addClass("translate-y-[7px]");
            scroller_counter = true;
        } else {
            if (scroller_counter === true){
                $('.menu_hover #menu_login').removeClass("translate-y-[5px]");
                $('.menu_hover i:not(#menu_login)').removeClass("translate-y-[7px]");
                $('.menu_hover span').removeClass("animate__fadeOutDown animate__animated"); // نمایش متن
                $('.menu_hover span').addClass("animate__fadeInUp animate__animated");
            }
        }
    });
    // loading js
    $("#loading").fadeOut();
    // alerts js
    setTimeout(function () {
        $("#error").removeClass("animate__bounceInRight").addClass("animate__bounceOutRight");
    }, 10000);
    // alert timer js
    if ($("#error").length){
        let count = 10;
        const countdownEl = document.getElementById("timer");
        const timer = setInterval(function () {
            countdownEl.innerHTML = count;
            if (count === 0) {
                clearInterval(timer);
            }
            count--;
        }, 1000);
    }
})
document.onkeydown = function(e) {
    if(event.keyCode === 123) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
        return false;
    }
}

function openAdminPanel(){
    $("#asidePanel").removeClass("translate-x-full");
    $("#backPanel").removeClass("hidden");
    $("#PanelBtn").addClass("hidden");
}
function closeAdminPanel(){
    $("#asidePanel").addClass("translate-x-full");
    $("#backPanel").addClass("hidden");
    $("#PanelBtn").removeClass("hidden");
}

// footer up animation js
function up() {
    $("html, body").animate({
        scrollTop: 0
    }, 2000);
    return false;
}

    const sunIcon = $(".sun");
    const moonIcon = $(".moon");
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const iconToggle = () => {
    moonIcon.toggleClass("hidden");
    sunIcon.toggleClass("hidden");
}
    const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
    $("html").addClass("dark");
    moonIcon.addClass("hidden");
    return;
}
    sunIcon.addClass("hidden");
}
    const themeSwitch = () => {
    if ($("html").hasClass("dark")) {
    $("html").removeClass("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
}
    $("html").addClass("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}
    sunIcon.on("click", () => {
    themeSwitch();
});
    moonIcon.on("click", () => {
    themeSwitch();
});
    themeCheck();
