<template>
  <div class="paramsSection">
    <h1>{{result}}</h1>
    <div v-for="param in options.response" :key="param.title" class="param__container">
      <h2>{{ param.title }}</h2>

      <div class="paramItem__container" v-if="selectedParams">
        <ParamsItem
            v-for="(item, index) in param.data"
            :key="item"
            :active="selectedParams[param.type][index] === 1 || selectedParams[param.type] === 'Все'"
            :title="item"
            @click="setParam(param.type, index, param.data.length)"
        >
          {{ item }}
        </ParamsItem>
      </div>

    </div>
    <div class="btns__container">
      <the-button type="primary" @click="predict">Получить статистику</the-button>
      <the-button type="danger" @click="cleanParams()">Сбросить</the-button>
    </div>
  </div>
<!--  <h2 v-else>{{ options }}</h2>-->
</template>

<script lang="ts" setup>
import axios from "axios";
import ParamsItem from "@/components/app/params/ParamsSelector/ParamsItem.vue";
import TheButton from "@/components/helpers/button/TheButton.vue";
import {computed, onBeforeMount, reactive, ref, onMounted} from "vue";

let options = reactive({response:[]})
let result = ref(0)

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

const setParam = (type: string, index: number, length: number) => {
  selectedParams[type] = []
  if (index === length - 1) {
    for (let i = 0; i < length - 1; i++) {
      selectedParams[type].push(1)
    }
  } else {
    for (let i = 0; i < length - 1; i++) {
      // selectedParams[type][i] = 0
      i === index ? selectedParams[type].push(1)
          : selectedParams[type].push(0)
    }
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
  console.log(result.value)
}

onMounted(initParams)
onMounted(getOptions)

</script>

<style lang="sass" scoped>
.paramsSection
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 100%

.param__container
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 100%

  h2
    margin: 15px 0
    font-weight: 400

.paramItem__container
  display: flex
  width: 100%

.btns__container
  margin-top: 20px
  display: flex
</style>