<template>
  <div id="third">
    <h3 style="text-align: center; margin-bottom: 15px">Color Cubes</h3>
    <div class="container">
      <div class="board">
        <div
          class="square"
          v-for="i in 300"
          :key="i"
          @mouseover="setActiveElement(i)"
          @mouseleave="removeColor"
          :style="i === activeIndex ? activeStyle : null"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "third",
  data: () => ({
    colors: ["#b14242", "#347523", "#928b26", "#22af79", "#b929b2"],
    activeIndex: null,
    activeColorIndex: 0,
  }),

  methods: {
    setActiveElement(index) {
      this.activeIndex = index;
      this.activeColorIndex = Math.floor(Math.random() * this.colors.length);
    },
    removeColor() {
      this.activeIndex = null;
    },
  },
  computed: {
    activeStyle() {
      const color = this.colors[this.activeColorIndex];
      return {
        backgroundColor: color,
        boxShadow: `0 0 2px ${color}, 0 0 10px ${color}`,
      };
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.board {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 400px;
}
.square {
  width: 20px;
  height: 20px;
  background: #2f3030;
  margin: 2px;
  box-shadow: 0 0 2 #000;
  transition: 2s ease;
}
.square:hover {
  transition-duration: 0s;
}
</style>
>