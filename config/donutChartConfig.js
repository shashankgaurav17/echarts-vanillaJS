const donutChartConfig = {
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
    data: ["Crisis", "Medium", "Unknown", "Low", "High", "Critical"],
    textStyle: { fontFamily: "Open Sans" },
    right: 0,
    itemWidth: 4,
    itemHeight: 12,
    icon: "rect"
  },
  series: {
    name: "",
    type: "pie",
    radius: ["50%", "70%"],
    data: [
      { name: "Crisis", value: 1 },
      { name: "Medium", value: 0 },
      { name: "Unknown", value: 7 },
      { name: "Low", value: 1 },
      { name: "High", value: 0 },
      { name: "Critical", value: 0 }
    ],
    avoidLabelOverlap: false,
    labelLine: { show: false },
    label: { show: false },
    hoverAnimation: false,
    itemStyle: {
      normal: {
        color: params => {
          return colorPallete[params.dataIndex % colorPallete.length];
        }
      }
    }
  }
};