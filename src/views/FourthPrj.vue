<template>
  <div id="FourthPrj">
    <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
      <h3 style="text-align: center">Price Checker</h3>
      <div class="input-group mb-3 align-items-center">
        <input
          v-model="item"
          type="text"
          class="form-control"
          @keydown.enter="addItem"
          placeholder="Enter the name of the item in this field"
        />
        <button @click="addItem" type="submit" class="btn btn-primary">
          Add Item
        </button>
      </div>

      <template v-if="items.length">
        <hr class="w-full border-t border-gray-600 my-4" />

        <div class="container">
          <div class="row justify-content-center">
            <div
              class="
                col-4
                bg-white
                overflow-hidden
                shadow
                rounded-lg
                border-purple-800 border-solid
                cursor-pointer
              "
              v-for="item in items"
              :key="item"
              :style="`max-width:300px;`"
            >
              <div class="px-4 py-5 sm:p-6 text-center">
                <dt class="text-sm font-medium text-gray-500 truncate">
                  {{ item.name }}-USD
                </dt>
                <dd class="mt-1 text-3xl font-semibold text-gray-900">
                  {{ item.price }}
                </dd>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                <button
                  class="btn btn-outline-secondary"
                  @click="deleteItem(item)"
                >
                  <i class="fa fa-trash-o margin" aria-hidden="true">Удалить</i>
                </button>
              </div>
            </div>
            {{ item }}
          </div>
          <hr class="w-full border-t border-gray-600 my-4" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "FourthPrj",
  data: () => ({
    items: [],
    sel: null,
  }),

created(){
  const itemsData = localStorage.getItem('criptolist');

  if (itemsData) {
    this.items = JSON.parse(itemsData);
  }
  
},

  methods: {
    updatei (itemName){
      setInterval(async()=>{
        const f = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${itemName}&tsyms=USD&api_key=dcf5a300c3d50b359f3553ae1aac6fa13b9d17eb65ec24ee19eafa79470ace39`);
        const data = await f.json();
        this.items.find(item=>item.name === itemName).price=data.USD; 
      },2000),
      this.item = "";
    },
    addItem() {
      const newCard = {
        name: this.item,
        price: "-",
      };
      this.items.push(newCard);

      localStorage.setItem('criptolist',JSON.stringify(this.items));
      this.updatei(newCard.name);
      
    },
    deleteItem(itemToDel) {
      this.items = this.items.filter((item) => item !== itemToDel);
    },
  },
};
</script>

<style scoped>
.cards {
  text-align: center;
}
.col-4 {
  height: 150px;
  height: auto;
  margin: 10px;
}
.btn {
  justify-content: center;
  margin: 5px;
}
</style>

