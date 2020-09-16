$(document).ready(function(){       //check if elements is loaded
    $(".header, .footer").css("border", "solid 3px #000");
    $(".header, .footer").css('background', "#fff");
    $('.footer').css('text-align', 'center');
    $('.footer').css('text-transform', 'uppercase');

    $('main').css('margin', '0px 2px 0px 2px');
    $('h2, h1, p').css('margin', '1px');
    $('main').css('background-color', "lightgrey");
    $('nav a').css('color', 'white');

    $('h2').parent().css('border', 'solid 3px #230000');

    $('p:first').css('background', 'grey');
    $('main p:last').css('background', 'grey');
    $('main p:odd').css('border', 'solid 3px green');
    $('main p:even').css('border', 'solid 3px red');
    $('p:eq(3)').css('background', 'pink');

    $('h2:has(span)').css('background', 'lightgreen');

    $('.btn:parent').css('background', 'lightblue');
    $('.btn:empty').css('background', 'lightpink');

    $('a[href="google.com"]').css('background', "orange");
    $('a[href!="google.com"]').css('background', "blue");
    $('a[href^="http"]').css('background', "red");
    $('a[href$=".ru"]').css('background', "violet");
    $('a[href*="google"]').css('color', "white");
})

