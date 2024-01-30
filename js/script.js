console.log('JS OK');

// Importo l'endpoint boolean per ottenere gli indirizzi mail
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// Importo l'oggetto Vue
const { createApp } = Vue;

const myApp = createApp({
    name: 'Vue Email List',
    data: () => ({
        title: 'Vue Email List',
        emails: [],
        times: 10,
    }),

    methods: {
        fetchEmails() {
            axios.get(endpoint)

                // Intercetta la chiamata per rispondere
                .then((res) => {
                    this.emails.push(res['data']['response']);
                })
        }
    },

    created() {
        for (let i = 0; i < this.times; i++) {
            this.fetchEmails();
        }
    }

})

myApp.mount('#root');
