<template>
  <div :class="[active ? 'active':null, 'paramItem']">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
  title: String,
  active: Boolean
})
</script>

<style lang="sass" scoped>

.paramItem
  display: flex
  justify-content: center
  align-items: center
  padding: 10px 20px
  flex: 1 0 auto
  margin: 10px 10px 10px 0
  font-weight: 300
  cursor: pointer
  background: #F6F6F6
  transition: all .3s ease-in-out
  border-radius: 6px

  &:hover
    background: #53b1c7
    transition: all .3s ease-in-out
    color: #fff

.active
  background: #3C93A7
  color: #fff
</style>