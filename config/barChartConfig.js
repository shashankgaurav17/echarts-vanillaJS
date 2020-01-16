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
    data: [
      "User Account Compromise",
      "Network Scanning",
      "Spearphishing",
      "Spamming",
      "Error",
      "Hacking",
      "IP Spoofing",
      "Lost Device",
      "Malware",
      "Phishing",
      "Website Defacement",
      "System Misuse",
      "APT",
      "Improper Disposal",
      "Other"
    ],
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
    data: [
      { name: "User Account Compromise", value: 7 },
      { name: "Network Scanning", value: 8 },
      { name: "Spearphishing", value: 7 },
      { name: "Spamming", value: 9 },
      { name: "Error", value: 2 },
      { name: "Hacking", value: 0 },
      { name: "IP Spoofing", value: 7 },
      { name: "Lost Device", value: 0 },
      { name: "Malware", value: 16 },
      { name: "Phishing", value: 13 },
      { name: "Website Defacement", value: 10 },
      { name: "System Misuse", value: 7 },
      { name: "APT", value: 0 },
      { name: "Improper Disposal", value: 0 },
      { name: "Other", value: 0 }
    ]
  },
  xAxis: {
    data: [
      "User Account Compromise",
      "Network Scanning",
      "Spearphishing",
      "Spamming",
      "Error",
      "Hacking",
      "IP Spoofing",
      "Lost Device",
      "Malware",
      "Phishing",
      "Website Defacement",
      "System Misuse",
      "APT",
      "Improper Disposal",
      "Other"
    ],
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