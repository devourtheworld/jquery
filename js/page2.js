$(document).ready(function(){
    $('h2').dblclick(function(){
        $('body').css('background', 'black');
        $('body').css('color', 'white');
        $(this).toggleClass('alpha');
    });
    $('h2').click(function(){
        $('body').css('background', 'white');
        $('body').css('color', 'black')
        // alert('h2 clicked');
    });

    $('h1').mouseenter(function(){
        $(this).toggleClass('alpha');
        $(this).css('border-bottom', '3px solid red');
    });
    $('h1').mouseleave(function(){
        $(this).toggleClass('alpha');
        $(this).css('border-bottom', '3px solid transparent');
    });

    $('input').focus(function(){
        $(this).css('background', 'red');
    });
    $('input').change(function(){
        $('#userText').text('' + $(this).val());
    });

    // when button pressed
    // $('input').keypress(function(){
    //     $('#userText').text('' + $(this).val());
    // });
    //when button released
    $('input').keyup(function(){
        $('#userText').text('' + $(this).val());
    });
});