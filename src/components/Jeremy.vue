
  <template>
    <div class="popup-overlay">
      <div class="popup-content">
        <div class="ctaclose  pointer" @click="closePopup">
        </div>
        <div class="container-bio">
            <div class="container-bio--texte">
                <h2>{{ title }}</h2>
                Je suis UX/UI designer et graphiste, passionné par la créativité et l’art subtil des couleurs. Mon travail allie esthétique et fonctionnalité pour concevoir des expériences visuelles intuitives et immersives. 
                <br><br>J’accorde une grande importance à l’observation des couleurs, à leur impact sur les émotions et à leur capacité à raconter une histoire à travers des interfaces modernes et ergonomiques.
                <br><br>Chaque projet est pour moi une opportunité d’explorer de nouvelles idées et d’innover, tout en plaçant l’utilisateur au centre de mes réflexions.
                <br><br>Mon approche se veut créative et méthodique, où le design est un équilibre entre l’originalité et la simplicité.
            </div>
            <div class="cta-container--pop">
              <a href="https://tookis.fr/" target="_blank"  class="cta--container pointer">
                  <div class="cta cta--personnage cta--violet">
                    Voir mon site perso
                  </div>
              </a>
            </div>
        </div>
        
        <div class="container-bio--img">
                <img :src="image1" class="jeremyluscher--img  jeremyluscher--img1" alt="Jérémy Luscher">
                <img :src="image2" class="jeremyluscher--img  jeremyluscher--img2" alt="Jérémy Luscher">
        </div>

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
      color: white;
    }
    
    .popup-content {
      background-color: #FDB925; 
      border-radius: 30px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      width: 100%;
      max-width:1100px;
      position: relative;
      display: flex;
      padding: 20px 20px 20px 60px;
      outline: 3px solid #000000;
    }
    

    .container-bio--texte{
      padding: 30px;
      background: #8B69AD;
      border-radius: 30px;
      border: solid 3px #272635;
      font-weight: 500;
      color: white;
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

    .jeremyluscher--img {
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
    .jeremyluscher--img1{
      position: absolute;
    }
    .jeremyluscher--img2{
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
  