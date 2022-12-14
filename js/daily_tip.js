// 页脚的文字，一般放在</body>的前面，否则检测不到TALL的位置
console.log("Done:Daily_tip.js");

// 文案：
var zero = "我生来平庸，却也生来骄傲。<br>I was born mediocre, but I was also born proud."
var one = "有梦就去追，没死就别停。<br>If you have a dream, chase it.Don't stop until you're dead."
var two = "青春由磨砺而出彩，人生因奋斗而升华！<br>Youth by sharpening and brilliant, life because of struggle and sublimation!"
var three = "试一下，你会比你自己想象中的还要强大！<br>Try it, and you'll be stronger than you think!"
var four = "如果痛恨所处的黑暗，请你成为你想要的光。<br>If you hate the darkness you live in, please be the light you want."
var five = "心态决定高度，细节决定成败。<br>Mentality determines height, details determine success or failure."
var six = "当你想要放弃的时候，想想当初为什么坚持到这里。<br>When you feel like giving up, think about why you held on here in the first place."
var seven = "志在山顶的人，不会贪念山腰的风景。<br>Aim at the top of the mountain, will not be greedy hillside scenery."
var eight = "世上没有绝望的处境，只有对处境绝望的人。<br>There are no desperate situations, only desperate of people."
var nine = "你只管努力，剩下的交给时间。<br>You just hard and time will do the all rest."
var ten = "旁观者的姓名永远爬不到比赛的计分板上。<br>The bystander's name never climbs the scoreboard."
var eleven = "怠惰是贫穷的制造厂。<br>Idleness is the factory of poverty."
var twelve = "站在巨人的肩上是为了超过巨人。<br>Standing on the shoulders of giants is to surpass giants."
var s = document.getElementById("TALL");
// 判断变量
    var WHITE = Math.floor(Math.random() * 13);              // 0到13的数 ，floor是向下取整，例如9.9向下取整为9,9.1为9
        console.log(WHITE);
// 判断
    if (WHITE < 1 )
    {
        s.innerHTML=zero;
        console.log("D=0");
    }
    else if (WHITE < 2)
    {
        s.innerHTML=one;
        console.log("D=1");
    }
    else if (WHITE < 3)
    {
        s.innerHTML=two;
        console.log("D=2");
    }
    else if (WHITE < 4)
    {
        s.innerHTML=three;
        console.log("D=3");
    }
    else if (WHITE < 5)
    {
        s.innerHTML=four;
        console.log("D=4");
    }
    else if (WHITE < 6)
    {
        s.innerHTML=five;
        console.log("D=5");
    }
    else if (WHITE < 7)
    {
        s.innerHTML=six;
        console.log("D=6");
    }
    else if (WHITE < 8)
    {
        s.innerHTML=seven;
        console.log("D=7");
    }
    else if (WHITE < 9)
    {
        s.innerHTML=eight;
        console.log("D=8");
    }
    else if (WHITE < 10)
    {
        s.innerHTML=nine;
        console.log("D=9");
    }
    else if (WHITE < 11)
    {
        s.innerHTML=ten;
        console.log("D=10");
    }
    else if (WHITE < 12)
    {
        s.innerHTML=eleven;
        console.log("D=11");
    }
    else
    {
        s.innerHTML=twelve;
        console.log("D=12");
    }