function x() {
    function Click() {
        var homeUrl = 'https://zichenstudio.netlify.app'
        window.location = homeUrl;
        alert('Please stop!');
        window.event.returnValue = false;
    }
    document.onmouseup = function (i) {
            if (i.button == 2) {
                event.preventDefault();
                Click();
            }
        }
        document.oncontextmenu = function () {
            event.preventDefault();
            Click();
        }
    document.onkeydown = function () {
        var e = window.event || arguments[0];
        if (e.keyCode == 123 || e.keyCode == 122 || e.keyCode == 121 || e.keyCode == 120 || e.keyCode == 119 || e.keyCode == 118 || e.keyCode == 117 || e.keyCode == 116 || e.keyCode == 115 || e.keyCode == 114 || e.keyCode == 113 || e.keyCode == 112 || (e.ctrlKey) || (e.shiftKey) || e.keyCode == 18) {
            event.preventDefault();
            Click();
        };
        
    };
    ((function () {
        var callbacks = [],
            timeLimit = 50,
            open = false;
        setInterval(loop, 1);
        return {
            addListener: function (fn) {
                callbacks.push(fn);
            },
            cancleListenr: function (fn) {
                callbacks = callbacks.filter(function (v) {
                    return v !== fn;
                });
            }
        };
        function loop() {
            var startTime = new Date();
            debugger;
            if (new Date() - startTime > timeLimit) {
                if (!open) {
                    callbacks.forEach(function (fn) {
                        fn.call(null);
                    });
                }
                open = true;
                Click();
            }
            else {
                open = false;
            };
        };
        console.log(document.body.clientWidth - document.body.clientHeight)
        if (document.body.clientWidth - document.body.clientHeight > 200) {
            Click();
        };
    })())
        .addListener(function () {
            Click();
        });
};
x();