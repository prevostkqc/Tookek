<template>
    <div class="popup-overlay">
      <div class="popup-content">
        <div class="ctaclose pointer" @click="closeContactPopup"></div>
        <div class="container-bio">
          <div class="container-bio--texte">
            <h2>Prise de contact</h2>
            Merci de remplir ce formulaire afin de nous permettre de mieux comprendre vos besoins.
            <br>Choisissez le type de projet que vous souhaitez réaliser et décrivez vos attentes dans la section message.
            <br>Nous reviendrons vers vous rapidement avec un devis personnalisé et adapté à vos besoins.
          </div>
  
          <!-- Formulaire -->
          <div class="cta-container--pop">
            <form @submit.prevent="sendEmail">
              <label for="name">Nom Prénom:</label>
              <input v-model="form.name" type="text" id="name" required />
  
              <label for="company">Compagnie (facultatif):</label>
              <input v-model="form.company" type="text" id="company" />
  
              <label for="description">Description du projet:</label>
              <textarea v-model="form.description" id="description" required></textarea>
  
              <button type="submit" class="cta cta--personnage cta--jaune">
                Envoyer
              </button>
            </form>
          </div>
        </div>
  
        <div class="container-bio--img">
          <img :src="image1" class="jeremyluscher--img jeremyluscher--img1" alt="Tookek" />
        </div>
      </div>
    </div>
  </template>
  

  <script>
  import image1 from '@/assets/images/tookeklogo.svg';
  
  export default {
    name: 'Contact',
    data() {
      return {
        image1,
        form: {
          name: '',
          company: '',
          description: ''
        }
      };
    },
    methods: {
      closeContactPopup() {
        this.$emit('close');
      },
      addOverlayClickListener() {
        document.querySelector('.popup-overlay').addEventListener('click', (event) => {
          if (event.target === event.currentTarget) {
            this.closeContactPopup();
          }
        });
      },
      sendEmail() {
        // Construction dynamique de l'URL mailto
        const mailtoLink = `mailto:contact@tookek.fr?subject=Contact depuis tookek.fr&body=Nom Prénom: ${encodeURIComponent(this.form.name)}%0D%0ACompagnie (facultatif): ${encodeURIComponent(this.form.company)}%0D%0ADescription du projet: %0D%0A${encodeURIComponent(this.form.description)}%0D%0A%0D%0A`;
  
        // Ouvre le lien dans une nouvelle fenêtre
        window.open(mailtoLink, '_blank');
      }
    },
    mounted() {
      this.addOverlayClickListener();
    }
  };
  </script>
  
  
  <style scoped>
    .popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100;
    }
    h2{
      padding-bottom: 20px;
    }
    
    .popup-content {
      background-color: #644087; 
      border-radius: 30px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      width: 100%;
      max-width:1000px;
      position: relative;
      display: flex;
      padding: 20px 20px 20px 60px;
      outline: 3px solid #000000;
    }
    

    .container-bio--texte{
      padding: 30px;
      background: #FDB925;
      border-radius: 30px;
      border: solid 3px #272635;
      font-weight: 500;
      line-height: 1.2;
    }

    .container-bio{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      gap: 20px;
      width: 100%;
    }

    .jeremyluscher--img {
      display: flex;
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
    }
    .kevinprevost--img {
      display: flex;
      position: relative;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    .container-bio--img{
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        width: 40%;
        flex-wrap: wrap;
    }
    .cta-container--pop{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .cta--personnage{
      width: 100%;
      display: flex;
    }
    .cta-kek{
        margin-top: 20px;
    }
    .cta--container{
        width:100%;
    }
    .bold{
        color: #000000;
        filter: drop-shadow(2px 2px 0px #cd9828);
    }
    

    @media (max-width: 1650px) {
      .container-bio{
          flex-wrap: wrap;
          justify-content: center;
      }
      .popup-content{
        flex-wrap: wrap;
        padding: 20px;
      }
      .container-bio,
      .container-bio--img{
        width: 100%;
      }
      .container-bio--img{
        aspect-ratio: 1/1;
      }
      .popup-content{
        height: 100vh;
        overflow-y: scroll;
      }
      .ctaclose{
        position: fixed;
      }
    }
  </style>
  