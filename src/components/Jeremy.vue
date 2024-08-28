<template>
    <div class="popup-overlay">
      <div class="popup-content">
        <div class="ctaclose  pointer" @click="closePopup">
        </div>
        <h2>{{ title }}</h2>
        <div class="container-bio">
            <div class="container-bio--texte">
                
            </div>
            <div class="container-bio--img">
                <img :src="image1" class="jeremyluscher--img  jeremyluscher--img1" alt="Jérémy Luscher">
                <img :src="image2" class="jeremyluscher--img  jeremyluscher--img2" alt="Jérémy Luscher">
            </div>
        </div>

        <a href="https://tookis.fr/" target="_blank"  class="cta--container pointer">
            <div class="cta cta--personnage cta--violet">
               Voir mon site perso
            </div>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  
  import image1 from '@/assets/images/bd/tookis-bd1.svg';
  import image2 from '@/assets/images/bd/tookis-bd2.svg';

  export default {
    name: 'Jeremy',
    props: {
      title: {
        type: String,
        default: 'Jérémy Luscher',
      }
    },
    methods: {
      closePopup() {
        this.$emit('close');
      }
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
  
  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width:800px;
    position: relative;
  }

  .container-bio{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .jeremyluscher--img {
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    max-width: 250px;
    width: 100%;
    height: 250px;
  }
.container-bio--img{
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    max-width: 250px;
    width: 100%;
    height:250px;
}
  .jeremyluscher--img1{
    position: absolute;
  }
  .jeremyluscher--img2{
    animation: cligne 8s infinite;
    position: absolute;
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
    };
  }
  </style>
  