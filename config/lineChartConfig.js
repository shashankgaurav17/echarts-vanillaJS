const lineChartConfig = {
  title: false,
  tooltip: {
    show: false
  },
  legend: {
    type: "scroll",
    pageIconSize: 10,
    formatter: {
      _custom: { type: "function", display: "<span>ƒ</span> formatter(name)" }
    },
    orient: "vertical",
    data: [],
    textStyle: { fontFamily: "Open Sans" },
    right: 0,
    itemWidth: 4,
    itemHeight: 12,
    icon: "rect"
  },
  series: {
    type: "line",
    showAllSymbol: true,
    symbol: "circle",
    symbolSize: 10,
    lineStyle: { normal: { color: "#00bc8f", width: 1 } },
    label: { show: true, position: "top", textStyle: { color: "#fff" } },
    itemStyle: { color: "#fff", borderColor: "#006644", borderWidth: 1 },
    data: []
  },
  xAxis: {
    data: [],
    type: "category",
    boundaryGap: false,
    axisLabel: {
      margin: 10,
      color: "#6c798f",
      fontFamily: "Open Sans",
      interval: 0,
      rotate: 30,
      formatter: {
        _custom: { type: "function", display: "<span>ƒ</span> formatter(name)" }
      }
    },
    axisLine: {
      show: true,
      lineStyle: { color: "#97a0af", opacity: 0.6, width: 1 }
    },
    axisTick: { show: false }
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value}",
      margin: 30,
      color: "#6c798f",
      fontFamily: "Open Sans"
    },
    axisLine: { lineStyle: { color: ["#fff"] } },
    splitLine: {
      show: true,
      lineStyle: { color: "rgba(193,199,208,0.5)", type: "dashed" }
    }
  }
};