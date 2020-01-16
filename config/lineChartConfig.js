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
    data: [
      "17-12-2019",
      "18-12-2019",
      "19-12-2019",
      "20-12-2019",
      "21-12-2019",
      "22-12-2019",
      "23-12-2019",
      "24-12-2019",
      "25-12-2019",
      "26-12-2019",
      "27-12-2019",
      "28-12-2019",
      "29-12-2019",
      "30-12-2019",
      "31-12-2019",
      "01-01-2020",
      "02-01-2020",
      "03-01-2020",
      "04-01-2020",
      "05-01-2020",
      "06-01-2020",
      "07-01-2020",
      "08-01-2020",
      "09-01-2020",
      "10-01-2020",
      "11-01-2020",
      "12-01-2020",
      "13-01-2020",
      "14-01-2020",
      "15-01-2020",
      "16-01-2020"
    ],
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
    data: [
      { name: "17-12-2019", value: 0 },
      { name: "18-12-2019", value: 0 },
      { name: "19-12-2019", value: 1 },
      { name: "20-12-2019", value: 0 },
      { name: "21-12-2019", value: 7 },
      { name: "22-12-2019", value: 0 },
      { name: "23-12-2019", value: 3 },
      { name: "24-12-2019", value: 0 },
      { name: "25-12-2019", value: 0 },
      { name: "26-12-2019", value: 0 },
      { name: "27-12-2019", value: 0 },
      { name: "28-12-2019", value: 0 },
      { name: "29-12-2019", value: 0 },
      { name: "30-12-2019", value: 0 },
      { name: "31-12-2019", value: 0 },
      { name: "01-01-2020", value: 0 },
      { name: "02-01-2020", value: 0 },
      { name: "03-01-2020", value: 1 },
      { name: "04-01-2020", value: 0 },
      { name: "05-01-2020", value: 0 },
      { name: "06-01-2020", value: 2 },
      { name: "07-01-2020", value: 0 },
      { name: "08-01-2020", value: 2 },
      { name: "09-01-2020", value: 0 },
      { name: "10-01-2020", value: 0 },
      { name: "11-01-2020", value: 0 },
      { name: "12-01-2020", value: 0 },
      { name: "13-01-2020", value: 0 },
      { name: "14-01-2020", value: 0 },
      { name: "15-01-2020", value: 0 },
      { name: "16-01-2020", value: 0 }
    ]
  },
  xAxis: {
    data: [
      "17-12-2019",
      "18-12-2019",
      "19-12-2019",
      "20-12-2019",
      "21-12-2019",
      "22-12-2019",
      "23-12-2019",
      "24-12-2019",
      "25-12-2019",
      "26-12-2019",
      "27-12-2019",
      "28-12-2019",
      "29-12-2019",
      "30-12-2019",
      "31-12-2019",
      "01-01-2020",
      "02-01-2020",
      "03-01-2020",
      "04-01-2020",
      "05-01-2020",
      "06-01-2020",
      "07-01-2020",
      "08-01-2020",
      "09-01-2020",
      "10-01-2020",
      "11-01-2020",
      "12-01-2020",
      "13-01-2020",
      "14-01-2020",
      "15-01-2020",
      "16-01-2020"
    ],
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