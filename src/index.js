import './css/base.css';
import {alltotal,  list, total} from  './js/baseData';
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
var option = null;
var dataMap = {};
function dataFormatter(obj) {
    var pList = [
        '高新万达一店','宽厚里一店','泺源大街店','普利街店','汇隆广场店','滨河码头店','滨河物流店','华信店','高新万达二店','汉峪金谷一店',
        '大明湖店','齐盛广场一店','齐盛广场二店','历黄路店','未来城店','诚信大厦店','汉峪金谷一店','文化西路店','山大北路店','荣盛国际店',
        '山东电视台店','花园路店','高新万达三店','绿地缤纷城店','和谐广场店','中润广场店','高新万达旗舰店','宽厚里三店','宽厚里二店','洪楼广场店',
        '报业大厦店', '绿城金融中心店','林华大厦店','乐梦中心店','芙蓉街店','汉峪金谷二店'
    ];
    var temp;
    for (var day = 1; day <= 7; day++) {
        var sum = 0;
        temp = obj[day];
        for (var i = 0, l = temp.length; i < l; i++) {
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

dataMap.dataSI = dataFormatter(list);
function arrFn (arr) {
    var rsulut = [];
    for (var i =0; i< arr.length; i ++) {
        result.push(arr.value);
    }
    return rsulut;
}
option = {
    baseOption: {
        timeline: {
            // y: 0,
            bottom: -8,
            axisType: 'category',
            autoPlay: true,
            position: 'bottom',
            playInterval: 1000,
            itemStyle: {
                color: '#FF8040'
            },
            data: [
                '2019-07-01','2019-07-02','2019-07-03',
                '2019-07-04','2019-07-05','2019-07-06','2019-07-07'
            ],
        },
        tooltip: {
        },
        legend: {
            x: 'right',
            data: ['已完成'],
        },
        calculable : true,
        grid: {
            top: 80,
            bottom: 100,
        },
        tooltip: {
            trigger: 'axis',
            show:true,
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
            axisPointer: {
                type: 'shadow',
            },
            formatter: function (params) {
                var data = params[0].data || {};
                var value = data.value * 100;
                if (data.total || data.complete) {
                    return '未完成：' + data.total + '<br/>' +
                        '已完成：' + data.complete + '<br/>' +
                        '完成率：'+ value.toFixed(2) + '%';
                } else {
                    return ''
                }
            }
        },
        xAxis: [
            {
                'axisLabel':{'interval':0},
                'data':[
                    '高新万达一店','宽厚里一店','泺源大街店','普利街店','汇隆广场店','滨河码头店','滨河物流店','华信店','高新万达二店','汉峪金谷一店',
                    '大明湖店','齐盛广场一店','齐盛广场二店','历黄路店','未来城店','诚信大厦店','汉峪金谷一店','文化西路店','山大北路店','荣盛国际店',
                    '山东电视台店','花园路店','高新万达三店','绿地缤纷城店','和谐广场店','中润广场店','高新万达旗舰店','宽厚里三店','宽厚里二店','洪楼广场店',
                    '报业大厦店', '绿城金融中心店','林华大厦店','乐梦中心店','芙蓉街店','汉峪金谷二店','','','','','','','',''
                ],
                splitLine: {show: false},
                axisLabel : {//坐标轴刻度标签的相关设置。
                    interval:0,
                    rotate:"45"
                }
            }
        ],
        yAxis: {
            type: 'value',
            name: '完成率%',
            axisLabel: {
                formatter: function (value, index, d) {
                    return value * 100 + '%'
                }
            },
        },
        series: [
            {
                type: 'bar',
                itemStyle: {
                    color: '#ff6c00',
                }
            },
            {
                type: 'pie',
                center: ['85%', '18%'],
                itemStyle: {
                    color: function (params) {
                        var colorList = ['#ff6c00','#0066CC']
                        return colorList[params.dataIndex]
                    }
                },
                radius: '28%',
                z: 100
            }
        ]
    },
    options: [
        {
            title: {text: '7月1日详细数据'},
            series: [
                {data: dataMap.dataSI['1']},
                {data: [
                        {name: '已完成', value: dataMap.dataSI['1sum']},
                        {name: '未完成', value: alltotal - dataMap.dataSI['1sum']}
                    ]}
            ]
        },
        {
            title : {text: '7月2日详细数据'},
            series : [
                {data: dataMap.dataSI['2']},
                {data: [
                        {name: '已完成', value: dataMap.dataSI['2sum']},
                        {name: '未完成', value: alltotal - dataMap.dataSI['2sum']}
                    ]}
            ]
        },
        {
            title : {text: '7月3日详细数据'},
            series : [
                {data: dataMap.dataSI['3']},
                {data: [
                        {name: '已完成', value: dataMap.dataSI['3sum']},
                        {name: '未完成', value: alltotal - dataMap.dataSI['3sum']}
                    ]}
            ]
        },
        {
            title : {text: '7月4日详细数据'},
            series : [
                {data: dataMap.dataSI['4']},
                {data: [
                        {name: '已完成', value: dataMap.dataSI['4sum']},
                        {name: '未完成', value: alltotal - dataMap.dataSI['4sum']}
                    ]}
            ]
        },
        {
            title : {text: '7月5日详细数据'},
            series : [
                {data: dataMap.dataSI['5']},
                {data: [
                        {name: '已完成', value: dataMap.dataSI['5sum']},
                        {name: '未完成', value: alltotal - dataMap.dataSI['5sum']}
                    ]}
            ]
        },
        {
            title : {text: '7月6日详细数据'},
            series : [
                {data: dataMap.dataSI['6']},
                {data: [
                        {name: '已完成', value: dataMap.dataSI['6sum']},
                        {name: '未完成', value: alltotal - dataMap.dataSI['6sum']}
                    ]}
            ]
        },
        {
            title : {text: '7月7日详细数据'},
            series : [
                {data: dataMap.dataSI['7']},
                {data: [
                        {name: '已完成', value: dataMap.dataSI['7sum']},
                        {name: '未完成', value: alltotal - dataMap.dataSI['7sum']}
                    ]}
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
