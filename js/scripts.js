
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

//when button is clicked
$('#inLink').on('click',function(){

    if($('#main1').css('display')!='none'){

    $('#main2').html($('#main2').html()).show().siblings('div').hide();

    } else if($('#main2').css('display')!='none'){

        $('#main1').show().siblings('div').hide();

    }

    $('header').hide();
    $('.links').hide();

    //ex for working with iframe as is
    //https://www.youtube.com/embed/KRZhbQuG1n8
    loadIframe('videoembed', $('#videolink').val());
    console.log("Button Pressed:");
    console.log($('#videolink').val());

    //work on converting urls into embeddable versions later
});


function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}

function loadIframe(iframeName, url) {
    var $iframe = $('#' + iframeName);
    if ( $iframe.length ) {
        $iframe.attr('src',url);   
        return false;
    }
    return true;
}

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