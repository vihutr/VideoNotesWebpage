
$(document).ready(function(){
    $(".credits").hover(
        function(){
            $(this).attr("src", "images/twitter/TwitterLoop.gif");
        },
        function(){
            $(this).attr("src", "images/twitter/Twitter.png");
        }                         
    );                  
});

$('#inLink').on('click',function(){

    if($('#main').css('display')!='none'){

    $('#notes').html($('#notes').html()).show().siblings('div').hide();

    } else if($('#notes').css('display')!='none'){

        $('#main').show().siblings('div').hide();

    }
});

/* attempt at framebyframe anim, not worth
const $element = $('.credits');
const imagePath = '/images/twitter';
const totalFrames = 24;
const animationDuration = 1300;
const timePerFrame = ainmationDuration / totalFrames;

let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 1;

function step(startTime) {
    if(!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
    timeFromLastUpdate = startTime - timeWhenLastUpdate;

    if(timeFromLastUpdate > timePerFrame){
        $element.attr ('src', imagePath + `/Twitter${frameNumber}.png`);
        timeWhenLastUpdate = startTime;

        if (frameNumber >= totalFrames) {
            frameNumber = 1;
        } else {
            frameNumber = frameNumber + 1;
        }
    }

    requestAnimationFrame(step);

}

$(document).ready(() => {
    for (var i = 1; i < totalFrames + 1; i++) {
      $('body').append(`<div id="preload-image-${i}" style="background-image: url('${imagePath}/Twitter${i}.png');"></div>`);
    }
});

$(window).on('load', () => {
    requestAnimationFrame(step);
  });
*/