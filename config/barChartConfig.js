const barChartConfig = {
  title: false,
  tooltip: {
    show: false
  },
  legend: {
    type: "scroll",
    pageIconSize: 10,
    formatter: {
      _custom: {
        type: "function",
        display: "<span>ƒ</span> formatter(name)"
      }
    },
    orient: "vertical",
    data: [],
    textStyle: {
      fontFamily: "Open Sans"
    },
    right: 0,
    itemWidth: 4,
    itemHeight: 12,
    icon: "rect"
  },
  series: {
    type: "bar",
    barWidth: "30%",
    itemStyle: {
      normal: {
        color: params => {
          return colorPallete[params.dataIndex % colorPallete.length];
        }
      }
    },
    lineStyle: {
      color: "#216ba5",
      width: 1
    },
    areaStyle: {
      normal: {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: "linear",
          global: false,
          colorStops: [
            {
              offset: 0,
              color: "#216ba5"
            },
            {
              offset: 1,
              color: "#ffffff"
            }
          ]
        }
      }
    },
    data: []
  },
  xAxis: {
    data: [],
    type: "category",
    boundaryGap: true,
    axisLabel: {
      margin: 10,
      color: "#6c798f",
      fontFamily: "Open Sans",
      interval: 0,
      rotate: 30,
      formatter: {
        _custom: {
          type: "function",
          display: "<span>ƒ</span> formatter(name)"
        }
      }
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#97a0af",
        opacity: 0.6,
        width: 1
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value}",
      margin: 30,
      color: "#6c798f",
      fontFamily: "Open Sans"
    },
    axisLine: {
      lineStyle: {
        color: ["#fff"]
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "rgba(193,199,208,0.5)",
        type: "dashed"
      }
    }
  }
};