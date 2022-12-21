<template>
  <section id="chart" class="section chart">
    <div class="container">
      <div class="chart__actions">
        <h1 :class="[active === 'Data Analyst' ? 'active' : null, 'chart__actions-action']"
            @click="setSpec('Data Analyst')">Data Analyst</h1>
        <h1 :class="[active === 'Data Engineer' ? 'active' : null, 'chart__actions-action']"
            @click="setSpec('Data Engineer')">Data Engineer</h1>
        <h1 :class="[active === 'Data Scientist' ? 'active' : null, 'chart__actions-action']"
            @click="setSpec('Data Scientist')">Data Scientist</h1>
        <h1 :class="[active === 'ML Engineer' ? 'active' : null, 'chart__actions-action']"
            @click="setSpec('ML Engineer')">ML Engineer</h1>
      </div>
      <LineChart v-if="renderComponent && !isLoading"/>
      <div v-else class="chart__loading">Загружается</div>
    </div>
  </section>
</template>

<script lang="ts" setup>

import LineChart from "@/components/app/chart/LineChart.vue";
import {useStore} from "vuex";
import {nextTick, ref} from "vue";

const renderComponent = ref(true);

const forceRerender = async () => {
  // Remove MyComponent from the DOM
  renderComponent.value = false;

  // Wait for the change to get flushed to the DOM
  await nextTick();

  // Add the component back in
  renderComponent.value = true;
  isLoading.value = false
};

const store = useStore()
const active = ref('Data Analyst')
const isLoading = ref(false)
const setSpec = (title: string) => {
  isLoading.value = true
  active.value = title
  store.dispatch('getChartData', title)
  setTimeout(forceRerender, 1500)

}
</script>


<style lang="sass">
.chart
  display: flex

  .container
    flex-flow: row nowrap

  &__actions
    display: flex
    flex-direction: column
    align-self: flex-start
    margin-right: 64px
    border: 1px solid #dcdcdc
    flex: 0 0 auto
    width: 300px
    border-radius: 8px

    &-action
      transition: all .3s linear
      padding: 32px
      cursor: pointer

  &__loading
    flex: 1 0 auto
    height: 550px
    width: 800px
    display: flex
    justify-content: center
    align-items: center
    font-size: 60px

  canvas
    width: 800px !important

  .active
    background: #3C93A7
    color: #eee

</style>