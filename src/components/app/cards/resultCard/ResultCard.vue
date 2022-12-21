<template>
  <div class="result-card">
    <h1 class="result-card__title">{{ props.title }}</h1>
    <img alt="avatar" class="result-card__img" src="@/assets/images/avatar.svg">
    <p class="result-card__description">{{ descriptions[index].desc }}</p>
    <h1 v-if="store.state.predictedData !== 0" class="result-card__result">{{ store.state.predictedData }}$</h1>
    <the-button type="primary" @click="store.dispatch('predict', selectedParams)">Получить результат</the-button>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";
import TheButton from "@/components/helpers/button/TheButton.vue";
import {useStore} from "vuex";

const props = defineProps({
  title: {type: String, required: true},
  index: {type: Number, required: true},
  result: {type: Number, required: true},
  selectedParams: {type: Array, required: true}
})

const store = useStore()
const descriptions = [
  {
    id: 1,
    desc: 'Data Analyst, или дата-аналитик помогает бизнесу принимать верные решения на основе данных. Он собирает информацию, анализирует её, находит аномалии в метриках.'
  },
  {
    id: 2,
    desc: 'Data Engineer, или инженер данных, — это специалист, который занимается построением и обслуживанием инфраструктуры для работы с данными, а также их предварительной обработкой.'
  },
  {
    id: 3,
    desc: 'Data Scientist работает с данными из различных источников: собирает их, структурирует, выделяет и синтезирует. Для него важно обеспечивать выводы и действия, основанные на собранных данных.'
  },
  {
    id: 4,
    desc: 'Machine Learning Engeneer обучает искусственный интеллект решать задачи бизнеса с использованием больших данных. Он создает и развертывает ML Model — алгоритм, который описывает, как будет учиться компьютер.'
  },

]
</script>

<style lang="sass">
.result-card
  display: flex
  justify-content: flex-start
  align-items: center
  flex-direction: column
  background: #3C93A7
  color: #eee !important
  flex: 1 0 35%
  margin: 40px
  padding: 20px
  border-radius: 16px
  min-width: 400px
  min-height: 100%

  &__title
    color: #eee

  &__description
    flex: 1 0 50%
    color: #eee

  &__img
    width: 128px
    margin: 24px 0

  &__result
    color: #eee
    margin-top: 16px

  .btn
    margin-top: 16px
    background: #5ab9d0
    color: #eee

</style>