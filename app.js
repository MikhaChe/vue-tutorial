Vue.createApp({
    data: () => ({
        myHtml: 'Vue 3 App',
        title: 'Это заголовок',
        person: {
            firstName: 'Mikha',
            lastName: 'Che',
            age: 44
        }
    })
}).mount('#app')