<template>
  <section id="cover" class="cover">
    <div class="container">
      <h1 class="cover__title">Проанализируй <br> уровень <span style="color: #95CCD9">зарплат в IT</span></h1>
      <h3 class="cover__subtitle">Мы собрали данные об уровене зарплат ведущих специальностей в области
        <br>Data Science c 2020-2022</h3>
      <ArrowDown class="cover__arrow"/>
    </div>
  </section>
</template>

<script lang="ts" setup>

import ArrowDown from "@/components/icons/ArrowDown.vue";</script>

<style lang="sass">
.cover
  height: 100vh
  display: flex
  justify-content: center
  align-items: center

  &__title
    font-weight: 900
    font-size: 72px
    line-height: 1.2
    margin-top: 120px

  &__subtitle
    margin: 80px 0
    font-weight: 400
    font-size: 34px

  &__arrow
    animation: jumpingArrow 2s infinite ease-in-out
</style>