Vue.createApp({
    data: () => ({
        myHtml: 'Vue 3 App',
        title: 'Это заголовок',
        person: {
            firstName: 'Mikha',
            lastName: 'Che',
            age: 44
        },
        arr: [14, 22, 53, 35]
    }),

    methods: {
        addItem () {
            this.arr.unshift(this.$refs.myInput.value);
            this.$refs.myInput.value = '';
        },

        remove(idx) {
            this.arr.splice(idx, 1)
        },

        log(n) {
            console.log("Log item:", n);
        }
    }, 

    computed: {
        evenNum() {
            return this.arr.filter(i => i%2 ===0)
        }
    }
}).mount('#app')