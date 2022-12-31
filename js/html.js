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
            $("#ul").fadeToggle("slow","linear",);
            jQuery.getScript('/js/run2.js');
        });
    }
}
html();