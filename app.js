Vue.createApp({
    data: () => ({
        myHtml: 'Vue 3 App',
        title: 'Это заголовок',
        person: {
            firstName: 'Mikha',
            lastName: 'Che',
            age: 44
        },
        arr: [14, 22, 23, 47, 5, 46]
    })
}).mount('#app')