
var dataXQ = {
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
    /*横屏竖屏*/
    window.addEventListener("orientationchange", function() {
        location.reload();
    });
    /*全局筛选*/
    $('.filter').on('touchstart',function(){
        if(!$(this).find('img').hasClass('triangle180')){
            $('.filter > img').removeClass('triangle180').next('ul').css('display','none');
            $(this).find('img').addClass('triangle180').next('ul').css('display','block');
            $('.filterBg').css('display','block');
        }else{
            $(this).find('img').removeClass('triangle180').next('ul').css('display','none');
            $('.filterBg').css('display','none');
        }
    })
    $('.filterNav > li').each(function(){
        $(this).on('touchstart',function(){
            var text1 = $(this).text();
            $(this).parent('ul').prevAll('span').html(text1);
            $('.filterBg').css('display','none');
        })
    })
    /*$('.filter').click(function(){
        if(!$(this).find('img').hasClass('triangle180')){
            $('.filter > img').removeClass('triangle180').next('ul').css('display','none');
            $(this).find('img').addClass('triangle180').next('ul').css('display','block');
            $('.filterBg').css('display','block');
        }else{
            $(this).find('img').removeClass('triangle180').next('ul').css('display','none');
            $('.filterBg').css('display','none');
        }
    })
    $('.filterNav > li').each(function(){
        $(this).click(function(){
            var text1 = $(this).text();
            $(this).parent('ul').prevAll('span').html(text1);
            $('.filterBg').css('display','none');
        })
    })*/
    /*局部筛选*/
    $('.filterStyle > p').each(function(){
        $(this).on('touchstart',function(){
            var dataIndex = $(this).attr('data-index');
            $('.theme-popover-mask').fadeIn(100);
            $('.theme-popover').slideDown(200);
            var titleText = $(this).parent().prev('span').text();
            var showBankDom = $(this);
            var oneLevelId = showBankDom.attr('data-default');

            var bankSelect = new IosSelect(1,
                [dataXQ[dataIndex]],
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
            /*横屏处理*/
            var orientChk = document.documentElement.clientWidth > document.documentElement.clientHeight?'landscape':'portrait';
            if(orientChk =='landscape'){
                $('.layer').css('height','100%');
            }
            $('#iosSelectTitle').text(titleText);
        })
    });
});


/*折线图*/
var legendLine = echarts.init(document.getElementById('legendLine'));
legendLine.showLoading({
    text:'正在努力加载中...'
})
var option1 = {
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
        itemWidth:10,
        itemHeight:8,
        textStyle:{
            fontSize:9,
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
legendLine.setOption(option1);
legendLine.hideLoading();

/*柱状图 - 饼图*/
var legendBar = echarts.init(document.getElementById('legendBar'));
legendBar.showLoading({
    text:'正在努力加载中...'
})
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
var option2 = {
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
legendBar.setOption(option2);
legendBar.hideLoading();

/*地图*/
var geoCoordMap = {
    "海门":[121.15,31.89],
    "鄂尔多斯":[109.781327,39.608266],
    "招远":[120.38,37.35],
    "舟山":[122.207216,29.985295],
    "齐齐哈尔":[123.97,47.33],
    "盐城":[120.13,33.38],
    "赤峰":[118.87,42.28],
    "青岛":[120.33,36.07],
    "乳山":[121.52,36.89],
    "金昌":[102.188043,38.520089],
    "泉州":[118.58,24.93],
    "莱西":[120.53,36.86],
    "日照":[119.46,35.42],
    "胶南":[119.97,35.88],
    "南通":[121.05,32.08],
    "拉萨":[91.11,29.97],
    "云浮":[112.02,22.93],
    "梅州":[116.1,24.55],
    "文登":[122.05,37.2],
    "上海":[121.48,31.22],
    "攀枝花":[101.718637,26.582347],
    "威海":[122.1,37.5],
    "承德":[117.93,40.97],
    "厦门":[118.1,24.46],
    "汕尾":[115.375279,22.786211],
    "潮州":[116.63,23.68],
    "丹东":[124.37,40.13],
    "太仓":[121.1,31.45],
    "曲靖":[103.79,25.51],
    "烟台":[121.39,37.52],
    "福州":[119.3,26.08],
    "瓦房店":[121.979603,39.627114],
    "即墨":[120.45,36.38],
    "抚顺":[123.97,41.97],
    "玉溪":[102.52,24.35],
    "张家口":[114.87,40.82],
    "阳泉":[113.57,37.85],
    "莱州":[119.942327,37.177017],
    "湖州":[120.1,30.86],
    "汕头":[116.69,23.39],
    "昆山":[120.95,31.39],
    "宁波":[121.56,29.86],
    "湛江":[110.359377,21.270708],
    "揭阳":[116.35,23.55],
    "荣成":[122.41,37.16],
    "连云港":[119.16,34.59],
    "葫芦岛":[120.836932,40.711052],
    "常熟":[120.74,31.64],
    "东莞":[113.75,23.04],
    "河源":[114.68,23.73],
    "淮安":[119.15,33.5],
    "泰州":[119.9,32.49],
    "南宁":[108.33,22.84],
    "营口":[122.18,40.65],
    "惠州":[114.4,23.09],
    "江阴":[120.26,31.91],
    "蓬莱":[120.75,37.8],
    "韶关":[113.62,24.84],
    "嘉峪关":[98.289152,39.77313],
    "广州":[113.23,23.16],
    "延安":[109.47,36.6],
    "太原":[112.53,37.87],
    "清远":[113.01,23.7],
    "中山":[113.38,22.52],
    "昆明":[102.73,25.04],
    "寿光":[118.73,36.86],
    "盘锦":[122.070714,41.119997],
    "长治":[113.08,36.18],
    "深圳":[114.07,22.62],
    "珠海":[113.52,22.3],
    "宿迁":[118.3,33.96],
    "咸阳":[108.72,34.36],
    "铜川":[109.11,35.09],
    "平度":[119.97,36.77],
    "佛山":[113.11,23.05],
    "海口":[110.35,20.02],
    "江门":[113.06,22.61],
    "章丘":[117.53,36.72],
    "肇庆":[112.44,23.05],
    "大连":[121.62,38.92],
    "临汾":[111.5,36.08],
    "吴江":[120.63,31.16],
    "石嘴山":[106.39,39.04],
    "沈阳":[123.38,41.8],
    "苏州":[120.62,31.32],
    "茂名":[110.88,21.68],
    "嘉兴":[120.76,30.77],
    "长春":[125.35,43.88],
    "胶州":[120.03336,36.264622],
    "银川":[106.27,38.47],
    "张家港":[120.555821,31.875428],
    "三门峡":[111.19,34.76],
    "锦州":[121.15,41.13],
    "南昌":[115.89,28.68],
    "柳州":[109.4,24.33],
    "三亚":[109.511909,18.252847],
    "自贡":[104.778442,29.33903],
    "吉林":[126.57,43.87],
    "阳江":[111.95,21.85],
    "泸州":[105.39,28.91],
    "西宁":[101.74,36.56],
    "宜宾":[104.56,29.77],
    "呼和浩特":[111.65,40.82],
    "成都":[104.06,30.67],
    "大同":[113.3,40.12],
    "镇江":[119.44,32.2],
    "桂林":[110.28,25.29],
    "张家界":[110.479191,29.117096],
    "宜兴":[119.82,31.36],
    "北海":[109.12,21.49],
    "西安":[108.95,34.27],
    "金坛":[119.56,31.74],
    "东营":[118.49,37.46],
    "牡丹江":[129.58,44.6],
    "遵义":[106.9,27.7],
    "绍兴":[120.58,30.01],
    "扬州":[119.42,32.39],
    "常州":[119.95,31.79],
    "潍坊":[119.1,36.62],
    "重庆":[106.54,29.59],
    "台州":[121.420757,28.656386],
    "南京":[118.78,32.04],
    "滨州":[118.03,37.36],
    "贵阳":[106.71,26.57],
    "无锡":[120.29,31.59],
    "本溪":[123.73,41.3],
    "克拉玛依":[84.77,45.59],
    "渭南":[109.5,34.52],
    "马鞍山":[118.48,31.56],
    "宝鸡":[107.15,34.38],
    "焦作":[113.21,35.24],
    "句容":[119.16,31.95],
    "北京":[116.46,39.92],
    "徐州":[117.2,34.26],
    "衡水":[115.72,37.72],
    "包头":[110,40.58],
    "绵阳":[104.73,31.48],
    "乌鲁木齐":[87.68,43.77],
    "枣庄":[117.57,34.86],
    "杭州":[120.19,30.26],
    "淄博":[118.05,36.78],
    "鞍山":[122.85,41.12],
    "溧阳":[119.48,31.43],
    "库尔勒":[86.06,41.68],
    "安阳":[114.35,36.1],
    "开封":[114.35,34.79],
    "济南":[117,36.65],
    "德阳":[104.37,31.13],
    "温州":[120.65,28.01],
    "九江":[115.97,29.71],
    "邯郸":[114.47,36.6],
    "临安":[119.72,30.23],
    "兰州":[103.73,36.03],
    "沧州":[116.83,38.33],
    "临沂":[118.35,35.05],
    "南充":[106.110698,30.837793],
    "天津":[117.2,39.13],
    "富阳":[119.95,30.07],
    "泰安":[117.13,36.18],
    "诸暨":[120.23,29.71],
    "郑州":[113.65,34.76],
    "哈尔滨":[126.63,45.75],
    "聊城":[115.97,36.45],
    "芜湖":[118.38,31.33],
    "唐山":[118.02,39.63],
    "平顶山":[113.29,33.75],
    "邢台":[114.48,37.05],
    "德州":[116.29,37.45],
    "济宁":[116.59,35.38],
    "荆州":[112.239741,30.335165],
    "宜昌":[111.3,30.7],
    "义乌":[120.06,29.32],
    "丽水":[119.92,28.45],
    "洛阳":[112.44,34.7],
    "秦皇岛":[119.57,39.95],
    "株洲":[113.16,27.83],
    "石家庄":[114.48,38.03],
    "莱芜":[117.67,36.19],
    "常德":[111.69,29.05],
    "保定":[115.48,38.85],
    "湘潭":[112.91,27.87],
    "金华":[119.64,29.12],
    "岳阳":[113.09,29.37],
    "长沙":[113,28.21],
    "衢州":[118.88,28.97],
    "廊坊":[116.7,39.53],
    "菏泽":[115.480656,35.23375],
    "合肥":[117.27,31.86],
    "武汉":[114.31,30.52],
    "大庆":[125.03,46.58]
};
var data = [
    {name: "海门", value: 9},
    {name: "鄂尔多斯", value: 12},
    {name: "招远", value: 12},
    {name: "舟山", value: 12},
    {name: "齐齐哈尔", value: 14},
    {name: "盐城", value: 15},
    {name: "赤峰", value: 16},
    {name: "青岛", value: 18},
    {name: "乳山", value: 18},
    {name: "金昌", value: 19},
    {name: "泉州", value: 21},
    {name: "莱西", value: 21},
    {name: "日照", value: 21},
    {name: "胶南", value: 22},
    {name: "南通", value: 23},
    {name: "拉萨", value: 24},
    {name: "云浮", value: 24},
    {name: "梅州", value: 25},
    {name: "文登", value: 25},
    {name: "上海", value: 25},
    {name: "攀枝花", value: 25},
    {name: "威海", value: 25},
    {name: "承德", value: 25},
    {name: "厦门", value: 26},
    {name: "汕尾", value: 26},
    {name: "潮州", value: 26},
    {name: "丹东", value: 27},
    {name: "太仓", value: 27},
    {name: "曲靖", value: 27},
    {name: "烟台", value: 28},
    {name: "福州", value: 29},
    {name: "瓦房店", value: 30},
    {name: "即墨", value: 30},
    {name: "抚顺", value: 31},
    {name: "玉溪", value: 31},
    {name: "张家口", value: 31},
    {name: "阳泉", value: 31},
    {name: "莱州", value: 32},
    {name: "湖州", value: 32},
    {name: "汕头", value: 32},
    {name: "昆山", value: 33},
    {name: "宁波", value: 33},
    {name: "湛江", value: 33},
    {name: "揭阳", value: 34},
    {name: "荣成", value: 34},
    {name: "连云港", value: 35},
    {name: "葫芦岛", value: 35},
    {name: "常熟", value: 36},
    {name: "东莞", value: 36},
    {name: "河源", value: 36},
    {name: "淮安", value: 36},
    {name: "泰州", value: 36},
    {name: "南宁", value: 37},
    {name: "营口", value: 37},
    {name: "惠州", value: 37},
    {name: "江阴", value: 37},
    {name: "蓬莱", value: 37},
    {name: "韶关", value: 38},
    {name: "嘉峪关", value: 38},
    {name: "广州", value: 38},
    {name: "延安", value: 38},
    {name: "太原", value: 39},
    {name: "清远", value: 39},
    {name: "中山", value: 39},
    {name: "昆明", value: 39},
    {name: "寿光", value: 40},
    {name: "盘锦", value: 40},
    {name: "长治", value: 41},
    {name: "深圳", value: 41},
    {name: "珠海", value: 42},
    {name: "宿迁", value: 43},
    {name: "咸阳", value: 43},
    {name: "铜川", value: 44},
    {name: "平度", value: 44},
    {name: "佛山", value: 44},
    {name: "海口", value: 44},
    {name: "江门", value: 45},
    {name: "章丘", value: 45},
    {name: "肇庆", value: 46},
    {name: "大连", value: 47},
    {name: "临汾", value: 47},
    {name: "吴江", value: 47},
    {name: "石嘴山", value: 49},
    {name: "沈阳", value: 50},
    {name: "苏州", value: 50},
    {name: "茂名", value: 50},
    {name: "嘉兴", value: 51},
    {name: "长春", value: 51},
    {name: "胶州", value: 52},
    {name: "银川", value: 52},
    {name: "张家港", value: 52},
    {name: "三门峡", value: 53},
    {name: "锦州", value: 54},
    {name: "南昌", value: 54},
    {name: "柳州", value: 54},
    {name: "三亚", value: 54},
    {name: "自贡", value: 56},
    {name: "吉林", value: 56},
    {name: "阳江", value: 57},
    {name: "泸州", value: 57},
    {name: "西宁", value: 57},
    {name: "宜宾", value: 58},
    {name: "呼和浩特", value: 58},
    {name: "成都", value: 58},
    {name: "大同", value: 58},
    {name: "镇江", value: 59},
    {name: "桂林", value: 59},
    {name: "张家界", value: 59},
    {name: "宜兴", value: 59},
    {name: "北海", value: 60},
    {name: "西安", value: 61},
    {name: "金坛", value: 62},
    {name: "东营", value: 62},
    {name: "牡丹江", value: 63},
    {name: "遵义", value: 63},
    {name: "绍兴", value: 63},
    {name: "扬州", value: 64},
    {name: "常州", value: 64},
    {name: "潍坊", value: 65},
    {name: "重庆", value: 66},
    {name: "台州", value: 67},
    {name: "南京", value: 67},
    {name: "滨州", value: 70},
    {name: "贵阳", value: 71},
    {name: "无锡", value: 71},
    {name: "本溪", value: 71},
    {name: "克拉玛依", value: 72},
    {name: "渭南", value: 72},
    {name: "马鞍山", value: 72},
    {name: "宝鸡", value: 72},
    {name: "焦作", value: 75},
    {name: "句容", value: 75},
    {name: "北京", value: 79},
    {name: "徐州", value: 79},
    {name: "衡水", value: 80},
    {name: "包头", value: 80},
    {name: "绵阳", value: 80},
    {name: "乌鲁木齐", value: 84},
    {name: "枣庄", value: 84},
    {name: "杭州", value: 84},
    {name: "淄博", value: 85},
    {name: "鞍山", value: 86},
    {name: "溧阳", value: 86},
    {name: "库尔勒", value: 86},
    {name: "安阳", value: 90},
    {name: "开封", value: 90},
    {name: "济南", value: 92},
    {name: "德阳", value: 93},
    {name: "温州", value: 95},
    {name: "九江", value: 96},
    {name: "邯郸", value: 98},
    {name: "临安", value: 99},
    {name: "兰州", value: 99},
    {name: "沧州", value: 100},
    {name: "临沂", value: 103},
    {name: "南充", value: 104},
    {name: "天津", value: 105},
    {name: "富阳", value: 106},
    {name: "泰安", value: 112},
    {name: "诸暨", value: 112},
    {name: "郑州", value: 113},
    {name: "哈尔滨", value: 114},
    {name: "聊城", value: 116},
    {name: "芜湖", value: 117},
    {name: "唐山", value: 119},
    {name: "平顶山", value: 119},
    {name: "邢台", value: 119},
    {name: "德州", value: 120},
    {name: "济宁", value: 120},
    {name: "荆州", value: 127},
    {name: "宜昌", value: 130},
    {name: "义乌", value: 132},
    {name: "丽水", value: 133},
    {name: "洛阳", value: 134},
    {name: "秦皇岛", value: 136},
    {name: "株洲", value: 143},
    {name: "石家庄", value: 147},
    {name: "莱芜", value: 148},
    {name: "常德", value: 152},
    {name: "保定", value: 153},
    {name: "湘潭", value: 154},
    {name: "金华", value: 157},
    {name: "岳阳", value: 169},
    {name: "长沙", value: 175},
    {name: "衢州", value: 177},
    {name: "廊坊", value: 193},
    {name: "菏泽", value: 194},
    {name: "合肥", value: 229},
    {name: "武汉", value: 273},
    {name: "大庆", value: 279}
];
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
var convertedData = [
    convertData(data),
    convertData(data.sort(function (a, b) {
        return b.value - a.value;
    }).slice(0, 6))
];
var myChart = echarts.init(document.getElementById('myChart'));

myChart.showLoading({
    text:'正在努力加载中...'
})
var option3 = {
    backgroundColor: '#404a59',
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicInOut',
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'cubicInOut',
    title: [
        {
            text: '全国主要城市 PM 2.5',
            subtext: 'data from PM25.in',
            sublink: 'http://www.pm25.in',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        {
            id: 'statistic',
            right: 120,
            top: 40,
            width: 100,
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        }
    ],
    toolbox: {
        iconStyle: {
            normal: {
                borderColor: '#fff'
            },
            emphasis: {
                borderColor: '#b1e4ff'
            }
        }
    },
    brush: {
        outOfBrush: {
            color: '#abc'
        },
        brushStyle: {
            borderWidth: 2,
            color: 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0,0,0,0.5)',
        },
        seriesIndex: [0, 1],
        throttleType: 'debounce',
        throttleDelay: 300,
        geoIndex: 0
    },
    geo: {
        map: 'china',
        left: '10',
        right: '35%',
        center: [117.98561551896913, 31.205000490896193],
        zoom: 2.5,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    tooltip : {
        trigger: 'item'
    },
    grid: {
        right: 40,
        top: 100,
        bottom: 40,
        width: '30%'
    },
    xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        boundaryGap: false,
        splitLine: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {margin: 2, textStyle: {color: '#aaa'}},
    },
    yAxis: {
        type: 'category',
        name: 'TOP 20',
        nameGap: 16,
        axisLine: {show: false, lineStyle: {color: '#ddd'}},
        axisTick: {show: false, lineStyle: {color: '#ddd'}},
        axisLabel: {interval: 0, textStyle: {color: '#ddd'}},
        data: []
    },
    series : [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertedData[0],
            symbolSize: function (val) {
                return Math.max(val[2] / 10, 8);
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertedData[1],
            symbolSize: function (val) {
                return Math.max(val[2] / 10, 8);
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            id: 'bar',
            zlevel: 2,
            type: 'bar',
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            },
            data: []
        }
    ]
};
myChart.setOption(option3);
myChart.hideLoading();

myChart.on('brushselected', renderBrushed);

// myChart.setOption(option);

setTimeout(function () {
    myChart.dispatchAction({
        type: 'brush',
        areas: [
            {
                geoIndex: 0,
                brushType: 'polygon',
                coordRange: [[119.72,34.85],[119.68,34.85],[119.5,34.84],[119.19,34.77],[118.76,34.63],[118.6,34.6],[118.46,34.6],[118.33,34.57],[118.05,34.56],[117.6,34.56],[117.41,34.56],[117.25,34.56],[117.11,34.56],[117.02,34.56],[117,34.56],[116.94,34.56],[116.94,34.55],[116.9,34.5],[116.88,34.44],[116.88,34.37],[116.88,34.33],[116.88,34.24],[116.92,34.15],[116.98,34.09],[117.05,34.06],[117.19,33.96],[117.29,33.9],[117.43,33.8],[117.49,33.75],[117.54,33.68],[117.6,33.65],[117.62,33.61],[117.64,33.59],[117.68,33.58],[117.7,33.52],[117.74,33.5],[117.74,33.46],[117.8,33.44],[117.82,33.41],[117.86,33.37],[117.9,33.3],[117.9,33.28],[117.9,33.27],[118.09,32.97],[118.21,32.7],[118.29,32.56],[118.31,32.5],[118.35,32.46],[118.35,32.42],[118.35,32.36],[118.35,32.34],[118.37,32.24],[118.37,32.14],[118.37,32.09],[118.44,32.05],[118.46,32.01],[118.54,31.98],[118.6,31.93],[118.68,31.86],[118.72,31.8],[118.74,31.78],[118.76,31.74],[118.78,31.7],[118.82,31.64],[118.82,31.62],[118.86,31.58],[118.86,31.55],[118.88,31.54],[118.88,31.52],[118.9,31.51],[118.91,31.48],[118.93,31.43],[118.95,31.4],[118.97,31.39],[118.97,31.37],[118.97,31.34],[118.97,31.27],[118.97,31.21],[118.97,31.17],[118.97,31.12],[118.97,31.02],[118.97,30.93],[118.97,30.87],[118.97,30.85],[118.95,30.8],[118.95,30.77],[118.95,30.76],[118.93,30.7],[118.91,30.63],[118.91,30.61],[118.91,30.6],[118.9,30.6],[118.88,30.54],[118.88,30.51],[118.86,30.51],[118.86,30.46],[118.72,30.18],[118.68,30.1],[118.66,30.07],[118.62,29.91],[118.56,29.73],[118.52,29.63],[118.48,29.51],[118.44,29.42],[118.44,29.32],[118.43,29.19],[118.43,29.14],[118.43,29.08],[118.44,29.05],[118.46,29.05],[118.6,28.95],[118.64,28.94],[119.07,28.51],[119.25,28.41],[119.36,28.28],[119.46,28.19],[119.54,28.13],[119.66,28.03],[119.78,28],[119.87,27.94],[120.03,27.86],[120.17,27.79],[120.23,27.76],[120.3,27.72],[120.42,27.66],[120.52,27.64],[120.58,27.63],[120.64,27.63],[120.77,27.63],[120.89,27.61],[120.97,27.6],[121.07,27.59],[121.15,27.59],[121.28,27.59],[121.38,27.61],[121.56,27.73],[121.73,27.89],[122.03,28.2],[122.3,28.5],[122.46,28.72],[122.5,28.77],[122.54,28.82],[122.56,28.82],[122.58,28.85],[122.6,28.86],[122.61,28.91],[122.71,29.02],[122.73,29.08],[122.93,29.44],[122.99,29.54],[123.03,29.66],[123.05,29.73],[123.16,29.92],[123.24,30.02],[123.28,30.13],[123.32,30.29],[123.36,30.36],[123.36,30.55],[123.36,30.74],[123.36,31.05],[123.36,31.14],[123.36,31.26],[123.38,31.42],[123.46,31.74],[123.48,31.83],[123.48,31.95],[123.46,32.09],[123.34,32.25],[123.22,32.39],[123.12,32.46],[123.07,32.48],[123.05,32.49],[122.97,32.53],[122.91,32.59],[122.83,32.81],[122.77,32.87],[122.71,32.9],[122.56,32.97],[122.38,33.05],[122.3,33.12],[122.26,33.15],[122.22,33.21],[122.22,33.3],[122.22,33.39],[122.18,33.44],[122.07,33.56],[121.99,33.69],[121.89,33.78],[121.69,34.02],[121.66,34.05],[121.64,34.08]]
            }
        ]
    });
}, 0);

function renderBrushed(params) {
    var mainSeries = params.batch[0].selected[0];

    var selectedItems = [];
    var categoryData = [];
    var barData = [];
    var maxBar = 30;
    var sum = 0;
    var count = 0;

    for (var i = 0; i < mainSeries.dataIndex.length; i++) {
        var rawIndex = mainSeries.dataIndex[i];
        var dataItem = convertedData[0][rawIndex];
        var pmValue = dataItem.value[2];

        sum += pmValue;
        count++;

        selectedItems.push(dataItem);
    }

    selectedItems.sort(function (a, b) {
        return a.value[2] - b.value[2];
    });

    for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
        categoryData.push(selectedItems[i].name);
        barData.push(selectedItems[i].value[2]);
    }

    this.setOption({
        yAxis: {
            data: categoryData
        },
        xAxis: {
            axisLabel: {show: !!count}
        },
        title: {
            id: 'statistic',
            text: count ? '平均: ' + (sum / count).toFixed(4) : ''
        },
        series: {
            id: 'bar',
            data: barData
        }
    });
}

/*横屏竖屏*/
/*window.addEventListener("orientationchange", function() {
    orientInit();
});
function orientInit(){
    var orientChk = document.documentElement.clientWidth > document.documentElement.clientHeight?'landscape':'portrait';
    if(orientChk =='landscape'){
        location.reload();
        $('.layer header').addClass('screen');
        console.log($('.layer header'));
    }else{
        location.reload();
    }
}*/
