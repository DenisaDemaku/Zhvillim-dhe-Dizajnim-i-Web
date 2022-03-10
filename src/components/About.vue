<template>
    <div id="slider">
        <Slider></Slider>
    </div>
</template>

<script>
import Slider from './Slider.vue'
export default {
  name: 'slider',
  components: {
    Slider
  }
}
</script>

<style scoped>
    #slider{
        padding-left:5%;
        padding-right:5%;
        padding-top:1%;
        padding-bottom:1%;
    }
</style>