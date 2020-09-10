var height = $('#header').height();
$(window).scroll(function () {
    if ($(this).scrollTop() > height) {
        $('.navbar').removeClass('fixed');
    }
    else {
        $('.navbar').addClass('fixed');
    }
});
window.onload = () => {
    var myAudio = document.getElementById('my-audio');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');

    // {
    //     myAudio.play();

    // }    
    play.onclick = () => {
        myAudio.play();
        return false;

    }
    pause.onclick = () => {
        myAudio.pause();
        return false;
    }
}

//scroll to top functionality

var toTop = document.querySelector('.gotop-btn');

// When the user scrolls down 100px from the top of the document, show the button
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 600) {
        toTop.style.bottom = "40px";
        toTop.classList.add("active");
    } else {
        toTop.style.bottom = "-40px";
        toTop.classList.remove("active");
    }

})

// navbar showing in scroll up and hide whin scroll down
var nav = document.getElementById('navbar');
var lastScrollTop = 0;

window.addEventListener('scroll', () => {
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0"
    }
    lastScrollTop = scrollTop;
    console.log(lastScrollTop)
})

