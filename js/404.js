function x() {
    console.log('x start')
    function Click() {
        var homeUrl = 'https://zichenstudio.netlify.app';
        window.location = homeUrl;
        alert('Please stop!');
    };
    document.onmouseup = function (i) {
        if (i.button == 2) {
            Click();
        }
    }
    document.oncontextmenu = function () {
        Click();
    }
    document.onkeydown = function () {
        var e = window.event || arguments[0];
        if (e.keyCode == 123 || e.keyCode == 122 || e.keyCode == 121 || e.keyCode == 120 || e.keyCode == 119 || e.keyCode == 118 || e.keyCode == 117 || e.keyCode == 116 || e.keyCode == 115 || e.keyCode == 114 || e.keyCode == 113 || e.keyCode == 112 || (e.ctrlKey) || (e.shiftKey) || e.keyCode == 18) {
            Click();
        };
    };
    function IsPhone() {
        var info = navigator.userAgent;
        var isPhone = /mobile/i.test(info);
        return isPhone;
    }
    if (IsPhone() === false) {
        if ($(window).width() - $(window).height() <= $(window).width() * 0.2) {
            console.log('Phone is false!');
            Click();
        }
    }
    else {
        console.log('Phone is true!');
    }
    setTimeout('x()', 3000);
}
console.log($(window).width() - $(window).height());
x();
