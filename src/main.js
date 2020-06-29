// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.getElementById('skills'))

const option = {

  tooltip: {
    trigger: 'axis'
  },

  radar: [
    {
      indicator: [
        {text: '静态页面', max: 100},
        {text: '编程基础', max: 100},
        {text: 'React', max: 100},
        {text: 'Vue', max: 100},
        {text: '项目开发', max: 100},
        {text: '沟通能力', max: 100}
      ],
      center: ['50%', '50%'],
      radius: 105
    },
  ],
  series: [
    {
      type: 'radar',
      tooltip: {
        trigger: 'item'
      },
      areaStyle: {
        color:'rgba(255,255,255,0.3)'
      },
      data: [
        {
          value: [100, 90, 85, 75,80,75],
          name: '能力相对值'
        }
      ]
    },
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option)