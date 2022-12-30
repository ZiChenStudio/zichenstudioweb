$(function () {
    if ($('#goto').text() != '1IxOnYB6ND3fieK8_I458wBMlMLsiyvKDUKxuZIa0eH97jY5gL-DJxi1ECXqucoy8IlGwB2hrlhj1xP-gfypQhAtDjlKcna2UoEcGv9UtSIUDDnbd2HHUu18wyYQbcRXsdXpIGl6M6Gwop_-DSAUesKdyx5yK8untBi9gI_3wzyYgX1o470Por2gGIhE9LKb7CNEdk0a9iZM8lbeK73KDEA1mSlxptRhH84ICrai70tD_gefyMuFLjOlFhmz4UE0') {
        $('#goto').remove();
        return;
    }
    else {
        $('#goto').remove();
    }
    function html() {
        $("#ul").hide();
        $('#h1').click(function () {
            // 开始运行
            $("#ul").hide();
            alert('Welcome to ZCSDark');
            // 删除无用字体
            $('#link').remove();
            $('#input').remove();
            $('#button').remove();
            // 更改文本
            $("#h1").html('ZCSDark');
            $('#title').html('ZCSDark');
            $('#h2').html('Welcome to ZCSDark');
            $("#h2").click(function () {
                // 更改背景颜色与文字颜色
                $('#body').css({ "background-color": "#000", "color": "#fff" });
                // 显示列表
                $('hr').remove();
                $("#ul").fadeToggle("slow", darkTexter());
            });
        });
        function darkTexter() {
            $('li').remove();
            var a = 10, n = 1;
            for (; a > 0; delete a) {
                $('#liAdd').append('<li class="li' + n + '"></li>');
                a -= 1, n += 1;
                $('li').css({ "margin": "4.3%" });
            }
            jQuery.getScript("./js/text.js");
        }
    }
    html();
});