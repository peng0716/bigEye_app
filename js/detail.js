
var data = {
    data1:[
        {'id': '10001', 'value': '星期一'},
        {'id': '10002', 'value': '星期二'},
        {'id': '10003', 'value': '星期三'},
        {'id': '10004', 'value': '星期四'},
        {'id': '10005', 'value': '星期五'},
        {'id': '10006', 'value': '星期六'},
        {'id': '10007', 'value': '星期日'},
    ],
    data2:[
        {'id': '10001', 'value': '工商银行'},
        {'id': '10002', 'value': '农业银行'},
        {'id': '10003', 'value': '建设银行'},
        {'id': '10004', 'value': '中国银行'},
        {'id': '10005', 'value': '招商银行'},
        {'id': '10006', 'value': '邮政储蓄'},
        {'id': '10007', 'value': '平安银行'},
    ],
    data3:[
        {'id': '10001', 'value': '北京'},
        {'id': '10002', 'value': '上海'},
        {'id': '10003', 'value': '深圳'},
        {'id': '10004', 'value': '广州'},
        {'id': '10005', 'value': '武汉'},
        {'id': '10006', 'value': '天津'},
        {'id': '10007', 'value': '武汉'},
        {'id': '10008', 'value': '江苏'},
        {'id': '10009', 'value': '浙江'},
        {'id': '100010', 'value': '福建'},
        {'id': '100011', 'value': '厦门'},
        {'id': '100012', 'value': '成都'},
        {'id': '100013', 'value': '青海'},
    ],
    data4:[
        {'id': '10001', 'value': '2000'},
        {'id': '10002', 'value': '2001'},
        {'id': '10003', 'value': '2002'},
        {'id': '10004', 'value': '2003'},
        {'id': '10005', 'value': '2004'},
        {'id': '10006', 'value': '2005'},
        {'id': '10007', 'value': '2006'},
        {'id': '10008', 'value': '2007'},
        {'id': '10009', 'value': '2008'},
        {'id': '100010', 'value': '2009'},
        {'id': '100011', 'value': '2010'},
        {'id': '100012', 'value': '2011'},
        {'id': '100013', 'value': '2012'},
        {'id': '100014', 'value': '2013'},
        {'id': '100015', 'value': '2014'},
        {'id': '100016', 'value': '2015'},
        {'id': '100017', 'value': '2016'},
    ],
}
$(function(){
    /*全局筛选*/
    $('.filter').click(function(){
        if(!$(this).children('img').hasClass('triangle180')){
            $(this).children('img').addClass('triangle180').next('ul').css('display','block');
        }else{
            $(this).children('img').removeClass('triangle180').next('ul').css('display','none')
        }
    })
    $('.filterNav > li').each(function(){
        $(this).click(function(){
            var text1 = $(this).text();
            $(this).parent('ul').prevAll('span').html(text1);
        })
    })
    /*局部筛选*/
    $('.filterStyle > p').each(function(){
        $(this).click(function(){
            var dataIndex = $(this).attr('data-index');
            $('.theme-popover-mask').fadeIn(100);
            $('.theme-popover').slideDown(200);
            var titleText = $(this).parent().prev('span').text();
            var showBankDom = $(this);
            var oneLevelId = showBankDom.attr('data-default');

            var bankSelect = new IosSelect(1,
                [data[dataIndex]],
                {
                    itemHeight: 50,
                    oneLevelId: oneLevelId,
                    callback: function (selectOneObj) {
                        showBankDom.context.value = selectOneObj.value;
                        showBankDom.context.innerHTML = selectOneObj.value;
                        showBankDom.context.dataset['id'] = selectOneObj.id;
                        showBankDom.context.dataset['value'] = selectOneObj.value;
                        showBankDom.attr('data-default', selectOneObj.id);
                    }
                }
            );
            $('#iosSelectTitle').text(titleText);
        })
    });
});



















/*折线图*/
var legendLine = echarts.init(document.getElementById('legendLine'));
option = {
    padding:5,
    title: {
        text: '堆叠区域图',
        textStyle:{
            fontSize:12,
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        top:28,
        right:0,
        itemWidth:12,
        itemHeight:10,
        textStyle:{
            fontSize:10,
        },
        data:['邮件营销','视频广告','直接访问','搜索引擎']
    },
    toolbox: {
        itemSize:14,
        feature: {
            saveAsImage: {}
        }
    },
    smooth:true,
    grid: {
        left: '1%',
        right: '4%',
        bottom: '2%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            nameTextStyle:{
                fontSize:10,
            },
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'单位：万',
            nameTextStyle:{
                fontSize:8,
            },
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(27,136,245)'
                    }, {
                        offset: 1,
                        color: 'rgb(203,231,255)'
                    }])
                }
            },
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
legendLine.setOption(option);

/*柱状图 - 饼图*/
var legendBar = echarts.init(document.getElementById('legendBar'));
var dataMap = {};
function dataFormatter(obj) {
    var pList = ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东'];
    var temp;
    for (var year = 2004; year <= 2009; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
                name : pList[i],
                value : temp[i]
            }
        }
        obj[year + 'max'] = Math.floor(max / 100) * 100;
        obj[year + 'sum'] = sum;
    }
    return obj;
}
dataMap.dataGDP = dataFormatter({
    //max : 60000,
    2009:[12153.03,7521.85,17235.48,7358.31,9740.25,15212.49,7278.75,8587,15046.45,34457.3,22990.35,10062.82,12236.53,7655.18,33896.65,19480.46,12961.1,13059.69,39482.56],
    2008:[11115,6719.01,16011.97,7315.4,8496.2,13668.58,6426.1,8314.37,14069.87,30981.98,21462.69,8851.66,10823.01,6971.05,30933.28,18018.53,11328.92,11555,36796.71],
    2007:[9846.81,5252.76,13607.32,6024.45,6423.18,11164.3,5284.69,7104,12494.01,26018.48,18753.73,7360.92,9248.53,5800.25,25776.91,15012.46,9333.4,9439.6,31777.01],
    2006:[8117.78,4462.74,11467.6,4878.61,4944.25,9304.52,4275.12,6211.8,10572.24,21742.05,15718.47,6112.5,7583.85,4820.53,21900.19,12362.79,7617.47,7688.67,26587.76],
    2005:[6969.52,3905.64,10012.11,4230.53,3905.03,8047.26,3620.27,5513.7,9247.66,18598.69,13417.68,5350.17,6554.69,4056.76,18366.87,10587.42,6590.19,6596.1,22557.37],
    2004:[6033.21,3110.97,8477.63,3571.37,3041.07,6672,3122.01,4750.6,8072.83,15003.6,11648.7,4759.3,5763.35,3456.7,15021.84,8553.79,5633.24,5641.94,18864.62],
});
dataMap.dataPI = dataFormatter({
    //max : 4000,
    2009:[118.29,128.85,2207.34,477.59,929.6,1414.9,980.57,1154.33,113.82,2261.86,1163.08,1495.45,1182.74,1098.66,3226.64,2769.05,1795.9,1969.69],
    2008:[112.83,122.58,2034.59,313.58,907.95,1302.02,916.72,1088.94,111.8,2100.11,1095.96,1418.09,1158.17,1060.38,3002.65,2658.78,1780,1892.4,1973],
    2007:[101.26,110.19,1804.72,311.97,762.1,1133.42,783.8,915.38,101.84,1816.31,986.02,1200.18,1002.11,905.77,2509.14,2217.66,1378,1626.48],
    2006:[88.8,103.35,1461.81,276.77,634.94,939.43,672.76,750.14,93.81,1545.05,925.1,1011.03,865.98,786.14,2138.9,1916.74,1140.41],
    2005:[88.68,112.38,1400,262.42,589.56,882.41,625.61,684.6,90.26,1461.51,892.83,966.5,827.36,727.37,1963.51,1892.01,1082.13,1100.65],
    2004:[87.36,105.28,1370.43,276.3,522.8,798.43,568.69,605.79,83.45,1367.58,814.1,950.5,786.84,664.5,1778.45,1649.29,1020.09,1022.4],
});
dataMap.dataSI = dataFormatter({
    //max : 26600,
    2009:[2855.55,3987.84,8959.83,3993.8,5114,7906.34,3541.92,4060.72,6001.78,18566.37,11908.49,4905.22,6005.3,3919.45,18901.83,11010.5,6038.08,5687.19,19419.7],
    2008:[2626.41,3709.78,8701.34,4242.36,4376.19,7158.84,3097.12,4319.75,6085.84,16993.34,11567.42,4198.93,5318.44,3554.81,17571.98,10259.99,5082.07,5028.93,18502.2],
    2007:[2509.4,2892.53,7201.88,3454.49,3193.67,5544.14,2475.45,3695.58,5571.06,14471.26,10154.25,3370.96,4476.42,2975.53,14647.53,8282.83,4143.06,3977.72,16004.61],
    2006:[2191.43,2457.08,6110.43,2755.66,2374.96,4566.83,1915.29,3365.31,4969.95,12282.89,8511.51,2711.18,3695.04,2419.74,12574.03,6724.61,3365.08,3187.05,13469.77],
    2005:[2026.51,2135.07,5271.57,2357.04,1773.21,3869.4,1580.83,2971.68,4381.2,10524.96,7164.75,2245.9,3175.92,1917.47,10478.62,5514.14,2852.12,2612.57,11356],
    2004:[1853.58,1685.93,4301.73,1919.4,1248.27,3061.62,1329.68,2487.04,3892.12,8437.99,6250.38,1844.9,2770.49,1566.4,8478.69,4182.1,2320.6,2190.54,],
});
dataMap.dataTI = dataFormatter({
    //max : 25000,
    2009:[9179.19,3405.16,6068.31,2886.92,3696.65,5891.25,2756.26,3371.95,8930.85,13629.07,9918.78,3662.15,5048.49,2637.07,11768.18,5700.91,5127.12,5402.81,18052.59],
    2008:[8375.76,2886.65,5276.04,2759.46,3212.06,5207.72,2412.26,2905.68,7872.23,11888.53,8799.31,3234.64,4346.4,2355.86,10358.64,5099.76,4466.85,16321.46],
    2007:[7236.15,2250.04,4600.72,2257.99,2467.41,4486.74,2025.44,2493.04,6821.11,9730.91,7613.46,2789.78,3770,1918.95,8620.24,4511.97,3812.34,14076.83],
    2006:[5837.55,1902.31,3895.36,1846.18,1934.35,3798.26,1687.07,2096.35,5508.48,7914.11,6281.86,2390.29,3022.83,1614.65,7187.26,3721.44,3111.98,11585.82,],
    2005:[4854.33,1658.19,3340.54,1611.07,1542.26,3295.45,1413.83,1857.42,4776.2,6612.22,5360.1,2137.77,1411.92,5924.74,3181.27,2655.94,2882.88],
    2004:[4092.27,1319.76,2805.47,1375.67,1270,2811.95,1223.64,1657.77,4097.26,5198.03,4584.22,1963.9,2206.02,1225.8,4764.7,2722.4,2292.55,2428.95],
});
dataMap.dataEstate = dataFormatter({
    //max : 3600,
    2009:[1062.47,308.73,612.4,173.31,286.65,605.27,200.14,301.18,1237.56,2025.39,1316.84,497.94,656.61,305.9,1329.59,622.98,546.11,400.11,],
    2008:[844.59,227.88,513.81,166.04,273.3,500.81,182.7,244.47,939.34,1626.13,1052.03,431.27,506.98,281.96,1104.95,512.42,526.88],
    2007:[821.5,183.44,467.97,134.12,191.01,410.43,153.03,225.81,958.06,1365.71,981.42,366.57,511.5,225.96,953.69,447.44,409.65,],
    2006:[658.3,156.64,397.14,117.01,136.5,318.54,131.01,194.7,773.61,1017.91,794.41,281.98,435.22,184.67,786.51,348.7,294.7],
    2005:[493.73,122.67,330.87,106,98.75,256.77,112.29,163.34,715.97,799.73,688.86,231.66,331.8,171.88,664.9,298.19,217.17],
    2004:[436.11,106.14,231.08,95.1,73.81,203.1,97.93,137.74,666.3,534.17,587.83,188.28,248.44,167.2,473.27,236.44],
});
dataMap.dataFinancial = dataFormatter({
    //max : 3200,
    2009:[1603.63,461.2,525.67,361.64,291.1,560.2,180.83,227.54,1804.28,1596.98,1899.33,359.6,612.2,165.1,1044.9,499.92,479.11,402.5],
    2008:[1519.19,368.1,420.74,290.91,219.09,455.07,147.24,177.43,1414.21,1298.48,1653.45,313.81,497.65,130.57,880.28,413.83,393.05,334],
    2007:[1302.77,288.17,347.65,218.73,148.3,386.34,126.03,155.48,1209.08,1054.25,1251.43,223.85,385.84,101.34,734.9,302.31,337.27,260],
    2006:[982.37,186.87,284.04,169.63,108.21,303.41,100.75,74.17,825.2,653.25,906.37,166.01,243.9,79.75,524.94,219.72,174.99],
    2005:[840.2,147.4,213.47,135.07,72.52,232.85,83.63,35.03,675.12,492.4,686.32,127.05,186.12,69.55,448.36,181.74,127.32],
    2004:[713.79,136.97,209.1,110.29,55.89,188.04,77.17,32.2,612.45,440.5,523.49,94.1,171,65.1,343.37,],
});
option = {
    baseOption: {
        timeline: {
            left:0,
            right:0,
            axisType: 'category',
            autoPlay: true,
            symbolSize:14,
            playInterval: 2000,
            controlStyle:{
                itemSize:28,
            },
            data: [
                '2004-01-01',
                {
                    value: '2005-01-01',
                    tooltip: {
                        formatter: '{b} GDP达到一个高度'
                    },
                    symbol: 'diamond',
                    symbolSize: 18
                },
                '2006-01-01', '2007-01-01',
                {
                    value: '2008-01-01',
                    tooltip: {
                        formatter: function (params) {
                            return params.name + 'GDP达到又一个高度';
                        }
                    },
                    symbol: 'diamond',
                    symbolSize: 18
                },
                '2009-01-01',
            ],
            label: {
                formatter : function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
            top:10,
            subtext: '数据来自国家统计局',
            padding:[0,0],
            itemGap:3,
            subtextStyle:{
                fontSize:10,
            }
        },
        tooltip: {},
        legend: {
            padding:3,
            top:10,
            x: 'right',
            itemWidth:10,
            itemHeight:10,
            textStyle:{
                fontSize:10,
            },
            data: ['第一产业', '第二产业', '第三产业'],
            selected: {
                'GDP': false, '金融': false, '房地产': false
            }
        },
        calculable : true,
        grid: {
            top: 70,
            bottom: 100,
            left: '16%',
            right: '3%',
        },
        xAxis: [
            {
                'type':'category',
                'axisLabel':{'interval':0},
                'data':[
                    '北京','\n天津','河北','\n山西','内蒙古','\n辽宁','吉林','\n黑龙江',
                    '上海','\n江苏','浙江','\n安徽','福建','\n江西','山东','\n河南',
                    '湖北','\n湖南','广东'
                ],
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'GDP（亿元）',
                nameTextStyle:{
                    fontSize:8,
                },
                max: 30000
            }
        ],
        series: [
            {name: 'GDP', type: 'bar'},
            {name: '金融', type: 'bar'},
            {name: '房地产', type: 'bar'},
            {name: '第一产业', type: 'bar'},
            {name: '第二产业', type: 'bar'},
            {name: '第三产业', type: 'bar'},
            {
                name: 'GDP占比',
                type: 'pie',
                center: ['73%', '35%'],
                radius: '25%',
                label:{
                    normal:{
                        textStyle:{
                            fontSize:10,
                        }
                    },
                },
                labelLine:{
                    normal:{
                        length:5,
                        length2:5,
                    },
                },
            }
        ]
    },
    options: [
        {
            title: {
                padding:0,
                text: '2004全国宏观经济指标',
                textStyle:{
                    fontSize:12,
                }
            },
            series : [
                {data: dataMap.dataGDP['2004']},
                {data: dataMap.dataFinancial['2004']},
                {data: dataMap.dataEstate['2004']},
                {data: dataMap.dataPI['2004']},
                {data: dataMap.dataSI['2004']},
                {data: dataMap.dataTI['2004']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2004sum']},
                    {name: '第二产业', value: dataMap.dataSI['2004sum']},
                    {name: '第三产业', value: dataMap.dataTI['2004sum']}
                ]}
            ]
        },
        {
            title : {text: '2005全国宏观经济指标'},
            series : [
                {data: dataMap.dataGDP['2005']},
                {data: dataMap.dataFinancial['2005']},
                {data: dataMap.dataEstate['2005']},
                {data: dataMap.dataPI['2005']},
                {data: dataMap.dataSI['2005']},
                {data: dataMap.dataTI['2005']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2005sum']},
                    {name: '第二产业', value: dataMap.dataSI['2005sum']},
                    {name: '第三产业', value: dataMap.dataTI['2005sum']}
                ]}
            ]
        },
        {
            title : {text: '2006全国宏观经济指标'},
            series : [
                {data: dataMap.dataGDP['2006']},
                {data: dataMap.dataFinancial['2006']},
                {data: dataMap.dataEstate['2006']},
                {data: dataMap.dataPI['2006']},
                {data: dataMap.dataSI['2006']},
                {data: dataMap.dataTI['2006']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2006sum']},
                    {name: '第二产业', value: dataMap.dataSI['2006sum']},
                    {name: '第三产业', value: dataMap.dataTI['2006sum']}
                ]}
            ]
        },
        {
            title : {text: '2007全国宏观经济指标'},
            series : [
                {data: dataMap.dataGDP['2007']},
                {data: dataMap.dataFinancial['2007']},
                {data: dataMap.dataEstate['2007']},
                {data: dataMap.dataPI['2007']},
                {data: dataMap.dataSI['2007']},
                {data: dataMap.dataTI['2007']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2007sum']},
                    {name: '第二产业', value: dataMap.dataSI['2007sum']},
                    {name: '第三产业', value: dataMap.dataTI['2007sum']}
                ]}
            ]
        },
        {
            title : {text: '2008全国宏观经济指标'},
            series : [
                {data: dataMap.dataGDP['2008']},
                {data: dataMap.dataFinancial['2008']},
                {data: dataMap.dataEstate['2008']},
                {data: dataMap.dataPI['2008']},
                {data: dataMap.dataSI['2008']},
                {data: dataMap.dataTI['2008']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2008sum']},
                    {name: '第二产业', value: dataMap.dataSI['2008sum']},
                    {name: '第三产业', value: dataMap.dataTI['2008sum']}
                ]}
            ]
        },
    ]
};
legendBar.setOption(option);
