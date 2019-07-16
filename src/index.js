import './css/base.css';
import { alltotal, dataSI } from './js/baseData';
let dom = document.getElementById("container");
let myChart = echarts.init(dom);
let option = null;
let dateList = ['2019-07-01', '2019-07-02', '2019-07-03', '2019-07-04', '2019-07-05', '2019-07-06', '2019-07-07'];
let optionsData = [];
dateList.forEach((element, index) => { //options数据
    let key = index + 1;
    optionsData.push({
        title: {
            text: element + '详细数据'
        },
        series: [{
                data: dataSI[key]
            },
            {
                data: [{
                    name: '已完成',
                    value: dataSI[key + 'sum']
                }, {
                    name: '未完成',
                    value: alltotal - dataSI[key + 'sum']
                }]
            }
        ]
    })
});
option = {
    baseOption: {
        timeline: {
            // y: 0,
            bottom: -8,
            axisType: 'category',
            // autoPlay: true,
            position: 'bottom',
            playInterval: 1000,
            itemStyle: {
                color: '#FF8040'
            },
            data: dateList,
        },
        tooltip: {
        },
        legend: {
            x: 'right',
            data: ['已完成'],
        },
        calculable: true,
        grid: {
            top: 60,
            bottom: 100,
            width: '70%',
            left: 50
        },
        tooltip: {
            trigger: 'axis',
            show: true,
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
            axisPointer: {
                type: 'shadow',
            },
            formatter: function (params) {
                let data = params[0].data || {};
                let value = data.value * 100;
                if (data.total || data.complete) {
                    return '未完成：' + data.total + '<br/>' +
                        '已完成：' + data.complete + '<br/>' +
                        '完成率：' + value.toFixed(2) + '%';
                } else {
                    return ''
                }
            }
        },
        xAxis: [
            {
                'axisLabel': { 'interval': 0 },
                'data': [
                    '高新万达一店', '宽厚里一店', '泺源大街店', '普利街店', '汇隆广场店', '滨河码头店', '滨河物流店', '华信店', '高新万达二店', '汉峪金谷一店',
                    '大明湖店', '齐盛广场一店', '齐盛广场二店', '历黄路店', '未来城店', '诚信大厦店', '汉峪金谷一店', '文化西路店', '山大北路店', '荣盛国际店',
                    '山东电视台店', '花园路店', '高新万达三店', '绿地缤纷城店', '和谐广场店', '中润广场店', '高新万达旗舰店', '宽厚里三店', '宽厚里二店', '洪楼广场店',
                    '报业大厦店', '绿城金融中心店', '林华大厦店', '乐梦中心店', '芙蓉街店', '汉峪金谷二店'
                ],
                splitLine: { show: false },
                axisLabel: {//坐标轴刻度标签的相关设置。
                    interval: 0,
                    rotate: "45"
                }
            }
        ],
        yAxis: {
            type: 'value',
            name: '完成率%',
            axisLabel: {
                formatter: function (value, index, d) {
                    console.log(value.toFixed(2));
                    console.log(value.toFixed(2) * 100)
                    console.log(value.toFixed(2) * 100 + '%');
                    var dataVal = value * 100;
                    return dataVal.toFixed(0) + '%'
                }
            },
        },
        series: [
            {
                type: 'bar',
                itemStyle: {
                    color: '#ff6200',
                }
            },
            {
                type: 'pie',
                center: ['85%', '22%'],
                itemStyle: {
                    color: function (params) {
                        let colorList = ['#ff6200', '#1cb5b7']
                        return colorList[params.dataIndex]
                    }
                },
                radius: '28%',
                z: 100
            }
        ]
    },
    options: optionsData
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
