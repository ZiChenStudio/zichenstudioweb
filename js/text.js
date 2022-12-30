$(function () {
    function writeTexter() {
        if ($('#goto').text() != '1IxOnYB6ND3fieK8_I458wBMlMLsiyvKDUKxuZIa0eH97jY5gL-DJxi1ECXqucoy8IlGwB2hrlhj1xP-gfypQhAtDjlKcna2UoEcGv9UtSIUDDnbd2HHUu18wyYQbcRXsdXpIGl6M6Gwop_-DSAUesKdyx5yK8untBi9gI_3wzyYgX1o470Por2gGIhE9LKb7CNEdk0a9iZM8lbeK73KDEA1mSlxptRhH84ICrai70tD_gefyMuFLjOlFhmz4UE0') {
            $('#goto').remove();
            var fU = Math.floor(Math.random() * 64);
            console.log('FU * ' + fU );
            for (;fU > 0;delete fU) {
            setTimeout(() => alert('F U !'), 1000);
            fU -= 1;
            }
            return;
        }
        else {
            $('#goto').remove();
        }
        console.log('writeTexter');
    }
    writeTexter();
});
