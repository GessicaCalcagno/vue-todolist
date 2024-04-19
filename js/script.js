// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */


const { createApp } = Vue;

createApp({
  data() {
    return {
    
      toDos: [
        {
          text: "Quarterly Newsletter",
          done: true,
        },
        {
          text: "Recruiting blog post",
          done: false,
        },
        {
          text: "Mobile App Launch",
          done: true,
        },
        {
          text: "Interview John H",
          done: false,
        },
        {
          text: "Summit update to mobile storefronts",
          done: true,
        },
        {
          text: "Schedule meeting with Alex",
          done: false,
        },
        {
          text: "Recruiting Editorial Calendar",
          done: false,
        },
      ],
    };
  },
  methods: {
  
  },
}).mount("#app");


