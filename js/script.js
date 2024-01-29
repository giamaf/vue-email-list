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

})

myApp.mount('#root');
