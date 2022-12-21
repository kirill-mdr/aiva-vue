<template>
  <section v-if="options.response" class="params">
    <div class="container">
      <div class="params__wrapper">
        <div v-for="param in options.response" :key="param.title" class="params__row">
          <h2>{{ param.title }}</h2>

          <div v-if="selectedParams" class="params__item-container">
            <ParamsItem
                v-for="(item, index) in param.data"
                :key="item"
                :active="selectedParams[param.type][index] === 1"
                :title="item"
                @click="setParam(param.type, index, param.data.length, item)"
            >
              {{ item }}
            </ParamsItem>
          </div>
        </div>
      </div>
      <ResultCard :index="selectedSpecIndex" :title="selectedSpec"/>
    </div>
  </section>

</template>

<script lang="ts" setup>

import ParamsItem from "@/components/app/params/ParamsSelector/ParamsItem.vue";
import ResultCard from "@/components/app/cards/resultCard/ResultCard.vue";

import axios from "axios";
import {onMounted, reactive, ref} from "vue";

let options = reactive({response: []})
let result = ref(0)

const selectedSpec = ref('Data Analyst')
const selectedSpecIndex = ref(0)

interface SelectedParams {
  [key: string]: any
}

let selectedParams: SelectedParams = reactive({})

const initParams = () => {
  options.response.map(item => {
    selectedParams[item.type] = []
    for (let i = 0; i < item.data.length - 1; i++) {
      i === 0 ? selectedParams[item.type][i] = 1
          : selectedParams[item.type][i] = 0
    }
  })
}

const setParam = (type: string, index: number, length: number, title: string) => {
  if (type === 'spec') {
    selectedSpec.value = title
    selectedSpecIndex.value = index
  }
  selectedParams[type] = []
  for (let i = 0; i < length; i++) {
    i === index ? selectedParams[type].push(1)
        : selectedParams[type].push(0)
  }
}

const cleanParams = () => {
  initParams()
}

const getOptions = async () => {
  let result = await axios.get('http://176.113.83.99/api/options')
  options.response = result.data;
  initParams()
}

const predict = async () => {
  let response = await axios.post(`http://176.113.83.99/api/predict`, selectedParams)
  result.value = response.data.result
}

onMounted(initParams)
onMounted(getOptions)

</script>

<style lang="sass" scoped>
.container
  justify-content: space-around
  flex-direction: row
  flex-flow: row wrap

.params
  padding: 20px
  height: 100vh
  display: flex
  justify-content: center
  align-items: center


  &__wrapper
    flex: 1 0 50%

  &__row
    display: flex
    flex-direction: column
    align-items: flex-start
    width: 100%

    h2
      margin: 5px 0
      font-weight: 400

  &__item-container
    display: flex
    flex-flow: row wrap
    width: 100%

</style>