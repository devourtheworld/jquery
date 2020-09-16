$(document).ready(function(){
    $('.box:first').delay(1000).hide(1000).delay(1000).show(1000);
    // $('.box:first').delay(slow).hide(fast).delay(1000).show(1000);
    $('.box:eq(1)').animate({'width': '200px'}, 1000);
    $('.box:eq(2)').delay(2000).slideUp(1000).slideDown(1000);

    // alert($('img').attr('src'));
    $('img').click(function(){
        $(this).fadeOut(500, function(){
            $(this).attr('src', 'https://i.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60').fadeIn(500);
            $(this).attr('alt', 'see lions');
        })
    });
    $('footer p').attr('data-target', 'text');

    $('.footer').click(function(){
        // $(this).removeClass('footer');
        $('.footer').addClass('alpha');
        // $(this).toggleClass('alpha');
        $(this).toggleClass('alpha betta');
    });

    $('#pipsum').click(function(){
        // $(this).text('own text 123');
        // $(this).html('own text <em>123</em>');
        // $(this).append(' more text');
        // $(this).prepend('start new text ');
        // $(this).after('<p> absolutely new text');
        // $(this).wrap('<div class="alpha"></div>');   //add new tag
        // $(this).unwrap('<div class="alpha"></div>'); //remove tag
        // $(this).empty();                //empty tag
        // $(this).remove();               //remove tag
        $(this).append('<br>' + $(this).text());
    });
});