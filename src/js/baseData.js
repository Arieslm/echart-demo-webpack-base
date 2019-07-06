var alltotal = 0;
var total = [];
for (var i = 0; i< 36; i++) {// 每个店总目标的随机数
    var base = 40000;
    var j = Math.ceil((Math.random() - 0.5) * 10000);
    var num = base + j
    total.push(num);
    alltotal += num
}
var list = {};
for (var i = 1; i < 8; i++) { //每个店完成的随机数（按天累加）
    list[i] = [];
    var num = 0;
    for (var j =0; j < 36;  j++) {
        var randomNum = Math.random();
        randomNum = randomNum > 0.6 ? randomNum : randomNum + 0.45;
        num = Math.ceil(randomNum * 1000);
        list[i].push(num * i);
    }
}
export {alltotal, list, total};