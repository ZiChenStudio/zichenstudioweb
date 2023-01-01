$(function () {
    // 输入开始
    function writeTextWorker() {
        $('#goto').hide();
        $('li').html('NULL');
        $('.li1').html('<p>弹窗病毒(恶搞,无法传播)</p><p><a href="https://raw.githubusercontent.com/ZiChenStudio/Popover_virus/main/src/popover_virus/popover_virus.vbs.exe">Download(.EXE)</a></p><p>Windows XP(+)</p>')
        csserWorker();
    }
    function csserWorker() {
        // 更改背景颜色与文字颜色
        $('#body').css({ "background-color": "#000", "color": "#0f0" });
        $('a').css({ "color": "#f00", "text-decoration": "none" });
    }
    writeTextWorker();
    key = '*';
    for (var f = 9; f > 0; delete f) {
        key = key + key;
        f -= 1;
    }
});
