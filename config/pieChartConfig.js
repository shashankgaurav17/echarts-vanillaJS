const pieChartConfig = {
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
    name: "",
    type: "pie",
    radius: "70%",
    data: [],
    labelLine: { show: false },
    hoverAnimation: false,
    label: { show: false },
    itemStyle: {
      normal: {
        color: params => {
          return colorPallete[params.dataIndex % colorPallete.length];
        }
      }
    }
  }
};