import * as echarts from 'echarts';
import { selectAllOrder } from '../../../api/request'
import { message } from 'antd';
//获取商品分类
const getOrder = async () => {
  const { data: res } = await selectAllOrder()
  if (res.code != 200) return message.error("数据获取异常")
  console.log(res.data)
  // const categoryData = res.data?.map(item => {
  //   return { value: item.children?.length>0?item.children?.length:0||0, name: item.categoryName }
  // })

  const awaitCar = res.data?.filter(item =>item.type=='1' )?.length || 0//加入购物车
  const awaitPay = res.data?.filter(item =>item.type=='2' )?.length  || 0 //待付款
  const awaitSend = res.data?.filter(item =>item.type=='3' )?.length || 0 //待发货

  console.log(awaitCar,awaitPay,awaitSend)
 

  // getInitEcharts(0,categoryData)
}

//初始化echarts
const getInitEcharts = (awaitPay,awaitSend) => {
  const chartDom = document.getElementById('orderPie');
  const myChart = echarts.init(chartDom);
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 0, name: '已在购物车' },
          { value: 735, name: '待收货' },
          { value: 580, name: '待付款' },
          { value: 580, name: '待评价' },
        ]
      }
    ]
  };
  myChart.setOption(option);
}


export const getOrderData = ()=>{
  getOrder()
}
