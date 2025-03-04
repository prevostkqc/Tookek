<template>
    <div class="popup-overlay">
      <div class="popup-content">
        <div class="ctaclose  pointer" @click="closePopup">
        </div>
        <div class="container-bio">
            <div class="container-bio--texte">
                <h2>{{ title }}</h2>
                Fort de plus de 10 ans d'expérience en développement web, je suis un expert en création et optimisation de solutions numériques. 
                <br><br>Ancien responsable de la Cellule Créative chez Cybertek, j'excelle dans la gestion d'équipe, l'innovation et la collaboration, menant des projets dont je suis fier à leur fin. 
                <br><br>Passionné par le multimédia et les nouvelles technologies, je suis constamment à la recherche de nouveaux défis.
            </div>
            <div class="cta-container--pop">
              <a href="https://kevinprevost.fr/" target="_blank"  class="cta--container pointer">
                  <div class="cta cta--personnage cta--jaune">
                    Voir mon site perso
                  </div>
              </a>
            </div>
        </div>
        
        <div class="container-bio--img">
            <img :src="image1" class="kevinprevost--img  kevinprevost--img1" alt="Kévin Prévost">
            <img :src="image2" class="kevinprevost--img  kevinprevost--img2" alt="Kévin Prévost">
        </div>

      </div>
    </div>
  </template>
  
  <script>
  
  import image1 from '@/assets/images/bd/kek1.svg';
  import image2 from '@/assets/images/bd/kek-bd2.svg';

  export default {
    name: 'Kevin',
    props: {
      title: {
        type: String,
        default: 'Kévin Prévost',
      }
    },
    methods: {
      closePopup() {
        this.$emit('close');
      },
      mounted() {
        this.addOverlayClickListener();
      },
      addOverlayClickListener() {
        document.querySelector('.popup-overlay').addEventListener('click', (event) => {
          if (event.target === event.currentTarget) {
          this.closePopup();
          }
        });
      }
    },
    mounted() {
      this.addOverlayClickListener();
    },
    data() {
        return {
            image1,
            image2,
        }
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
      background: #8B69AD;
      border-radius: 30px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      width: 100%;
      max-width:1100px;
      position: relative;
      display: flex;
      padding: 20px 60px 20px 20px;
      outline: 3px solid #000000;
    }
    

    .container-bio--texte{
      padding: 30px;
      background-color: #FDB925;
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
      width: 60%;
    }

    .kevinprevost--img {
      display: flex;
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
    }
    .container-bio--img{
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        width: 40%;
    }
    .kevinprevost--img1{
      position: absolute;
    }
    .kevinprevost--img2{
      animation: cligne 6s infinite;
      position: absolute;
    }
    .cta-container--pop{
      width: 100%;
    }
    .cta--personnage{
      width: 100%;
      display: flex;
    }
    @keyframes cligne {
      0% {
        opacity: 0;
      }
      11% {
        opacity: 0;
      }
      12% {
        opacity: 1;
      }
      13% {
        opacity: 0;
      }
      63% {
        opacity: 0;
      }
      64% {
        opacity: 1;
      }
      65% {
        opacity: 0;
      }
      69% {
        opacity: 0;
      }
      70% {
        opacity: 1;
      }
      71% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
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
  