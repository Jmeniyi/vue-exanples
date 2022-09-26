<template>
  <div id="firstPrj">
    <section1 class="content">
      <h3 style="text-align: center; margin-bottom: 15px">Slider</h3>
      <div class="container">
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="slide"
          :style="`background-image: url('${slide.image}');`"
          :class="{ 'active no-scope': activeSlide === i }"
          @click="setActiveSlide(i)"
        >
          <h3>{{ slide.title }}</h3>
        </div>
      </div>
      <slot />
    </section1>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    activeSlide: 0,
    slides: [
      {
        title: "Air Jordan 1 Homage to Home",
        image: "https://wallpaperaccess.com/full/1231791.jpg",
      },
      {
        title: "Nike Air Jordan 4",
        image: "https://wallpaperaccess.com/full/1113077.jpg",
      },
      {
        title: "Air Jordan 1 Homage to Home",
        image: "https://wallpaperaccess.com/full/1231791.jpg",
      },
      {
        title: "Air Jordan 1 Homage to Home",
        image: "https://wallpaperaccess.com/full/1231791.jpg",
      },
      {
        title: "Air Jordan 1 Homage to Home",
        image: "https://wallpaperaccess.com/full/1231791.jpg",
      },
    ],
  }),
  methods: {
    setActiveSlide(value) {
      console.log("setActiveSlide", value);
      this.activeSlide = value;
    },
  },
  watch: {
    activeSlide(v) {
      console.log("watch", v);
    },
  },
};
</script>


<style scoped>
#firstPrj {
  background-color: aliceblue;
}
.container {
  width: 100%;
  display: flex;
  height: 100%;
  background-color: aliceblue;
}
.slide {
  text-align: center;
  height: 80vh;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: all 500ms ease-in-out;
}
.slide h3 {
  position: absolute;
  font-size: 20px;
  bottom: 20px;
  margin: 0;
}
.slide.active {
  flex: 3;
}
.slide.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in;
  text-align: center;
}
</style>

