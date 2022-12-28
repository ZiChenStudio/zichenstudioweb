// 404
var T1 = String('404');
var for1 = 0;
function ty404() {
    var divTyping = document.getElementById('Title1');
    if (for1 <= T1.length) {
        divTyping.innerHTML = T1.slice(0, for1++) + '_';
        setTimeout('ty404()', 200);
    }
    else {
        divTyping.innerHTML = T1;
    }
}
ty404();

// Not Found
var T2 = String('Not Found');
var for2 = 0;
function tyNotFound() {
    var divTyping = document.getElementById('Title2');
    if (for2 <= T2.length) {
        divTyping.innerHTML = T2.slice(0, for2++) + '_';
        setTimeout('tyNotFound()', 200);
    }
    else {
        divTyping.innerHTML = T2;
    }
}
setTimeout('tyNotFound()', 800);

// 横划线'<hr>'
var HR = '<hr>';
function tyhr() {
    var divTyping = document.getElementById('hr');
    divTyping.innerHTML = HR;
}
setTimeout('tyhr()', 2600);

// 您访问的网页发现您太
var T3 = String('您访问的网页发现您太');
var for3 = 0;
function tyNinFW() {
    var divTyping = document.getElementById('Title3');
    console.log(T3.length);
    if (for3 <= T3.length) {
        console.log(for3);
        divTyping.innerHTML = T3.slice(0, for3++) + '_';
        setTimeout('tyNinFW()', 200);
    }
    else {
        divTyping.innerHTML = T3;
    }
}
setTimeout('tyNinFW()', 3000);

// 优秀
var T4 = String('优秀');
var for4 = 0;
function tyYX() {
    var divTyping = document.getElementById('Title4');
    if (for4 <= T4.length) {
        divTyping.innerHTML = T4.slice(0, for4++) + '_';
        setTimeout('tyYX()', 600);
    }
    else {
        divTyping.innerHTML = T4;
    }
}
setTimeout('tyYX()', 5400);

// 而逃走了
var T5 = String('而逃走了');
var for5 = 0;
function tyErT() {
    var divTyping = document.getElementById('Title5');
    if (for5 <= T5.length) {
        divTyping.innerHTML = T5.slice(0, for5++) + '_';
        setTimeout('tyErT()', 200);
    }
    else {
        divTyping.innerHTML = T5;
    }
}
setTimeout('tyErT()', 7200);