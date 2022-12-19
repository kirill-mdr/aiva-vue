<template>
  <button :class="[props.type, 'btn']">
    <slot/>
  </button>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
  type: String
})
</script>

<style lang="sass" scoped>
.btn
  display: flex
  justify-content: center
  align-items: center
  background: transparent
  font-size: 16px
  padding: 10px 50px
  cursor: pointer
  transition: all .3s ease-in-out
  margin-right: 10px
  border-radius: 6px

.primary
  color: #3C93A7
  border: 2px solid #3C93A7

  &:hover
    background: #3C93A7
    color: #fff

.danger
  color: #C37F8E
  border: 2px solid #C37F8E

  &:hover
    background: #C37F8E
    color: #fff
</style>