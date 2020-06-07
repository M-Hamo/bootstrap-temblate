var height = $('#header').height();
$(window).scroll(function () {
    if ($(this).scrollTop() > height) {
        $('.navbar').removeClass('fixed');
    } 
    else {
        $('.navbar').addClass('fixed');
    }
});
window.onload =  () =>{
    var myAudio = document.getElementById('my-audio');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    
    {
        myAudio.play();

    }    
    play.onclick = () => {
        myAudio.play();
        return false;
        
    }
    pause.onclick = () => {
        myAudio.pause();
        return false;
    }
}