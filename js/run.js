$(function () {
    if ($('#goto').val() != 'fULLJgZW3muInAHiMtKh6Hx7zOELTikXMbRCfvyUJh6dRqXDwb4kuEvblunqsIECsqk1109D7Sr85CC_W07S6oE88sqmkzuPl4nanOGyAoc931LFWKsp3tmzb-Yb7APpo5T6PeY7kPSCuNDGR981TRHc3IqJQizr5tJhRds6HuQeXGwMq5P9GSZ2J45OSEyXMYMzMJtRL-n5oVrIS-Qr05SStLxmJWGm4eDevQUEIbroW9d_-bgxfI-zGOGyTTrEpR45MBhJuAsG5cPMXC7cWT7H18zUKXQl8z5Ps2iXZSmpd7E0xAcKd4_JL8dNy4ilXlxrg-ib1GKGz52W1OJZ385I_EjHAI_9jSbHtxdG7GDokNGa3u_ij-yBghXow03lgictVxktl0ExipmFzMN9-6Pn4PId17d8EMYSen9w4xGkvTF31ZoxDEsHlmdtQu6aVIwA6YiSI1IFuVZ2nNegj71E0oQR5Q95hXYis4tibWXRJDl13HOLxCPQqPrHz8zQ') {
        alert('Wrong!')
        var x = 0,y = 1024,z = 2;
        for (;x === 0;) {
            console.log('Wrong!')
            y = y * z;
        }
        return;
    }
    else {
        alert('PASS');
        var num = Math.floor(Math.random() * 2147483648);
        alert('Welcome No.' + num);
    }
    function html() {
        $("#ul").hide();
        $('#h1').click(function () {
            // 开始运行
            $("#ul").hide();
            // 删除无用字体
            $('#link').remove();
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
            var a = 32, n = 1;
            for (; a > 0; delete a) {
                $('#liAdd').append('<li class="li' + n + '"></li>');
                a -= 1, n += 1;
                $('li').css({ "margin": "2%" });
            }
            $('#liAdd').append('<div id="pwd"></div>');
            $('#pwd').html($('#goto').val()).css({"color":"#000"});
            jQuery.getScript("./js/text.js");
        }
    }
    html();
});