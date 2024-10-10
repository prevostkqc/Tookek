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
            <form @submit.prevent="prepareMailto">
              <label class="label-champ" for="name">Nom Prénom&nbsp;:</label>
              <input class="input--champ" v-model="form.name" type="text" id="name" required />
  
              <label class="label-champ" for="mail">Email&nbsp;:</label>
              <input class="input--champ" v-model="form.mail" type="email" id="mail" required />
  
              <label class="label-champ" for="company">Type de projet&nbsp;:</label>
              <select class="input--champ input--champ-type" v-model="form.company" id="company" required>
                <option disabled value="">Sélectionner</option>
                <option value="Site vitrine">Site vitrine</option>
                <option value="Site e-commerce">Site e-commerce</option>
                <option value="Blog">Blog</option>
                <option value="Portfolio">Portfolio</option>
                <option value="Landing page">Landing page</option>
                <option value="Application web">Application web</option>
                <option value="Site événementiel">Site événementiel</option>
                <option value="Forum ou communauté">Forum ou communauté</option>
                <option value="Autre">Autre</option>
              </select>
  
              <label class="label-champ" for="description">Message&nbsp;:</label>
              <textarea class="input--champ" v-model="form.description" id="description" rows="5" required></textarea>

              <!-- reCAPTCHA -->
              <div class="g-recaptcha" id="g-recaptcha" data-sitekey="6LfyrFYqAAAAAH47s_rFt_XhutCTyBzmgxmTEz2T"></div>


              <button type="submit" class="cta cta--personnage cta--jaune">
                Valider
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
        mail: '',
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
    prepareMailto() {
      const subject = `Contact depuis tookek.fr de ${this.form.name}`;
      const body = `${this.form.name}\n${this.form.mail}\nType : ${this.form.company}\n---------------\n${this.form.description}`;
      const mailtoLink = `mailto:contact@tookek.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body).replace(/%0A/g, '%0D%0A')}`;
      
      window.location.href = mailtoLink;

      this.closeContactPopup();
    }
  },
  mounted() {
    this.addOverlayClickListener();
    if (typeof grecaptcha !== 'undefined') {
        grecaptcha.render('g-recaptcha', {
        'sitekey': '6LfyrFYqAAAAAH47s_rFt_XhutCTyBzmgxmTEz2T'
        });
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
    
    .g-recaptcha{
        margin-top: 20px;
        background-color: #FFFFFF;
        border: solid 3px #000000;
        border-radius: 20px;
        overflow: hidden;
        width: fit-content;
    }
    .popup-content {
      background-color: #644087; 
      border-radius: 30px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      width: 100%;
      max-width:1100px;
      position: relative;
      display: flex;
      padding: 20px 20px 20px 60px;
      outline: 3px solid #000000;
    }

    .input--champ{
        border-radius: 20px;
        border: none;
        padding: 10px;
        width: 100%;
        border: solid 3px #000000;
        background: #c4b3d5;
        font-size: 1.5em;
        font-weight: 500;
        font-family: rubik;
    }

    label.label-champ {
        font-size: 1.5em;
        display: block;
        margin: 20px 0 5px;
        color: #ffffff;
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
    .input--champ-type{
        text-align: left;
    }
    .input--champ-type{
        border-radius: 20px;
        font-weight: 400;

    }
    .input--champ-type option:checked {
        font-weight: 600;
        background: #644087;
    }
    .cta--personnage{
        margin-top: 25px;
    }
    

    @media (max-width: 1650px) {
      .container-bio{
          flex-wrap: wrap;
          justify-content: center;
          gap: 0;
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
      .input--champ{
        padding: 7px 15px;
        font-size: 1.2em;
        font-weight: 400;
      }
      .label-champ{
        font-size: 1.2em;
        margin-top:15px;
      }
    }
  </style>
  