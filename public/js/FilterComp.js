Vue.component('filter-el', {
    data(){
        return {
            userSearch: ''
        }
    },
    template: `
    <form action="#" class="head-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                        <input type="search" placeholder="search" v-model="userSearch">
                        <button type="submit"></button>
                    </form>
    `
})

Vue.component('category', {
    data() {
      return {
          category: ''
      }
    },
    template: `<div class="progects-nav">
                    <button v-on:click="$parent.$refs.products.filterByCategory(0)"><span>All</span></button>
                    <button v-on:click="$parent.$refs.products.filterByCategory(1)"><span>Notebooks</span></button>
                    <button v-on:click="$parent.$refs.products.filterByCategory(2)"><span>Phones</span></button>
                </div>`
})