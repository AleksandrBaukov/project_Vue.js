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