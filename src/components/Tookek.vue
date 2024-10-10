
  <template>
    <div class="popup-overlay">
      <div class="popup-content">
        <div class="ctaclose  pointer" @click="closeTookekPopup">
        </div>
        <div class="container-bio">
            <div class="container-bio--texte">
                <h2>Qui sommes-nous ?</h2>
                Bienvenue sur Tookek.fr, une plateforme où le design et le développement web se rencontrent pour donner vie à vos projets numériques. Nous sommes <span class="bold  bold-jeremy">Jérémy Luscher</span>, UX/UI designer et graphiste, et <span class="bold  bold-kek">Kévin Prévost</span>, développeur web. Ensemble, nous allions nos compétences pour vous offrir des solutions créatives et sur mesure, tout en garantissant une approche claire et transparente de nos services.
                <br><br>Chez Tookek.fr, nous croyons en l'importance de <span class="bold">l'expertise spécifique à chaque domaine</span>. Jérémy se consacre à la conception d'interfaces visuelles qui sont non seulement esthétiques, mais aussi fonctionnelles, en se focalisant sur l'harmonie des couleurs et <span class="bold">l'ergonomie</span>. De son côté, Kévin met à profit ses dix années d'expérience pour développer des <span class="bold">solutions web performantes</span>, optimisées et adaptées à vos besoins.
                <br><br>Afin de simplifier et de <span class="bold">clarifier la gestion de vos projets</span>, nous proposons une approche distincte : pour chaque mission, vous recevez deux devis et deux factures séparées. <span class="bold">Cette transparence</span> vous permet de mieux comprendre et suivre les différentes phases du projet, qu'il s'agisse du design graphique ou du développement technique. Ainsi, <span class="bold">vous avez une vision claire de l'avancement et de la valeur ajoutée</span> de chaque service.
                <br><br>Notre collaboration est une <span class="bold">véritable synergie</span>, où chaque étape est pensée pour offrir des résultats à la fois <span class="bold">innovants et performants</span>. Nous sommes animés par une passion commune pour le multimédia et les nouvelles technologies, et nous avons à cœur de relever de nouveaux défis pour <span class="bold">concrétiser vos idées les plus ambitieuses</span>.
            </div>
            <div class="container-bio--texte">
              <h2>Comment nous travaillons</h2>
              <p><i class="italic-texte">Notre approche est centrée sur la collaboration et la transparence, afin de vous offrir un accompagnement complet et personnalisé tout au long de votre projet.</i>
                <br><br><h3 class="titre-etape">1- Échange initial et compréhension des besoins</h3>
                <br>Tout commence par une discussion avec vous pour bien comprendre vos attentes, vos objectifs et les spécificités de votre projet. Cette phase d’écoute est essentielle pour établir une vision claire et alignée sur vos besoins, qu’il s’agisse du design ou des aspects techniques.
                <br><br><h3 class="titre-etape">2- Deux devis distincts pour plus de clarté</h3>
                <br>Nous proposons deux devis séparés : l’un pour la conception graphique et l’autre pour la développement technique. Cette distinction vous permet de mieux visualiser les coûts et les étapes du projet, tout en apportant plus de transparence sur la gestion des différentes phases.
                <br><br><h3 class="titre-etape">3- Wireframes et documentation visuelle</h3>
                <br>Une fois les devis validés, nous démarrons avec la création des wireframes, qui sont des maquettes filaires montrant la structure et l’organisation des éléments de votre futur site. Nous réalisons ensuite une direction artistique (DA) et toute la documentation visuelle, qui inclut les détails graphiques et esthétiques nécessaires à la réalisation du projet.
                <br><br><h3 class="titre-etape">4- Passage au développement</h3>
                <br>Une fois la documentation visuelle validée, nous passons à l’étape du développement technique. Nous intégrons les maquettes validées et développons votre site avec soin pour assurer une expérience fluide et une performance optimale. Chaque étape est réalisée avec rigueur pour aboutir à un produit final de qualité.
                <br><br><h3 class="titre-etape">5- Séance de prise en main</h3>
                <br>À la livraison du projet, nous organisons une séance de prise en main avec vous pour vous présenter le fonctionnement du site et vous donner toutes les clés nécessaires à son utilisation. Vous repartirez ainsi avec une totale autonomie sur votre nouvel outil.
                <br><br><h3 class="titre-etape">6- Maintenance après publication</h3>
                <br>Après la livraison, nous offrons une période de maintenance pour gérer les éventuels problèmes ou ajustements qui resteraient dans le cadre du devis initial. Cela vous assure un suivi post-livraison et une tranquillité d’esprit pour débuter avec votre nouveau site.
              </p>
          </div>
        </div>
        
        <div class="container-bio--img">
          <div class="unpreso">
            <img :src="image1" class="jeremyluscher--img perso--img  jeremyluscher--img1" alt="Jérémy Luscher">
                <a href="https://tookis.fr/" target="_blank"  class="cta--container pointer">
                    <div class="cta cta--personnage cta--violet">
                        Voir le site de Jérémy
                    </div>
                </a>
          </div>
            
          <div class="unpreso">
            <img :src="image2" class="kevinprevost--img perso--img  kevinprevost--img1" alt="Jérémy Luscher">
                <a href="https://kevinprevost.fr/" target="_blank"  class="cta--container pointer cta-kek">
                    <div class="cta cta--personnage cta--jaune">
                        Voir le site de Kévin
                    </div>
                </a>
          </div>
            
        </div>
       
       

      </div>
    </div>
  </template>
  

  <script>

  import image1 from '@/assets/images/bd/tookis-bd1.svg';
  import image2 from '@/assets/images/bd/kek1.svg';

  export default {
    name: 'Tookek',
    props: {
      title: {
        type: String,
        default: 'Tookek',
      }
    },
    methods: {
      closeTookekPopup() {
        this.$emit('close');
      },
      addOverlayClickListener() {
        document.querySelector('.popup-overlay').addEventListener('click', (event) => {
          if (event.target === event.currentTarget) {
            this.closeTookekPopup();
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
      background-color: #644087; 
      border-radius: 30px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      width: 100%;
      max-width:1300px;
      position: relative;
      display: flex;
      padding: 20px 20px 20px 60px;
      outline: 3px solid #000000;
      gap:20px;
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
      width: 60%;
      margin-bottom:20px;
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
        position: sticky;
        top: 0;
        left: 0;
        width: 40%;
        flex-wrap: wrap;
        align-content: flex-start;
        gap:20px;
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
        filter: drop-shadow(1px 1px 0px #cd9828);
    }
    .unperso{
      width: 100%;
    }
    .titre-etape{
      font-size: 1.3em;
      margin-bottom:-15px;
    }
      .popup-content{
        height: 100vh;
        overflow-y: scroll;
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
      .unpreso{
        width: 100%;
      }
      .perso--img{
        width:75%;
        margin: auto;
      }
    }
  </style>
  