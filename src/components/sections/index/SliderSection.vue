<template>
  <section id="team" class="slider section">
    <h1 class="slider__title">Команда</h1>
    <div class="container">
      <div class="slider__wrapper">
        <div ref="container" class="keen-slider" style="height: 300px">
          <div class="keen-slider__slide slider__slide slide1"></div>
          <div class="keen-slider__slide slider__slide slide2"></div>
          <div class="keen-slider__slide slider__slide slide3"></div>
          <div class="keen-slider__slide slider__slide slide4"></div>
          <div class="keen-slider__slide slider__slide slide5"></div>
          <div class="keen-slider__slide slider__slide slide6"></div>
          <div class="keen-slider__slide slider__slide slide7"></div>
        </div>
        <p class="slide__role">{{ roles[current] }}</p>
      </div>

      <div class="slider__names">
        <div :class="current === 0 ? 'active' : null" class="slide__name">Плетнев Александр</div>
        <div :class="current === 1 ? 'active' : null" class="slide__name">Козенков Вадим</div>
        <div :class="current === 2 ? 'active' : null" class="slide__name">Красников Кирилл</div>
        <div :class="current === 3 ? 'active' : null" class="slide__name">Дедюхин Никита</div>
        <div :class="current === 4 ? 'active' : null" class="slide__name">Намнясов Иван</div>
        <div :class="current === 5 ? 'active' : null" class="slide__name">Цуканов Максим</div>
        <div :class="current === 6 ? 'active' : null" class="slide__name">Лукьянов Евгений</div>
      </div>
    </div>
  </section>

</template>

<script setup>
import {useKeenSlider} from "keen-slider/vue.es"
import "keen-slider/keen-slider.min.css"
import {ref} from 'vue';

const roles = ['Frontend Developer', 'Team Leader', 'Backend Developer', 'Data Scientist', 'Frontend Developer', 'Лодырь', 'Лодырь']
const current = ref(0)
const [container] = useKeenSlider(
    {
      loop: true,
      vertical: true,
    },

    [
      (slider) => {
        let timeout
        let mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })

          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })

        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
        slider.on("slideChanged", () => {
          current.value = slider.track.details.rel
          console.log(current)
        })
      },
    ]
)
</script>

<style lang="sass" scoped>
.container
  flex-direction: row !important

.active
  color: #3C93A7
  transition: .3s linear font-size
  font-size: 32px
  border-left: 8px solid #3C93A7 !important

.slider
  display: flex
  flex-direction: column

  &__title
    margin-bottom: 64px
    font-size: 64px
    font-weight: 900
    color: #3C93A7

  &__names
    margin-left: 88px
    padding: 16px
    text-align: left
    width: 450px

  .slide
    &__role
      margin-top: 24px
      font-size: 24px

    &__name
      border-left: 8px solid lightgray
      padding: 16px


  &__slide
    display: flex
    align-items: center
    justify-content: center
    font-size: 50px
    color: #fff
    font-weight: 500
    height: 300px
    max-height: 100vh
    background: red
    background-position: center
    background-size: cover
    background-repeat: no-repeat

.slide1
  background-image: url("https://sun9-35.userapi.com/impg/AbmPmALQkFyKmusLz_p8Q5Um-dB4kviF4J62WQ/TYiMNSKerTM.jpg?size=2560x1707&quality=95&sign=e9722c4e993455267c84309d8b799d7a&type=album")

.slide2
  background-image: url("https://sun9-79.userapi.com/impg/PQy0a272QpF5LJ4SjTcCe0bfeoOacm3KsV3Brg/icTwHcXFI7Y.jpg?size=1620x2160&quality=95&sign=164ff96765a8e2656087fd3f2807b239&type=album")

.slide3
  background-image: url("https://sun9-48.userapi.com/impg/4uWCP126Zy_XkNgIfRsXIOW0kARYZiSWBAUjUw/hXQdE620Mto.jpg?size=1440x2160&quality=95&sign=379ab8e57db978c76b7eeba1c3cf8a14&type=album")

.slide4
  background-image: url("https://pobedarf.ru/wp-content/uploads/2021/10/ii-7-scaled.jpg")

.slide5
  background-image: url("https://sun7-16.userapi.com/impg/EiRJ8tpP8_hyI4aVKfdOKfFlP8cQ76Z2StfczQ/tw2LOyqLkLM.jpg?size=1536x2048&quality=96&sign=f7a0312059a37886d2eee10091d17dbb&type=album")

.slide6
  background-image: url("https://sun9-87.userapi.com/impg/vITSFfkz_r7u4SirNnGTwiXbs5MhZlK17E-UjQ/ZM_fe9jutng.jpg?size=2560x1707&quality=95&sign=6a98f8886121f98b9b6cf798f59e3713&type=album")

.slide7
  background-image: url("https://sun9-58.userapi.com/impf/c858032/v858032134/90835/zzddhiNzBUM.jpg?size=1280x960&quality=96&sign=e6c92505f5b2384ff6b401c690d79961&type=album")

.keen-slider
  width: 400px !important
  height: 400px !important
  max-height: 400px !important
  border-radius: 10000px
  border: 7px solid white
  outline: 7px solid #3C93A7
</style>


