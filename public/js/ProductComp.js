Vue.component('products', {
    data(){
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
            // imgCatalog: 'https://placehold.it/370x237',
        }
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
        filterByCategory(id) {
            if (id == 0) {
                this.filtered = this.products;
            } else {
                this.filtered = this.products.filter(el => el.category == id);
            }
        }
    },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
            <div class="progects-blocks">
                <product v-for="item of filtered" :key="item.id_product" :img="item.image" :product="item"></product>
            </div>
    `
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
    <div class="progects-blocks-item">
                <img :src="img" alt="Some img" width="370px" height="237px">
                <div class="progects-blocks-item-wrp progects-blocks-item-wrp-catalog">
                    <h3 class="progects-blocks-item-wrp-title progects-blocks-item-wrp-title-catalog">{{product.product_name}}</h3>					
                    <p class="progects-blocks-item-wrp-text progects-blocks-item-wrp-text-catalog">{{product.price}} $</p>
                    <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)"><span class="buy-btn-txt">Купить</span></button>
                </div>
            </div>
    `
})

