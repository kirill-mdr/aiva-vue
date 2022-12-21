<template>
  <div class="result-card">
    <h1>{{ props.title }}</h1>
    <img alt="avatar" class="result-card__img" src="@/assets/images/avatar.svg">
    <p class="result-card__description">{{ descriptions[index].desc }}</p>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
  title: {type: String, required: true},
  index: {type: Number, required: true}
})
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
  background: #F6F6F6
  flex: 1 0 35%
  margin: 40px
  padding: 20px
  border-radius: 16px
  min-width: 400px
  min-height: 400px

  &__description
    flex: 1 0 50%

  &__img
    width: 128px
    margin: 24px 0
</style>