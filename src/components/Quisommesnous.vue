<template>
    <section class="tookisetkek--personnages">
        <!-- Kévin Prévost -->
        <article class="part-bloc part-bloc--kek  part-bloc--violet part-bloc--personnage">
            <h2 class="h2--nom texte--white">
                <span 
                    v-for="(letter, index) in spacedText(kek)" 
                    :key="index" 
                    class="wave-letter"
                    :style="{ animationDelay: (index * 0.05) + 's' }"
                >
                    <template v-if="letter === ' '">&nbsp;</template>
                    <template v-else>{{ letter }}</template>
                </span>
            </h2>
            <div class="unmembre">
                <div class="membre-container membre-container--kek">
                    <!-- Images Kek -->
                    <img :src="kekjambes" class="kek-part kek-part--jambes" alt="Jambes Kek">
                    <img :src="kekbrasgauche" class="kek-part kek-part--brasgauche" alt="Bras gauche de Kek">
                    <img :src="kekcorps" class="kek-part kek-part--corps" alt="Corps Kek">
                    <img :src="keklunettes" class="kek-part kek-part--lunettes" alt="Lunettes Kek">
                    <img :src="kekbrasdroit" class="kek-part kek-part--brasdroit" alt="Bras droit de Kek">
                </div>
            </div>
            <div class="cta--container pointer" @click="togglePopupKek">
                <div class="cta cta--personnage cta--jaune">
                    C'est qui ?
                </div>
            </div>
        </article>

        <!-- Jérémy Luscher -->
        <article class="part-bloc part-bloc--tookis part-bloc--jaune part-bloc--personnage">
            <h2 class="h2--nom texte--noir">
                <span 
                    v-for="(letter, index) in spacedText(tookis)" 
                    :key="index" 
                    class="wave-letter"
                    :style="{ animationDelay: (index * 0.05) + 's' }"
                >
                    <template v-if="letter === ' '">&nbsp;</template>
                    <template v-else>{{ letter }}</template>
                </span>
            </h2>
            <div class="unmembre">
                <div class="membre-container membre-container--tookis">
                    <!-- Images Tookis -->
                    <img :src="tookisjambes" class="tookis-part tookis-part--jambes" alt="Jambes Tookis">
                    <img :src="tookisbrasdroit" class="tookis-part tookis-part--brasdroit" alt="Bras droit de Tookis">
                    <img :src="tookiscorps" class="tookis-part tookis-part--corps" alt="Corps Tookis">
                    <img :src="tookislunettes" class="tookis-part tookis-part--lunettes" alt="Lunettes Tookis">
                    <img :src="tookisbrasgauche" class="tookis-part tookis-part--brasgauche" alt="Bras gauche de Tookis">
                </div>
            </div>
            <div class="cta--container pointer" @click="togglePopupTookis">
                <div class="cta cta--personnage cta--violet">
                    Il fait quoi ?
                </div>
            </div>
        </article>
    </section>

    <!-- Pop-up pour Kévin -->
    <Popupkek v-if="showPopupKek" :title="'Kévin Prévost'" @close="togglePopupKek" />
    
    <!-- Pop-up pour Jérémy -->
    <Popuptookis v-if="showPopupTookis" :title="'Jérémy Luscher'" @close="togglePopupTookis" />
</template>

<script>
import Popupkek from '@/components/Kevin.vue';
import Popuptookis from '@/components/Jeremy.vue';

import kekbrasdroit from '@/assets/images/kek/brasdroit.svg';
import kekbrasgauche from '@/assets/images/kek/brasgauche.svg';
import kekcorps from '@/assets/images/kek/corps.svg';
import kekjambes from '@/assets/images/kek/jambes.svg';
import keklunettes from '@/assets/images/kek/lunettes.svg';

import tookisbrasdroit from '@/assets/images/tookis/brasdroit.svg';
import tookisbrasgauche from '@/assets/images/tookis/brasgauche.svg';
import tookiscorps from '@/assets/images/tookis/corps.svg';
import tookisjambes from '@/assets/images/tookis/jambes.svg';
import tookislunettes from '@/assets/images/tookis/lunettes.svg';

export default {
  name: 'Quisommesnous',
  components: {
    Popupkek,
    Popuptookis,
  },
  data() {
    return {
      kekjambes,
      kekbrasgauche,
      kekcorps,
      keklunettes,
      kekbrasdroit,
      tookisjambes,
      tookisbrasgauche,
      tookiscorps,
      tookislunettes,
      tookisbrasdroit,
      kek: 'Kévin Prévost', // Texte à animer pour Kévin
      tookis: 'Jérémy Luscher', // Texte à animer pour Jérémy
      showPopupKek: false, // Variable pour gérer l'affichage du pop-up de Kévin
      showPopupTookis: false // Variable pour gérer l'affichage du pop-up de Jérémy
    };
  },
  methods: {
    // Préserve les espaces dans le texte pour chaque texte
    spacedText(text) {
      return text.split(''); // Convertit chaque caractère, y compris les espaces, en un tableau
    },
    // Méthodes pour afficher/masquer les pop-ups
    togglePopupKek() {
      this.showPopupKek = !this.showPopupKek;
    },
    togglePopupTookis() {
      this.showPopupTookis = !this.showPopupTookis;
    },
  },
};
</script>


<style scoped>

    .membre-container{
        position: relative;
        width: 100%;
        aspect-ratio: 2 / 3.5;
    }
    .tookisetkek--personnages{
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 1000px;
        margin: auto;
        gap: 30px;
        flex-wrap: wrap;
    }
    .unmembre{
        width: 35%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        padding: 10px;
        transition: 0.3s;
    }
    .h2--nom{
        text-align: center;
        margin: auto;
        width: fit-content;
        padding-top: 10px;
    }

    /* CTA */
    .part-bloc--personnage{
        width: calc(50% - 20px);
        display: flex;
        flex-direction: column;
        min-width: 350px;
    }
    .cta--personnage{
        margin-bottom: 20px;
    }

    .cta--container{
        position: relative;
        z-index: 5;
        margin: auto;
        width: fit-content;
    }
    .part-bloc:hover .unmembre{
        transform: scale(1.1);
    }

    .part-bloc{
        aspect-ratio: 1/1;
    }
    
    .part-bloc--kek{
        animation: bubbleEffect 1.2s forwards;
        animation-delay: 0.2s;
    }
    .part-bloc--tookis{
        animation: bubbleEffect 1s forwards;
        animation-delay: 0.5s;
    }

    /* --------------------------- */
    /* Kek */
    .kek-part  {
        position: absolute;
        left:0;
    }
    .kek-part--jambes{
        bottom: 0;
        width: 95%;
    }
    .kek-part--brasgauche{
        transform-origin: top left;
        top: 43%;
        left: auto;
        right: 8%;
        animation: 3s infinite bougerbrasgauche-0a72df5d, 2s infinite bougercorps-0a72df5d;
        width: 30%;
    }
    .kek-part--brasdroit{
        transform-origin: top right;
        top: 43%;
        animation: 3s infinite bougerbrasdroit-0a72df5d, 2s infinite bougercorps-0a72df5d;
        width: 30%;
    }
    .kek-part--lunettes{
        top: 30%;
    left: 30%;
    animation: 2s infinite bougerlunettes-0a72df5d, balancerlunettes-0a72df5d 2s infinite;
    width: 50%;
    }
    .kek-part--corps{
        animation: 2s infinite bougercorps;
        width: 100%;
        top: 0;
    }
    @keyframes bougerbrasdroit {
        0% {transform: rotate(0deg);}
        50% {transform: rotate(5deg);}
        100% {transform: rotate(0deg);}
    }
    @keyframes bougerbrasgauche {
        0% {transform: rotate(0deg);}
        50% {transform: rotate(-5deg);}
        100% {transform: rotate(0deg);}
    }
    @keyframes bougerlunettes {
        0% {margin-top:0;}
        50% {margin-top:6%;}
        100% {margin-top:0;}
    }
    @keyframes balancerlunettes {
        0% {transform: rotate(0deg);}
        50% {transform: rotate(2deg);}
        100% {transform: rotate(0deg);}
    }
    @keyframes bougercorps {
        0% {margin-top:0;}
        50% {margin-top:5%;}
        100% {margin-top:0;}
    }

    /* --------------------------- */
    /* Tookis */
    .tookis-part  {
        position: absolute;
        left:0;
    }
    .tookis-part--jambes{
        bottom: 0;
        width: 98%;
        left: 6%;
    }
    .tookis-part--brasgauche{
        transform-origin: top left;
        top: 43%;
        left: auto;
        right: 4%;
        animation: 3s infinite bougerbrasgauche-0a72df5d, 2s infinite bougercorps-0a72df5d;
        width: 30%;
    }
    .tookis-part--brasdroit{
        transform-origin: top right;
        top: 43%;
        animation: 3s infinite bougerbrasdroit-0a72df5d, 2s infinite bougercorps-0a72df5d;
        width: 27%;
        left: 11%;
    }
    .tookis-part--lunettes{
        top: 28%;
        left: 17%;
        animation: 2s infinite bougerlunettes-0a72df5d, balancerlunettestookis 2s infinite;
        width: 52%;
    }
    .tookis-part--corps{
        animation: 2s infinite bougercorps;
        width: 100%;
        top: 0;
    }

    @keyframes balancerlunettestookis {
        0% {transform: rotate(0deg);}
        50% {transform: rotate(-2deg);}
        100% {transform: rotate(0deg);}
    }

    .h2--nom {
    display: inline-block;
    font-size: 2.5rem;
    cursor: pointer;
    transition: transform 0.3s ease;
    white-space: nowrap;
    }

    .part-bloc:hover .wave-letter {
    animation: wave 0.6s ease-in-out infinite;
    display: inline-block;
    }

    @keyframes wave {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px); 
        }
    }

    

@media (max-width: 1650px) {
    .part-bloc--personnage{
        min-width: 100%;
    }
}

</style>
