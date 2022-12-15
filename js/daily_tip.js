// 页脚的文字，一般放在</body>的前面，否则检测不到TALL的位置
console.log("Done:Daily_tip.js");

// 文案：
var zero = "我生来平庸，却也生来骄傲。<br>————李嘉乐乐乐《简书》";
var one = "有梦就去追，没死就别停。<br>————新酒长安";
var two = "青春由磨砺而出彩，人生因奋斗而升华！<br>————《光明日报》(2020年05月07日06版)";
var three = "试一下，你会比你自己想象中的还要强大！<br>————木汐nannan";
var four = "如果痛恨所处的黑暗，请你成为你想要的光。<br>————顾城";
var five = "心态决定高度，细节决定成败。<br>————佚名(或者说我们没有找到原作者)";
var six = "当你想要放弃的时候，想想当初为什么坚持到这里。<br>————一直兔《豆瓣》";
var seven = "志在山顶的人，不会贪念山腰的风景。<br>————佚名(或者说我们没有找到原作者)";
var eight = "世上没有绝望的处境，只有对处境绝望的人。<br>————海因茨·威廉·古德里安(Heinz Wilhelm Guderian)";
var nine = "你只管努力，剩下的交给时间。<br>————佚名(或者说我们没有找到原作者)";
var ten = "旁观者的姓名永远爬不到比赛的计分板上。<br>————佚名(或者说我们没有找到原作者)";
var eleven = "怠惰是贫穷的制造厂。<br>————约翰·克里斯托弗·弗里德里希·冯·席勒(Johann Christoph Friedrich von Schiller)";
var twelve = "站在巨人的肩上是为了超过巨人。<br>————牛顿";
var thirtn = "只解沙场为国，死何须马革裹尸还。<br>————徐锡麟《出塞》";
var fourtn = "我受到了召唤，我必须回应，一如既往。<br>————《使命召唤》"
var fifth = "我之所以想变强，是为了活得轻松写意。<br>————《一拳超人》"
var sixtn = "没有BUG的代码是不完美的！<br>————Sodium_Sulfate[Sodium_Sulfate]"
var seventn = "春色满园关不住，一枝红杏出墙来。<br>————叶绍翁「游园不值」"
var eighttn = "你只需看着别人精彩，老天对你另有安排<br>————春天"
var ninetn = "当你重新踏上旅途之后，一定要记得旅途本身的意义。<br>————《原神》"
var twenty = "总有地上的生灵，敢于直面雷霆的威光！<br>————《原神》"
var twenone = "心有所向，日复一日，必有精进。<br>————《原神》"
var twentwo = "人这一辈子这么短，趁着还活着抓紧时间好好享受生活。<br>——《原神》"
var twenthree = "*But it refused.<br>(译：*但是它拒绝了。)<br>————《Undertale》"
var twenfour = "EXP是一个缩写，它的全名是处决点数(EXecution Points)，一种用来\
量化你对别人造成痛苦的方式。每当你杀死别人，你的EXP就将增加。当你有了足够的EXP，\
你的LOVE就会增加，同样的，LOVE也是一个缩写。它的全名是暴力等级(Level Of ViolencE)\
，是用来衡量一个人伤害别人的能力。你杀的越多，就越容易远离自己的本心，你越远离自己\
的本心，就越难被伤害，就越容易放任自己去伤害别人。<br>————《Undertale》"
var twenfive = "You are the player.<br>Wake up.<br>(译：你就是那个玩家。<br>&emsp;&emsp;该醒了\
)。<br>————《Minecraft End Poem》"
var twensix = "You are the player. The story. The program. The human. Made from nothing but mil\
k and love.<br>(译：你就是那玩家。那个故事。那个程序。那个人类。仅由奶和爱组成。)<br>————《Minecraft End Poem》"
var twenseven = "To cure it of sorrow would destroy it. The sorrow is part of its own private task. \
We cannot interfere.<br>(译：为他治愈悲伤会摧毁它。而悲伤是他的私人事务。我们不能干涉。)<br>———\
—《Minecraft End Poem》"
var tweneight = "I will not tell the player how to live.<br>(译：我不会告诉这个玩家如何活下去的。)<br>———\
—《Minecraft End Poem》"




var s = document.getElementById("TALL");



var WHITE = Math.floor(Math.random() * 29);
// 0到28的数 ，floor是向下取整，例如9.9向下取整为9,9.1为9
// random()	返回 0 ~ 1 之间的随机数，包含 0 不包含 1。

console.log(WHITE);
// 判断


if (WHITE < 1) {
    s.innerHTML = zero;
    console.log("D=0");
}
else if (WHITE < 2) {
    s.innerHTML = one;
    console.log("D=1");
}
else if (WHITE < 3) {
    s.innerHTML = two;
    console.log("D=2");
}
else if (WHITE < 4) {
    s.innerHTML = three;
    console.log("D=3");
}
else if (WHITE < 5) {
    s.innerHTML = four;
    console.log("D=4");
}
else if (WHITE < 6) {
    s.innerHTML = five;
    console.log("D=5");
}
else if (WHITE < 7) {
    s.innerHTML = six;
    console.log("D=6");
}
else if (WHITE < 8) {
    s.innerHTML = seven;
    console.log("D=7");
}
else if (WHITE < 9) {
    s.innerHTML = eight;
    console.log("D=8");
}
else if (WHITE < 10) {
    s.innerHTML = nine;
    console.log("D=9");
}
else if (WHITE < 11) {
    s.innerHTML = ten;
    console.log("D=10");
}
else if (WHITE < 12) {
    s.innerHTML = eleven;
    console.log("D=11");
}
else if (WHITE < 13) {
    s.innerHTML = twelve;
    console.log("D=12");
}
else if (WHITE < 14) {
    s.innerHTML = thirtn;
    console.log("D=13");
}
else if (WHITE < 15) {
    s.innerHTML = fourtn;
    console.log("D=14");
}
else if (WHITE < 16) {
    s.innerHTML = fifth;
    console.log("D=15");
}
else if (WHITE < 17) {
    s.innerHTML = sixtn;
    console.log("D=16");
}
else if (WHITE < 18) {
    s.innerHTML = seventn;
    console.log("D=17");
}
else if (WHITE < 19) {
    s.innerHTML = eighttn;
    console.log("D=18");
}
else if (WHITE < 20) {
    s.innerHTML = ninetn;
    console.log("D=19");
}
else if (WHITE < 21) {
    s.innerHTML = twenty;
    console.log("D=20");
}
else if (WHITE < 22) {
    s.innerHTML = twenone;
    console.log("D=21");
}
else if (WHITE < 23) {
    s.innerHTML = twentwo;
    console.log("D=22");
}
else if (WHITE < 24) {
    s.innerHTML = twenthree
    console.log("D=23");
}
else if (WHITE < 25) {
    s.innerHTML = twenfour;
    console.log("D=24");
}
else if (WHITE < 26) {
    s.innerHTML = twenfive;
    console.log("D=25");
}
else if (WHITE < 27) {
    s.innerHTML = twensix;
    console.log("D=26");
}
else if (WHITE < 28) {
    s.innerHTML = twenseven;
    console.log("D=27");
}
else if (WHITE < 29) {
    s.innerHTML = tweneight;
    console.log("D=28");
}
