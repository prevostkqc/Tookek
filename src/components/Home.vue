<template>
    <div>
      <h1>Page d'accueil</h1>
      <p>Bienvenue sur la page d'accueil !</p>
    </div>

    <div>
        <p>Compteur : {{ counter }}</p>
        <p>Double du compteur : {{ doubleCounter }}</p>
        <button @click="increment">Incrémenter</button>
        <button @click="decrement">Décrémenter</button>
        <button @click="incrementAsync">Incrémenter après 1 seconde</button>
     </div>
  </template>
  
  <script>
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
  export default {
    name: 'Home',
    data() {
      return {
        message: 'Bonjour!'
      };
    },
    computed: {
    // Accéder à l'état global avec mapState
    ...mapState(['counter']),
    
    // Accéder aux getters du store
    ...mapGetters(['doubleCounter'])
  },
  methods: {
    // Appeler les mutations du store
    ...mapMutations(['increment', 'decrement']),
    
    // Appeler les actions asynchrones
    ...mapActions(['incrementAsync'])
  }
  };
  </script>
  
  <style scoped>
  /* Styles pour Home.vue */
  </style>