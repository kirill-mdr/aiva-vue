<template>

  <Line
      :data="data"
      :options="options"
      class="chart"
  >
  </Line>


</template>

<script lang="ts" setup>
import {Line} from 'vue-chartjs'

import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip} from 'chart.js'
import {useStore} from "vuex";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
)

const store = useStore()

const data = {
  labels: store.getters.computedChartLabels,
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#3C93A7',
      data: store.getters.computedChartData,
      borderWidth: 10,
      fill: true
    }
  ]
}

const options = {
  plugins: {
    legend: {
      display: false
    },
  },

  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  }
}


</script>

<style lang="sass" scoped>
.chart
  height: 600px
</style>