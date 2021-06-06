// 1+2. create vue app + mount
Vue.createApp({
    data() {
        return {
            // product / package information
            product: {
                name: 'Cruise to the Moon',
                description: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
                image: {
                    src: './resources/image/space-tour.jpg',
                    description: 'Space Tour',
                    style: 'responsive-image centered-image',
                },

                classes: [
                    {
                        name: 'Coach',
                        price: 125000,
                        seatsAvailable: 20,
                        earlyBird: true
                    },
                    {
                        name: 'Business',
                        price: 275000,
                        seatsAvailable: 6,
                        earlyBird: true
                    },
                    {
                        name: 'First',
                        price: 430000,
                        seatsAvailable: 2,
                        earlyBird: false
                    }
                ]
            },
            // booking information
            booking: {
                completed: false,
                classId: '',
                notes: '',
            },
            selectedClass : '', 
        }
    },
    methods: {
        bookSeat() {
            if (this.booking.classId !== '') {
                this.booking.completed = true;
            }
        }
    },
    computed: {
        bookingDisplay() {
            const productClass = this.product.classes[this.booking.classId];
            if (productClass !== undefined) {
                return `${productClass.name} (Tk. ${productClass.price})`;
            }
        }
    }
}).mount('#app');