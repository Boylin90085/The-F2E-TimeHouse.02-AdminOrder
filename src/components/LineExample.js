import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['6 JUN', '7 JUN', '8 JUN', '9 JUN', '10 JUN', '11 JUN', '12 JUN', '13 JUN'],
      datasets: [
        {
          label: 'TOTAL REVENUE',
          borderColor: '#7ED321',
          pointBackgroundColor: '#7ED321',
          backgroundColor: '#7ED321',
          borderWidth: 2,
          pointBorderColor: '#7ED321',
          // 取消貝茲曲線
          tension: 0,
          fill: false,
          data: [7300, 7000, 5500, 7200, 5900, 6100, 7300, 7250]
        }, {
          label: 'TOTAL COST',
          borderColor: '#D0021B',
          pointBackgroundColor: '#D0021B',
          pointBorderColor: '#D0021B',
          backgroundColor: '#D0021B',
          tension: 0,
          borderWidth: 2,
          fill: false,
          data: [500, 500, 2800, 3000, 2700, 500, 950, 2000]
        }, {
          label: 'TOTAL COST',
          borderColor: '#4A90E2',
          pointBackgroundColor: '#4A90E2',
          pointBorderColor: '#4A90E2',
          backgroundColor: '#4A90E2',
          tension: 0,
          borderWidth: 2,
          fill: false,
          data: [6100, 5800, 2000, 4000, 3900, 5400, 6500, 5000]
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            // 設定Y軸最大及最小值,stepSize設定數值區間
            min: 0,
            max: 8000,
            stepSize: 1000
          }
        }]
      }
    })
  }
}
