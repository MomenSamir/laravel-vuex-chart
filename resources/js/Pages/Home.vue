<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <Bar id="my-chart-id" :options="chartOptions" :data="chartData1" />
        </div>
        <div class="col-md-6">
          <Bar id="my-chart-id" :options="chartOptions" :data="chartData2" />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <Doughnut :data="doughnutData1" :options="doughnutOptions" />
        </div>
        <div class="col-md-3">
          <Doughnut :data="doughnutData2" :options="doughnutOptions" />
        </div>
        <div class="col-md-3">
          <Doughnut :data="doughnutData3" :options="doughnutOptions" />
        </div>
        <div class="col-md-3">
          <Doughnut :data="doughnutData4" :options="doughnutOptions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bar, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
  name: 'BarChart',
  components: { Bar, Doughnut },
  data() {
    return {
      chartData1: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'By Hour',
            backgroundColor: 'red',
            borderWidth: 2,
            borderRadius: 50,
            borderSkipped: false,
            data: [40, 20, 12, 19, 30, 17, 33]
          }]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
          }
        }
      },

      chartData2: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'By Day',
            backgroundColor: 'blue',
            borderWidth: 2,
            borderRadius: 50,
            borderSkipped: false,
            data: [30, 10, 22, 29, 7, 37, 13]
          }]
      },

      doughnutData1: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
          }
        ]
      },
      doughnutData2: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [30, 25, 60, 33]
          }
        ]
      },
      doughnutData3: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
          }
        ]
      },
      doughnutData4: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
          }
        ]
      },

      doughnutOptions: {
        responsive: true,
        maintainAspectRatio: false
      }

    }
  }
}
</script>