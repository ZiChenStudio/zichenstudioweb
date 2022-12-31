function darkTexter() {
    $('li').remove();
    $('.pwd').remove();
    var a = 32, n = 1;
    for (; a > 0; delete a) {
        $('#liAdd').append('<li class="li' + n + '"></li>');
        a -= 1, n += 1;
        $('li').css({ "margin": "2%" });
    }
    $('#liAdd').append('<div class="pwd"></div>');
    $('.pwd').html(key).css({ "color": "#000" });
    jQuery.getScript("/js/text.js");
}