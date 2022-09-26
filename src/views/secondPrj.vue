<template>
  <div id="secondPrj">
    <section class="content">
      <h3 style="text-align: center; margin-bottom: 15px">Drag & Drop</h3>
      <div class="container">
        <!-- Тут 1 зона -->
        <div
          class="drop-zone"
          @drop="onDrop($event, 1)"
          @dragover.prevent
          @dragenter.prevent
        >
          <label>Start</label>
          <div
            v-for="item in listOne"
            :key="item.title"
            class="drag-el"
            :draggable="true"
            @dragstart="startDrag($event, item)"
          >
            {{ item.title }}
          </div>
        </div>
        <!-- Тут 2 зона -->
        <div
          class="drop-zone"
          @drop="onDrop($event, 2)"
          @dragover.prevent
          @dragenter.prevent
        >
          <label>In process</label>
          <div
            v-for="item in listTwo"
            :key="item.title"
            class="drag-el"
            :draggable="true"
            @dragstart="startDrag($event, item)"
          >
            {{ item.title }}
          </div>
        </div>
        <!-- Тут 3 зона -->
        <div
          class="drop-zone"
          @drop="onDrop($event, 3)"
          @dragover.prevent
          @dragenter.prevent
        >
          <label>End</label>
          <div
            v-for="item in listTree"
            :key="item.title"
            class="drag-el"
            :draggable="true"
            @dragstart="startDrag($event, item)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: "secondPrj",
  data: () => ({
    items: [
      {
        id: 0,
        title: "Drug me",
        list: 1,
      },
    ],
  }),
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1);
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2);
    },
    listTree() {
      return this.items.filter((item) => item.list === 3);
    },
  },
  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id === parseInt(itemID)); // Тут ошибка в примере т.к. в данные записывает на строчке 114 конвертится в стринг, а id в items записаны в Number
      item.list = list;
    },
  },
};
</script>

<style scoped>
#secondPrj {
  background-color: aliceblue;
  height: 80vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  text-align: center;
}
.container {
  display: flex;
  width: 600px;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.drop-zone {
  height: 80px;
  width: 150px;
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
  background: linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%);
  border-radius: 20px;
  align-items: center;
}
.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
  cursor: grab;
  opacity: 0.7;
  text-align: center;
  border-radius: 20px;
}
.drag-el:active {
  cursor: grabbing;
}
.hold {
  border: 5px solid #eee;
  opacity: 0.5;
}
.hide {
  display: none;
}
.hovered {
  border-top: 2px solid rgb(35, 233, 111);
}
</style>
