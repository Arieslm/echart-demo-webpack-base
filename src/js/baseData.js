let alltotal = 0;
let total = [];
let list = {};
for (let i = 0; i< 36; i++) {// 每个店总目标的随机数
    let base = 30000;
    let j = Math.ceil((Math.random() - 0.5) * 10000);
    let num = base + j
    total.push(num);
    alltotal += num
}
for (let i = 1; i < 8; i++) { //每个店完成的随机数（按天累加）
    list[i] = [];
    let num = 0;
    for (let j =0; j < 36;  j++) {
        let randomNum = Math.random();
        randomNum = randomNum > 0.6 ? randomNum : randomNum + 0.45;
        num = Math.ceil(randomNum * 1000);
        list[i].push(num * i);
    }
}
function dataFormatter(obj) {
    let pList = [
        '高新万达一店', '宽厚里一店', '泺源大街店', '普利街店', '汇隆广场店', '滨河码头店', '滨河物流店', '华信店', '高新万达二店', '汉峪金谷一店',
        '大明湖店', '齐盛广场一店', '齐盛广场二店', '历黄路店', '未来城店', '诚信大厦店', '汉峪金谷一店', '文化西路店', '山大北路店', '荣盛国际店',
        '山东电视台店', '花园路店', '高新万达三店', '绿地缤纷城店', '和谐广场店', '中润广场店', '高新万达旗舰店', '宽厚里三店', '宽厚里二店', '洪楼广场店',
        '报业大厦店', '绿城金融中心店', '林华大厦店', '乐梦中心店', '芙蓉街店', '汉峪金谷二店'
    ];
    let temp;
    for (let day = 1; day <= 7; day++) {
        let sum = 0;
        temp = obj[day];
        for (let i = 0, l = temp.length; i < l; i++) {
            sum += temp[i];
            obj[day][i] = {
                name: pList[i],
                value: temp[i] / total[i],
                total: total[i],
                complete: temp[i]
            }
        }
        obj[day + 'sum'] = sum;
    }
    return obj;
}
let dataSI = dataFormatter(list)
export {alltotal, dataSI};