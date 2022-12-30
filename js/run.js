$(function () {
    function deleteButton() {
        if ($('#goto').val() === '6E--04-43-26300-2021--2--9463A-2-38') {
            $('#goto').attr("disabled", "disabled");
            $('#button').remove();
        }
    }
    var feedback = $('#feedback');
    deleteButton();
    function judgment() {
        var button = 0, button2 = 0, num = Math.floor(Math.random() * 2147483648);
        $('#button').click(function () {
            button += 1;
            function wrong() {
                $('#goto').val('');
                alert('Wrong!');
                var x = 64, y = 1024, z = 2;
                for (; x === 0;) {
                    console.log('Wrong!');
                    x -= 1;
                    y = y * z;
                    console.log('Go back!')
                }
                return;
            }
            if (button === 1) {
                if ($('#goto').val() === 'zccbrrss') {
                    $('#goto').val('');
                    feedback.html('');
                }
                else {
                    button = 0;
                    feedback.html('已完成反馈,反馈编号:' + Math.floor(Math.random() * 2147483648));
                    button2 += 1;
                    if (button2 === 5) {
                        feedback.html('不要再提交了,已经5次了,如果再提交你将会受到"制裁".');
                    }
                    else if (button2 === 6) {
                        feedback.html('请停止!');
                        $('#goto').val('6E--04-43-26300-2021--2--9463A-2-38');
                        deleteButton();
                    }
                    return;
                }
            }
            key1 = 'fULLJgZW3muInAHiMtKh6Hx7zOELTikXMbRCfvyUJh6dRqXDwb4kuEvblunqsIECsqk1109D7Sr85CC_W07S6oE88sqmkzuPl4nanOGyAoc931LFWKsp3tmzb-Yb7APp';
            key2 = 'o5T6PeY7kPSCuNDGR981TRHc3IqJQizr5tJhRds6HuQeXGwMq5P9GSZ2J45OSEyXMYMzMJtRL-n5oVrIS-Qr05SStLxmJWGm4eDevQUEIbroW9d_-bgxfI-zGOGyTTrE';
            key3 = 'pR45MBhJuAsG5cPMXC7cWT7H18zUKXQl8z5Ps2iXZSmpd7E0xAcKd4_JL8dNy4ilXlxrg-ib1GKGz52W1OJZ385I_EjHAI_9jSbHtxdG7GDokNGa3u_ij-yBghXow03l';
            key4 = 'gictVxktl0ExipmFzMN9-6Pn4PId17d8EMYSen9w4xGkvTF31ZoxDEsHlmdtQu6aVIwA6YiSI1IFuVZ2nNegj71E0oQR5Q95hXYis4tibWXRJDl13HOLxCPQqPrHz8zQ';
            key = key1 + key2 + key3 + key4;
            if (button === 2) {
                if ($('#goto').val() === key) {
                    alert('PASS!');
                    feedback.html('');
                    alert('Welcome No.' + num);
                    html();
                }
                else {
                    wrong();
                }
            }
        });
    }
    function html() {
        $("#ul").hide();
        $('#h1').click(function () {
            // 更改文本
            $("#h1").html('ZCSDark');
            clickH2();
        });
        function clickH2() {
            $("#h2").click(function () {
                // 更改文本*2
                $('#title').html('ZCSDark');
                $('#h2').html('Welcome to ZCSDark');
                // 删除无用字体
                $('#link').remove();
                $('#button').remove();
                $('hr').remove();
                // 显示列表
                $("#ul").fadeToggle("slow","linear",darkTexter());
            });
        }
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
    }
    judgment();
});
