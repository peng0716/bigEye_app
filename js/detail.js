/*饼图*/
var myPie = echarts.init(document.querySelector('.myPie'), 'infographic');
var viewoption0 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        left: 0,
        bottom: 0,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            fontSize: 10,
        },
        data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            selectedOffset: 7,
            radius: [0, '35%'],
            center: ['45%', '40%'],
            label: {
                normal: {
                    position: 'inner',
                    fontSIze: 10,
                }
            },
            labelLine: {
                normal: {
                    show: false,
                }
            },
            data: [
                {value: 335, name: '直达', selected: true},
                {value: 679, name: '营销广告'},
                {value: 1548, name: '搜索引擎'}
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '65%'],
            center: ['45%', '40%'],
            labelLine: {
                normal: {
                    length: 10,
                    length2: 5,
                }
            },
            data: [
                {value: 335, name: '直达'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1048, name: '百度'},
                {value: 251, name: '谷歌'},
                {value: 147, name: '必应'},
                {value: 102, name: '其他'}
            ]
        }
    ]
};
myPie.setOption(viewoption0);

/*折线图*/
var legendLine = echarts.init(document.querySelector('.legendLine'), 'infographic');
legendLine.showLoading({
    text: '正在努力加载中...'
})
var viewoption1 = {
    padding: 5,
    title: {
        text: '堆叠区域图',
        textStyle: {
            fontSize: 12,
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        top: 28,
        right: 0,
        itemWidth: 10,
        itemHeight: 8,
        textStyle: {
            fontSize: 10,
        },
        data: ['邮件营销', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
        itemSize: 14,
        feature: {
            saveAsImage: {}
        }
    },
    smooth: true,
    grid: {
        left: '1%',
        right: '4%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            nameTextStyle: {
                fontSize: 8,
            },
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位：万',
            nameTextStyle: {
                fontSize: 8,
            },
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
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
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
legendLine.setOption(viewoption1);
legendLine.hideLoading();


/*柱状图 - 饼图*/
var legendBar = echarts.init(document.querySelector('.legendBar'), 'infographic');
legendBar.showLoading({
    text: '正在努力加载中...'
})
var viewoption2 = {
    baseOption: {
        timeline: {
            left: 0,
            right: 0,
            axisType: 'category',
            autoPlay: true,
            symbolSize: 14,
            playInterval: 2000,
            controlStyle: {
                itemSize: 28,
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
                formatter: function (s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
            top: 10,
            subtext: '数据来自国家统计局',
            padding: [0, 0],
            itemGap: 3,
            subtextStyle: {
                fontSize: 10,
            }
        },
        tooltip: {},
        legend: {
            padding: 3,
            top: 10,
            x: 'right',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                fontSize: 10,
            },
            data: ['第一产业', '第二产业', '第三产业'],
            selected: {
                'GDP': false, '金融': false, '房地产': false
            }
        },
        calculable: true,
        grid: {
            top: 70,
            bottom: 100,
            left: '16%',
            right: '3%',
        },
        xAxis: [
            {
                'type': 'category',
                'axisLabel': {'interval': 0},
                'data': [
                    '北京', '\n天津', '河北', '\n山西', '内蒙古', '\n辽宁', '吉林', '\n黑龙江',
                    '上海', '\n江苏', '浙江', '\n安徽', '福建', '\n江西', '山东', '\n河南',
                    '湖北', '\n湖南', '广东'
                ],
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'GDP（亿元）',
                nameTextStyle: {
                    fontSize: 8,
                },
                max: 20000
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
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 10,
                        }
                    },
                },
                labelLine: {
                    normal: {
                        length: 5,
                        length2: 5,
                    },
                },
            }
        ]
    },
    options: [
        {
            title: {
                padding: 0,
                text: '2004全国宏观经济指标',
                textStyle: {
                    fontSize: 12,
                }
            },
            series: [
                {data: dataMap.dataGDP['2004']},
                {data: dataMap.dataFinancial['2004']},
                {data: dataMap.dataEstate['2004']},
                {data: dataMap.dataPI['2004']},
                {data: dataMap.dataSI['2004']},
                {data: dataMap.dataTI['2004']},
                {
                    data: [
                        {name: '第一产业', value: dataMap.dataPI['2004sum']},
                        {name: '第二产业', value: dataMap.dataSI['2004sum']},
                        {name: '第三产业', value: dataMap.dataTI['2004sum']}
                    ]
                }
            ]
        },
        {
            title: {text: '2005全国宏观经济指标'},
            series: [
                {data: dataMap.dataGDP['2005']},
                {data: dataMap.dataFinancial['2005']},
                {data: dataMap.dataEstate['2005']},
                {data: dataMap.dataPI['2005']},
                {data: dataMap.dataSI['2005']},
                {data: dataMap.dataTI['2005']},
                {
                    data: [
                        {name: '第一产业', value: dataMap.dataPI['2005sum']},
                        {name: '第二产业', value: dataMap.dataSI['2005sum']},
                        {name: '第三产业', value: dataMap.dataTI['2005sum']}
                    ]
                }
            ]
        },
        {
            title: {text: '2006全国宏观经济指标'},
            series: [
                {data: dataMap.dataGDP['2006']},
                {data: dataMap.dataFinancial['2006']},
                {data: dataMap.dataEstate['2006']},
                {data: dataMap.dataPI['2006']},
                {data: dataMap.dataSI['2006']},
                {data: dataMap.dataTI['2006']},
                {
                    data: [
                        {name: '第一产业', value: dataMap.dataPI['2006sum']},
                        {name: '第二产业', value: dataMap.dataSI['2006sum']},
                        {name: '第三产业', value: dataMap.dataTI['2006sum']}
                    ]
                }
            ]
        },
        {
            title: {text: '2007全国宏观经济指标'},
            series: [
                {data: dataMap.dataGDP['2007']},
                {data: dataMap.dataFinancial['2007']},
                {data: dataMap.dataEstate['2007']},
                {data: dataMap.dataPI['2007']},
                {data: dataMap.dataSI['2007']},
                {data: dataMap.dataTI['2007']},
                {
                    data: [
                        {name: '第一产业', value: dataMap.dataPI['2007sum']},
                        {name: '第二产业', value: dataMap.dataSI['2007sum']},
                        {name: '第三产业', value: dataMap.dataTI['2007sum']}
                    ]
                }
            ]
        },
        {
            title: {text: '2008全国宏观经济指标'},
            series: [
                {data: dataMap.dataGDP['2008']},
                {data: dataMap.dataFinancial['2008']},
                {data: dataMap.dataEstate['2008']},
                {data: dataMap.dataPI['2008']},
                {data: dataMap.dataSI['2008']},
                {data: dataMap.dataTI['2008']},
                {
                    data: [
                        {name: '第一产业', value: dataMap.dataPI['2008sum']},
                        {name: '第二产业', value: dataMap.dataSI['2008sum']},
                        {name: '第三产业', value: dataMap.dataTI['2008sum']}
                    ]
                }
            ]
        },
    ]
};
legendBar.setOption(viewoption2);
legendBar.hideLoading();

/*中国地图*/
var myChart = echarts.init(document.querySelector('.legendMap'));
var viewoption3 = {
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
        throttleDelay: 500,
        geoIndex:'all'
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
    tooltip: {
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
    series: [
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
myChart.setOption(viewoption3);
myChart.on('brushselected', renderBrushed);
setTimeout(function () {
        myChart.dispatchAction({
            type: 'brush',
            areas: [
                {
                    geoIndex: 0,
                    brushType: 'polygon',
                    coordRange: [[119.72, 34.85], [119.68, 34.85], [119.5, 34.84], [119.19, 34.77], [118.76, 34.63], [118.6, 34.6], [118.46, 34.6], [118.33, 34.57], [118.05, 34.56], [117.6, 34.56], [117.41, 34.56], [117.25, 34.56], [117.11, 34.56], [117.02, 34.56], [117, 34.56], [116.94, 34.56], [116.94, 34.55], [116.9, 34.5], [116.88, 34.44], [116.88, 34.37], [116.88, 34.33], [116.88, 34.24], [116.92, 34.15], [116.98, 34.09], [117.05, 34.06], [117.19, 33.96], [117.29, 33.9], [117.43, 33.8], [117.49, 33.75], [117.54, 33.68], [117.6, 33.65], [117.62, 33.61], [117.64, 33.59], [117.68, 33.58], [117.7, 33.52], [117.74, 33.5], [117.74, 33.46], [117.8, 33.44], [117.82, 33.41], [117.86, 33.37], [117.9, 33.3], [117.9, 33.28], [117.9, 33.27], [118.09, 32.97], [118.21, 32.7], [118.29, 32.56], [118.31, 32.5], [118.35, 32.46], [118.35, 32.42], [118.35, 32.36], [118.35, 32.34], [118.37, 32.24], [118.37, 32.14], [118.37, 32.09], [118.44, 32.05], [118.46, 32.01], [118.54, 31.98], [118.6, 31.93], [118.68, 31.86], [118.72, 31.8], [118.74, 31.78], [118.76, 31.74], [118.78, 31.7], [118.82, 31.64], [118.82, 31.62], [118.86, 31.58], [118.86, 31.55], [118.88, 31.54], [118.88, 31.52], [118.9, 31.51], [118.91, 31.48], [118.93, 31.43], [118.95, 31.4], [118.97, 31.39], [118.97, 31.37], [118.97, 31.34], [118.97, 31.27], [118.97, 31.21], [118.97, 31.17], [118.97, 31.12], [118.97, 31.02], [118.97, 30.93], [118.97, 30.87], [118.97, 30.85], [118.95, 30.8], [118.95, 30.77], [118.95, 30.76], [118.93, 30.7], [118.91, 30.63], [118.91, 30.61], [118.91, 30.6], [118.9, 30.6], [118.88, 30.54], [118.88, 30.51], [118.86, 30.51], [118.86, 30.46], [118.72, 30.18], [118.68, 30.1], [118.66, 30.07], [118.62, 29.91], [118.56, 29.73], [118.52, 29.63], [118.48, 29.51], [118.44, 29.42], [118.44, 29.32], [118.43, 29.19], [118.43, 29.14], [118.43, 29.08], [118.44, 29.05], [118.46, 29.05], [118.6, 28.95], [118.64, 28.94], [119.07, 28.51], [119.25, 28.41], [119.36, 28.28], [119.46, 28.19], [119.54, 28.13], [119.66, 28.03], [119.78, 28], [119.87, 27.94], [120.03, 27.86], [120.17, 27.79], [120.23, 27.76], [120.3, 27.72], [120.42, 27.66], [120.52, 27.64], [120.58, 27.63], [120.64, 27.63], [120.77, 27.63], [120.89, 27.61], [120.97, 27.6], [121.07, 27.59], [121.15, 27.59], [121.28, 27.59], [121.38, 27.61], [121.56, 27.73], [121.73, 27.89], [122.03, 28.2], [122.3, 28.5], [122.46, 28.72], [122.5, 28.77], [122.54, 28.82], [122.56, 28.82], [122.58, 28.85], [122.6, 28.86], [122.61, 28.91], [122.71, 29.02], [122.73, 29.08], [122.93, 29.44], [122.99, 29.54], [123.03, 29.66], [123.05, 29.73], [123.16, 29.92], [123.24, 30.02], [123.28, 30.13], [123.32, 30.29], [123.36, 30.36], [123.36, 30.55], [123.36, 30.74], [123.36, 31.05], [123.36, 31.14], [123.36, 31.26], [123.38, 31.42], [123.46, 31.74], [123.48, 31.83], [123.48, 31.95], [123.46, 32.09], [123.34, 32.25], [123.22, 32.39], [123.12, 32.46], [123.07, 32.48], [123.05, 32.49], [122.97, 32.53], [122.91, 32.59], [122.83, 32.81], [122.77, 32.87], [122.71, 32.9], [122.56, 32.97], [122.38, 33.05], [122.3, 33.12], [122.26, 33.15], [122.22, 33.21], [122.22, 33.3], [122.22, 33.39], [122.18, 33.44], [122.07, 33.56], [121.99, 33.69], [121.89, 33.78], [121.69, 34.02], [121.66, 34.05], [121.64, 34.08]]
                }
            ]
        });
}, 0);
function renderBrushed(params) {
    var mainSeries = params.batch[0].selected[0];

    var selectedItems = [];
    var categoryData = [];
    var barData = [];
    var maxBar = 10;
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



$(function () {
    /*页面 - 横屏竖屏刷新*/
    window.addEventListener("orientationchange", function () {   //window.addEventListener
        if($('.full_screenBg').css('display') == 'none') {
            location.reload();
        }
    });
    /*全局筛选*/
    $('.filter').on('touchstart', function () {
        if (!$(this).find('img').hasClass('triangle180')) {
            $('.filter > img').removeClass('triangle180').next('ul').css('display', 'none');
            $(this).find('img').addClass('triangle180').next('ul').css('display', 'block');
            $('.filterBg').css('display', 'block');
        } else {
            $(this).find('img').removeClass('triangle180').next('ul').css('display', 'none');
            $('.filterBg').css('display', 'none');
        }
    })
    $('.filterNav > li').each(function () {
        $(this).on('touchstart', function () {
            var text1 = $(this).text();
            $(this).parent('ul').prevAll('span').html(text1);
            $('.filterBg').css('display', 'none');
        })
    });
    /*局部筛选*/
    $('.filterStyle > p').each(function () {
        $(this).on('touchstart', function () {
            var dataIndex = $(this).attr('data-index');
            $('.theme-popover-mask').fadeIn(100);
            $('.theme-popover').slideDown(200);
            var titleText = $(this).parent().prev('span').text();
            var showBankDom = $(this);
            var oneLevelId = showBankDom.attr('data-default');

            var bankSelect = new IosSelect(1,
                [dataXQ[dataIndex]],
                {
                    itemHeight: 34,
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
            //横屏处理
            /*var orientChk = document.documentElement.clientWidth > document.documentElement.clientHeight ? 'landscape' : 'portrait';
            if (orientChk == 'landscape') {
                $('.layer').css('height', '100%');
            }*/
            $('#iosSelectTitle').text(titleText);
        })
    });
    /*全屏模式*/
    $('.full_screen').on('touchstart', function () {
        $('.full_screenBg').css('display', 'block');
        /*var orientChk = document.documentElement.clientWidth > document.documentElement.clientHeight ? 'landscape' : 'portrait';*/
        $(this).parent().next().clone(true).appendTo('.screen_content');   //复制
        /*var content = $(this).parent().next();
        $('.screen_content').append(content);*/
        var heightH = $('.screen_content > div').children('div:last');
        var currentClass = heightH.attr('class');
        var viewIndex = heightH.attr('data-index');
        /*图表高度*/
        function chartH() {
            var legendFilterH = $('.screen_content > div').children().eq(0).outerHeight(true);
            var screenH = $(document).height() - legendFilterH - 15 + 'px';
            return screenH;
        }
        /*初始化横屏竖屏*/
        heightH.css('height', chartH());
        heightH.css('width','100%');
        var viewInit = echarts.init($('.screen_content').find('.' + currentClass)[0], 'infographic');
        viewInit.setOption(eval('viewoption' + viewIndex));
        /*mapTime初始化地图选中*/
        function mapTime() {
            viewInit.dispatchAction({
                type: 'brush',
                areas: [
                    {
                        geoIndex: 0,
                        brushType: 'polygon',
                        coordRange: [[119.72, 34.85], [119.68, 34.85], [119.5, 34.84], [119.19, 34.77], [118.76, 34.63], [118.6, 34.6], [118.46, 34.6], [118.33, 34.57], [118.05, 34.56], [117.6, 34.56], [117.41, 34.56], [117.25, 34.56], [117.11, 34.56], [117.02, 34.56], [117, 34.56], [116.94, 34.56], [116.94, 34.55], [116.9, 34.5], [116.88, 34.44], [116.88, 34.37], [116.88, 34.33], [116.88, 34.24], [116.92, 34.15], [116.98, 34.09], [117.05, 34.06], [117.19, 33.96], [117.29, 33.9], [117.43, 33.8], [117.49, 33.75], [117.54, 33.68], [117.6, 33.65], [117.62, 33.61], [117.64, 33.59], [117.68, 33.58], [117.7, 33.52], [117.74, 33.5], [117.74, 33.46], [117.8, 33.44], [117.82, 33.41], [117.86, 33.37], [117.9, 33.3], [117.9, 33.28], [117.9, 33.27], [118.09, 32.97], [118.21, 32.7], [118.29, 32.56], [118.31, 32.5], [118.35, 32.46], [118.35, 32.42], [118.35, 32.36], [118.35, 32.34], [118.37, 32.24], [118.37, 32.14], [118.37, 32.09], [118.44, 32.05], [118.46, 32.01], [118.54, 31.98], [118.6, 31.93], [118.68, 31.86], [118.72, 31.8], [118.74, 31.78], [118.76, 31.74], [118.78, 31.7], [118.82, 31.64], [118.82, 31.62], [118.86, 31.58], [118.86, 31.55], [118.88, 31.54], [118.88, 31.52], [118.9, 31.51], [118.91, 31.48], [118.93, 31.43], [118.95, 31.4], [118.97, 31.39], [118.97, 31.37], [118.97, 31.34], [118.97, 31.27], [118.97, 31.21], [118.97, 31.17], [118.97, 31.12], [118.97, 31.02], [118.97, 30.93], [118.97, 30.87], [118.97, 30.85], [118.95, 30.8], [118.95, 30.77], [118.95, 30.76], [118.93, 30.7], [118.91, 30.63], [118.91, 30.61], [118.91, 30.6], [118.9, 30.6], [118.88, 30.54], [118.88, 30.51], [118.86, 30.51], [118.86, 30.46], [118.72, 30.18], [118.68, 30.1], [118.66, 30.07], [118.62, 29.91], [118.56, 29.73], [118.52, 29.63], [118.48, 29.51], [118.44, 29.42], [118.44, 29.32], [118.43, 29.19], [118.43, 29.14], [118.43, 29.08], [118.44, 29.05], [118.46, 29.05], [118.6, 28.95], [118.64, 28.94], [119.07, 28.51], [119.25, 28.41], [119.36, 28.28], [119.46, 28.19], [119.54, 28.13], [119.66, 28.03], [119.78, 28], [119.87, 27.94], [120.03, 27.86], [120.17, 27.79], [120.23, 27.76], [120.3, 27.72], [120.42, 27.66], [120.52, 27.64], [120.58, 27.63], [120.64, 27.63], [120.77, 27.63], [120.89, 27.61], [120.97, 27.6], [121.07, 27.59], [121.15, 27.59], [121.28, 27.59], [121.38, 27.61], [121.56, 27.73], [121.73, 27.89], [122.03, 28.2], [122.3, 28.5], [122.46, 28.72], [122.5, 28.77], [122.54, 28.82], [122.56, 28.82], [122.58, 28.85], [122.6, 28.86], [122.61, 28.91], [122.71, 29.02], [122.73, 29.08], [122.93, 29.44], [122.99, 29.54], [123.03, 29.66], [123.05, 29.73], [123.16, 29.92], [123.24, 30.02], [123.28, 30.13], [123.32, 30.29], [123.36, 30.36], [123.36, 30.55], [123.36, 30.74], [123.36, 31.05], [123.36, 31.14], [123.36, 31.26], [123.38, 31.42], [123.46, 31.74], [123.48, 31.83], [123.48, 31.95], [123.46, 32.09], [123.34, 32.25], [123.22, 32.39], [123.12, 32.46], [123.07, 32.48], [123.05, 32.49], [122.97, 32.53], [122.91, 32.59], [122.83, 32.81], [122.77, 32.87], [122.71, 32.9], [122.56, 32.97], [122.38, 33.05], [122.3, 33.12], [122.26, 33.15], [122.22, 33.21], [122.22, 33.3], [122.22, 33.39], [122.18, 33.44], [122.07, 33.56], [121.99, 33.69], [121.89, 33.78], [121.69, 34.02], [121.66, 34.05], [121.64, 34.08]]
                    }
                ]
            });
        }
        /*全屏 - 横屏竖屏判断*/
        window.addEventListener("orientationchange", function () {
            heightH.css('height', chartH());
            heightH.css('width','100%');
            var viewInit = echarts.init($('.screen_content').find('.' + currentClass)[0], 'infographic');
            viewInit.setOption(eval('viewoption' + viewIndex));
            /*地图事件判断*/
            function mapTime() {
                viewInit.dispatchAction({
                    type: 'brush',
                    areas: [
                        {
                            geoIndex: 0,
                            brushType: 'polygon',
                            coordRange: [[119.72, 34.85], [119.68, 34.85], [119.5, 34.84], [119.19, 34.77], [118.76, 34.63], [118.6, 34.6], [118.46, 34.6], [118.33, 34.57], [118.05, 34.56], [117.6, 34.56], [117.41, 34.56], [117.25, 34.56], [117.11, 34.56], [117.02, 34.56], [117, 34.56], [116.94, 34.56], [116.94, 34.55], [116.9, 34.5], [116.88, 34.44], [116.88, 34.37], [116.88, 34.33], [116.88, 34.24], [116.92, 34.15], [116.98, 34.09], [117.05, 34.06], [117.19, 33.96], [117.29, 33.9], [117.43, 33.8], [117.49, 33.75], [117.54, 33.68], [117.6, 33.65], [117.62, 33.61], [117.64, 33.59], [117.68, 33.58], [117.7, 33.52], [117.74, 33.5], [117.74, 33.46], [117.8, 33.44], [117.82, 33.41], [117.86, 33.37], [117.9, 33.3], [117.9, 33.28], [117.9, 33.27], [118.09, 32.97], [118.21, 32.7], [118.29, 32.56], [118.31, 32.5], [118.35, 32.46], [118.35, 32.42], [118.35, 32.36], [118.35, 32.34], [118.37, 32.24], [118.37, 32.14], [118.37, 32.09], [118.44, 32.05], [118.46, 32.01], [118.54, 31.98], [118.6, 31.93], [118.68, 31.86], [118.72, 31.8], [118.74, 31.78], [118.76, 31.74], [118.78, 31.7], [118.82, 31.64], [118.82, 31.62], [118.86, 31.58], [118.86, 31.55], [118.88, 31.54], [118.88, 31.52], [118.9, 31.51], [118.91, 31.48], [118.93, 31.43], [118.95, 31.4], [118.97, 31.39], [118.97, 31.37], [118.97, 31.34], [118.97, 31.27], [118.97, 31.21], [118.97, 31.17], [118.97, 31.12], [118.97, 31.02], [118.97, 30.93], [118.97, 30.87], [118.97, 30.85], [118.95, 30.8], [118.95, 30.77], [118.95, 30.76], [118.93, 30.7], [118.91, 30.63], [118.91, 30.61], [118.91, 30.6], [118.9, 30.6], [118.88, 30.54], [118.88, 30.51], [118.86, 30.51], [118.86, 30.46], [118.72, 30.18], [118.68, 30.1], [118.66, 30.07], [118.62, 29.91], [118.56, 29.73], [118.52, 29.63], [118.48, 29.51], [118.44, 29.42], [118.44, 29.32], [118.43, 29.19], [118.43, 29.14], [118.43, 29.08], [118.44, 29.05], [118.46, 29.05], [118.6, 28.95], [118.64, 28.94], [119.07, 28.51], [119.25, 28.41], [119.36, 28.28], [119.46, 28.19], [119.54, 28.13], [119.66, 28.03], [119.78, 28], [119.87, 27.94], [120.03, 27.86], [120.17, 27.79], [120.23, 27.76], [120.3, 27.72], [120.42, 27.66], [120.52, 27.64], [120.58, 27.63], [120.64, 27.63], [120.77, 27.63], [120.89, 27.61], [120.97, 27.6], [121.07, 27.59], [121.15, 27.59], [121.28, 27.59], [121.38, 27.61], [121.56, 27.73], [121.73, 27.89], [122.03, 28.2], [122.3, 28.5], [122.46, 28.72], [122.5, 28.77], [122.54, 28.82], [122.56, 28.82], [122.58, 28.85], [122.6, 28.86], [122.61, 28.91], [122.71, 29.02], [122.73, 29.08], [122.93, 29.44], [122.99, 29.54], [123.03, 29.66], [123.05, 29.73], [123.16, 29.92], [123.24, 30.02], [123.28, 30.13], [123.32, 30.29], [123.36, 30.36], [123.36, 30.55], [123.36, 30.74], [123.36, 31.05], [123.36, 31.14], [123.36, 31.26], [123.38, 31.42], [123.46, 31.74], [123.48, 31.83], [123.48, 31.95], [123.46, 32.09], [123.34, 32.25], [123.22, 32.39], [123.12, 32.46], [123.07, 32.48], [123.05, 32.49], [122.97, 32.53], [122.91, 32.59], [122.83, 32.81], [122.77, 32.87], [122.71, 32.9], [122.56, 32.97], [122.38, 33.05], [122.3, 33.12], [122.26, 33.15], [122.22, 33.21], [122.22, 33.3], [122.22, 33.39], [122.18, 33.44], [122.07, 33.56], [121.99, 33.69], [121.89, 33.78], [121.69, 34.02], [121.66, 34.05], [121.64, 34.08]]
                        }
                    ]
                });
            }
            if(currentClass == 'legendMap'){
                viewInit.on('brushselected', renderBrushed);
                setTimeout(mapTime(),0);
            }
        });
        if(currentClass == 'legendMap'){
            viewInit.on('brushselected', renderBrushed);
            setTimeout(mapTime(),0);
        };
    })
    /*关闭全屏*/
    /*$('.closeA').on('touchstart', function () {
        $(this).parent().next('div').children().remove();
        $('.full_screenBg').css('display', 'none');
        location.reload();
    });*/
    var i = 0;
    $('.screen_content').on('touchstart', function () {
        i++;
        setTimeout(function(){
            i = 0;
        },500);
        if(i > 1){
            $(this).children().remove();
            $('.full_screenBg').css('display', 'none');
            location.reload();
        }

    });
});

