// 1 . create vue app
const App = Vue.createApp({
data() {
    return {
        productName: 'Book a Cruise to the Moon',
        productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
    }
}
});

// 2. mount app
App.mount('#app');