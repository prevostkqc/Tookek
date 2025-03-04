<template>  
  <section class="projets">
    <div class="div-projets-list" v-if="isProjectListVisible">
      <h2 class="white-texte">Nos réalisations</h2>
      <ul class="projets-list">
        <li 
          v-for="project in projects" 
          :key="project.id" 
          :class="[{ selected: project.id === currentProject?.id }, 'projets-list--item']"
          @click="selectProject(project.id)"
        >
          <img :src="getImageForProject(project)" alt="Projet {{ project.nomduprojet }}" />
          <h4 class="titre-projet-li">{{ project.nomduprojet }}</h4>
          <p :class="'type--'+project.typeicone">{{ project.typeicone }}</p>
        </li>
      </ul>
    </div>

    <div class="ctacloseprojet" @click="closeProjets">
      <img :src="image3" :alt="fermer" class="fermer-portfolio" />
    </div>

    <div v-if="isProjectDetailsVisible && currentProject" id="projet-actuel">
      <article :class="['un-projet', 'typeprojet'+currentProject.slugtypedeprojet]">
        <div class="deux-sections  deux-section--une">
          <div class="une-section une-section--violet  deux-section--une  deux-section--deuxieme  deux-section--une-header">
            <h2 class="nom-du-projet">{{ currentProject.nomduprojet }}</h2>
            <p class="annee">{{ currentProject.typedeprojet }}</p>
            <p class="annee">{{ currentProject.date }}</p>
            <br>
            <div class="logotexte">
              <img :src="getLogo()" class="resultat-preview--mobile image-logo" :alt="'Logo du projet ' + currentProject.nomduprojet" />
              <p>{{ currentProject.texteclient }}</p>
            </div>
          </div>
        </div>
        
        <div class="un-projet--titre une-section une-section--jaune  deux-section--une   deux-section--une-header    deux-section--premiere">
          <h2 class="titre-du-site">Le site {{ currentProject.client }}</h2>
            <br>
            <p class="technos-titre">Technos utilisées pour ce projet :</p>
            <ul class="technos-list">
              <li v-for="techno in currentProject.technos" :key="techno">
                <img :src="getTechImage(techno)" :alt="techno" class="techno-image" />
                <p>{{ techno }}</p>
              </li>
            </ul>
          </div>

        <div class="deux-sections">
          <div  :class="['une-section', 'objectif--'+currentProject.design]">
            <h2>Design</h2>
            <div class="content-objectif">
              <div>
                <img :src="image1" :class="['objectif--img ', 'kevinprevost--img',  'objectif-img--'+currentProject.design]" alt="Kévin Prévost">
                <img :src="image2" :class="['objectif--img ', 'jeremyluscher--img', 'objectif-img--'+currentProject.design]" alt="Jérémy Luscher">
                  <p :class="['objectif-kp', 'objectif-nom--'+currentProject.design]">Kévin <span class="bold">Prévost</span></p>
                  <p :class="['objectif-jl', 'objectif-nom--'+currentProject.design]">Jérémy <span class="bold">Luscher</span></p>
              </div>
              <p>{{ currentProject.objectifdesign }}</p>
            </div>
          </div>
          <div :class="['une-section', 'objectif--'+currentProject.code]">
            <h2>Développement</h2>
            <div class="content-objectif">
              <div>
                  <img :src="image1" :class="['objectif--img ', 'kevinprevost--img',  'objectif-img--'+currentProject.code]" alt="Kévin Prévost">
                  <img :src="image2" :class="['objectif--img ', 'jeremyluscher--img', 'objectif-img--'+currentProject.code]" alt="Jérémy Luscher">
                  <p :class="['objectif-kp', 'objectif-nom--'+currentProject.code]">Kévin <span class="bold">Prévost</span></p>
                  <p :class="['objectif-jl', 'objectif-nom--'+currentProject.code]">Jérémy <span class="bold">Luscher</span></p>
              </div>
              <p>{{ currentProject.objectifdev }}</p>
            </div>
          </div>
        </div>

        <div class="une-section une-section--violet  une-section--resultat">
          <h2>Résultat du projet {{ currentProject.nomduprojet }}</h2>
          <div class="resultat-container">
            <div class="resultat-part resultat-part--texte">
              <p class="resultat--texte">{{ currentProject.resultat }}</p>
              <a class="cta--container pointer" :href="currentProject.lienprojet" target="_blank">
                <div class="cta cta--jaune">Voir le projet en ligne</div>
              </a>
              


                <div v-if="currentProject.versionmobile != 'non'" v-for="n in nombreDePages" :key="n" class="miniatures-container mini--mobile">
                  <div v-if="nombreDePages > 1" @click="updateMainImage(n - 1)" class="mini-page" :class="['mini-page', { 'mini-projet--selected': selectedThumbnailIndex === (n - 1) }]">
                    <img 
                      :src="getThumbnailImage(n - 1)" 
                      :class="['miniature', 'miniature--projet', { 'miniature-projet--selected': selectedThumbnailIndex === (n - 1) }]" 
                      :alt="'Miniature ' + currentProject.nomduprojet + ' - ' + n" 
                      @click="updateMainImage(n - 1)" 
                    />
                    <p v-if="currentProject.nomdespages && currentProject.nomdespages[n - 1]" class="miniature-title">
                      {{ currentProject.nomdespages[n - 1] }}
                    </p>
                  </div>
                </div>

              <div class="image-mobile" v-if="currentProject.versionmobile != 'non'">
                <img :src="currentMobileImage" class="resultat-preview--mobile" :alt="'Projet ' + currentProject.nomduprojet" />
              </div>
            </div>



            <div :class="[
                'resultat-part', 
                'resultat-part--image-container', 
                currentProject.typedeprojet == 'Bannière' ? 'resultat-visuel-' + currentProject.versionmobile : ''
              ]">

              <div v-if="nombreDePages > 1" class="miniatures-container miniatures-container--top">
                <div v-for="n in nombreDePages" :key="n" class="miniature-wrapper">
                  <div @click="updateMainImage(n - 1)" class="mini-page" :class="['mini-page',{ 'mini-projet--selected': selectedThumbnailIndex === (n - 1) }]"  >
                    <img 
                      :src="getThumbnailImage(n - 1)" 
                      :class="['miniature', 'miniature--projet', { 'miniature-projet--selected': selectedThumbnailIndex === (n - 1) }]" 
                      :alt="'Miniature ' + currentProject.nomduprojet + ' - ' + n" 
                    />
                    <p v-if="currentProject.nomdespages && currentProject.nomdespages[n - 1]" class="miniature-title">
                      {{ currentProject.nomdespages[n - 1] }}
                    </p>
                  </div>
                  
                </div>
              </div>
              <div :class="['resultat-part--image',  'mobile-visuel-'+currentProject.versionmobile]">
                
                <img 
                  :src="currentMainImage" 
                  class="resultat-preview" 
                  :alt="'Projet ' + currentProject.nomduprojet" 
                />

              </div>
            </div>
          </div>
        </div>

      </article>
    </div>
  </section>
</template>



<script>
import axios from 'axios';
import image1 from '@/assets/images/bd/kek1.svg';
import image2 from '@/assets/images/bd/tookis-bd1.svg';
import image3 from '@/assets/images/button.svg';

export default {
  props: {
    selectedProjectId: {
      type: Number,
      default: null,
    }
  },
  data() {
    return {
      projects: [],
      currentProject: null,
      isProjectListVisible: true,
      isProjectDetailsVisible: false,
      currentMainImage: '',
      currentMobileImage: '',
      selectedThumbnailIndex: 0,
      image1,
      image2,
      image3
    }
  },
  watch: {
    selectedProjectId: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.selectProject(newValue);
        }
      }
    }
  },
  computed: {
    imageprojet() {
      return this.currentProject ? `/images/preview-projets/${this.currentProject.nomimageprojet}.jpg` : '';
    },
    imageprojetmobile() {
      return this.currentProject ? `/images/preview-projets/${this.currentProject.nomimageprojet}-m.jpg` : '';
    },
    nombreDePages() {
    if (!this.currentProject || !this.currentProject.nomdespages || this.currentProject.nomdespages.length === 0) {
      return 1;
    }
    const nonEmptyPages = this.currentProject.nomdespages.filter(page => page.trim() !== "");
    return nonEmptyPages.length > 0 ? nonEmptyPages.length : 1;
  }
  },
  methods: {
    async loadProjects() {
      try {
        const response = await axios.get('/data/projets.json');
        this.projects = response.data;
        if (this.selectedProjectId) {
          this.selectProject(this.selectedProjectId);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des projets:', error);
      }
    },
    selectProject(projectId) {
      const project = this.projects.find((project) => project.id === projectId);
      if (project) {
        this.currentProject = project;
        this.isProjectDetailsVisible = true;
        this.isProjectListVisible = true;
        this.currentMainImage = this.getAdditionalImage(0); // Par défaut, affiche la première image principale
        this.currentMobileImage = this.getAdditionalImageMobile(0); // Par défaut, affiche la première image mobile
        
        // Faire défiler jusqu'à #projet-actuel
        this.$nextTick(() => {
          const projectElement = document.querySelector("#projet-actuel");
          if (projectElement) {
            projectElement.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    },
    closeProjets() {
      this.currentProject = null;
      this.isProjectDetailsVisible = false;
      this.isProjectListVisible = false;
      this.$emit('close');
    },
    getTechImage(techno) {
      return `/images/technos/${techno}.png`;
    },
    getLogo() {
      if (this.currentProject) {
        return `/images/logos/${this.currentProject.logo}.png`;
      }
      return '';
    },
    getImageForProject(project) {
      return `/images/preview-projets/${project.nomimageprojet}-p.jpg`;
    },
    getAdditionalImage(index) {
      const suffix = index === 0 ? '' : index + 1;
      return `/images/preview-projets/${this.currentProject.nomimageprojet}${suffix}.jpg`;
    },
    getThumbnailImage(index) {
      const suffix = index === 0 ? '' : `${index + 1}`;
      return `/images/preview-projets/${this.currentProject.nomimageprojet}${suffix}-p.jpg`;
    },
    getAdditionalImageMobile(index) {
      const suffix = index === 0 ? '' : index + 1;
      return `/images/preview-projets/${this.currentProject.nomimageprojet}${suffix}-m.jpg`;
    },
    updateMainImage(index) {
      this.currentMainImage = this.getAdditionalImage(index);
      this.currentMobileImage = this.getAdditionalImageMobile(index);
      this.selectedThumbnailIndex = index;
    },
  },
  mounted() {
    this.loadProjects();
  }
};
</script>

  

  
  
<style scoped>
.miniatures-container {
  display: flex;
  gap: 20px;
  margin-top: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.miniature {
  width: 173px;
  height: auto;
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 5px;
  transition: transform 0.3s ease;
  cursor: url('@/assets/images/cursor-hover.svg') 3 3, auto !important;
}

.miniature:hover {
  transform: scale(1.05);
}
.miniature--projet{
  border-radius: 20px;
}

.miniature-projet--selected {
    transform: scale(1.05);
}

.mini-projet{
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
}
.mini-projet--selected {
    transform: scale(1.05);
}

    .div-projets-list{
        width:100%;
    }

    .projets-list {
      flex-wrap: wrap;
        display: flex;
        gap: 20px;
        list-style-type: none;
        padding: 0;
        width: 100%;
        border-top: solid 6px;
        padding-top: 30px;
    }
    

    .projets-list li {
        width: calc(10% - 2px);
        cursor: pointer;
        text-align: center;
        transition: transform 0.3s ease;
        background: #FDB925;
        border: 3px solid #000000;
        border-radius: 20px;
        opacity:0.7;
    }

    .projets-list li.selected {
        border: 3px solid #000000;
        background: #8B69AD;
        opacity:1;
    }


    .projets-list li.selected .titre-projet-li{
        color: white;
    }

    .projets-list li:hover {
        opacity:1;
    }

    .projets-list img {
        width: calc(100% - 20px);
        height: 150px;
        object-fit: cover;
        border-radius: 16px;
        border: 3px solid #000000;
        margin: 10px;
    }
    .titre-projet-li{
        font-size: 1.5em;
        padding: 10px;
    }

    .technos-list {
      list-style-type: none;
      padding: 0;
      display: flex;
      gap: 20px;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
    }


    

    .technos-list li {
      text-align: center;
      padding: 8px;
      background: #FFFFFF;
      border-radius: 20px;
      width: calc(12% - 56px);
      transition: 0.3s;
  }


  .techno-image {
    width: 50px; /* Ajuste la taille selon tes besoins */
    height: 50px;
    object-fit: contain;
  }


  .projets {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 0px 10px !important;
    max-width: 2000px;
    position: relative;
    width: 100%;
    max-height: 0px;
    animation: apparition 2s forwards linear;
  }
  .resultat--texte{
    margin-bottom: 20px;
  }
  .un-projet {
    width: 100%;
  }
  .resultat-container{
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }
  .resultat-part{
    width: calc(30% - 40px);
  }
  .resultat-part--image-container{
    width: calc(70% - 40px);
  }
  .resultat-part--image{
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    border-radius: 20px 0 0 20px;
    border:solid 3px #000000;
    max-height:1200px;
  }
  .resultat-preview{
    width:100%;
    height: auto;
    display: block;
    visibility: visible;
  }
.annee{
    font-size: 1.5em;
    font-weight: bold;
}
.nom-du-projet{
  font-size: 2.5rem;
}

    /* Firefox */
    .projets {
        scrollbar-width: thin;
        scrollbar-color: #FDB925 #8B69AD;
        border-radius: 20px;
    }

    .image-mobile{
        width: 80%;
        margin-top: 30px;

        overflow: hidden;
        overflow-y: scroll;
        border-radius: 20px 0 0 20px;
        border: solid 3px #000000;
        max-height: 800px;
    }
    .resultat-preview--mobile{
        width:100%;
    }

  
  .une-section {
    border-radius: 20px;
    outline: 3px solid #000000;
    transition: 0.5s;
    width: 100%;
    padding: 30px;
    margin-bottom: 30px;
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  
  .une-section--jaune {
    background-color: #FDB925;
  }
  
  .une-section--violet {
    background-color: #8B69AD;
  }
  
  .une-section--violet h2,
  .une-section--violet p {
    color: #FFFFFF;
  }

  
  .objectif--kek {
    background-color: #FDB925;
  }
  
  .objectif--tookis {
    background-color: #8B69AD;
  }
  
  .objectif--tookis  h2,
  .objectif--tookis  p {
    color: #FFFFFF;
  }


  .logotexte{
    display: flex;
    gap: 20px;
  }

  .image-logo{
    width: 70px;
    height: 70px;
  }
  .deux-sections{
      flex-wrap: nowrap;
      display: flex;
      justify-content: space-between;
      gap: 30px;
  }
  .deux-section--une{
      width: calc(50% - 10px);
  }
  .deux-section--premiere{
      width: calc(30% - 10px);
  }
  .deux-section--deuxieme{
      width: calc(70% - 10px);
  }


  .deux-section--une{
    width:100%;
    flex-wrap: wrap;
    gap: 0;
  }

  .deux-section--une-header{
    width:100%;
  }
.white-texte{
  color:white;
}

  .div-projets-list{
      padding: 20px;
      border: solid 5px black;
      background: #8b69ad;
      border-radius: 30px 0 0 30px;
      max-height: 640px;
      overflow-y: scroll;
    }
    .projets-list li{
        opacity: 1;
    }
    .projets-list{
      border-top: none;
    }

    .mini--mobile{
      display:none;
    }


    
    /* WebKit (Chrome, Safari) */
    .div-projets-list::-webkit-scrollbar {
        width: 12px;
        cursor: url('@/assets/images/cursor-hover.svg') 3 3, auto !important;
        border-radius: 20px;
        overflow: hidden;
    }
    

    .div-projets-list::-webkit-scrollbar-thumb {
        background-color: #8B69AD;
        border: 3px solid #000000; /* Bordure noire autour du thumb */
        cursor: url('@/assets/images/cursor-hover.svg') 3 3, auto !important;
        border-radius: 20px;
        overflow: hidden;
    }

    .div-projets-list::-webkit-scrollbar-track {
        background-color: #8B69AD;
        cursor: url('@/assets/images/cursor-hover.svg') 3 3, auto !important;
        margin: 5px; /* Ajoute un espacement entre le track et les bords pour améliorer l'esthétique */
        border-radius: 20px;
        overflow: hidden;
    }

    .div-projets-list::-webkit-scrollbar-thumb:hover {
        background-color: #8B69AD;
        cursor: url('@/assets/images/cursor-hover.svg') 3 3, auto !important;
        border-radius: 20px;
        overflow: hidden;
    }
.projets-container{
  border-radius: 30px;
  overflow: hidden;
}


  #projet-actuel{
    padding-top: 30px;
    border-top: solid 6px;
  }

  .ctacloseprojet{
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
  }
  .fermer-portfolio{
    width: 100%;
  }
  .ctacloseprojet:after{
    content: '';
    font-size: 1.5em;
    font-weight: 700;
    display: block;
    text-align: center;
    color: black;
  }
  
  .objectif--img{
      width:130px;
    }
    
    .content-objectif{
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .jeremyluscher--img.objectif-img--kek,
    .kevinprevost--img.objectif-img--tookis{
        display: none;
    }

    .objectif-kp.objectif-nom--tookis,
    .objectif-jl.objectif-nom--kek{
        display: none;

    }
    .titre-du-site{
      width: fit-content;
      border-bottom:solid 3px black;
    }
    .technos-titre{
      font-size: 1.6em;
      margin-bottom: 20px;
    }


    .resultat-visuel-non .mobile-visuel-non{
      overflow: hidden;
      border-radius: 20px;
    }
  @keyframes apparition {
    0% {
      max-height: 0px;
      padding: 0px 20px;
    }
    20% {
      padding: 20px;
    }
    100% {
      padding: 20px;
      max-height: 10000px;
    }
  }

  .objectif--aucun{
    display:none;
  }
    .projets-list--item{
      position: relative;
    }
    .type--site{
      background: #8b69ad;
      position: absolute;
      top: -2px;
      left: -2px;
      padding: 2px 15px;
      border-radius: 15px;
      color: white;
      border: solid 2px black;
    }
    .type--visuel{
      background: #FDB925;
      position: absolute;
      top: -2px;
      left: -2px;
      padding: 2px 15px;
      border-radius: 15px;
      color: black;
      border: solid 2px black;
    }


  @media (min-width: 1650px){
    .mini-page.mini-page{
      position: relative;
      overflow: hidden;
      transform: scale(1) !important;
      border-radius: 20px;
      border:solid 2px #cd9828;
    }
    .miniature-title{
      position: absolute; 
      bottom: 0px;
      left: 0px;
      background-color: black;
      width:100%;
      padding:10px;
    }
    .mini-projet--selected .miniature-title{
      background-color: #472a72;
    }
    .projets-list li img{
      transform: scale(1);
      transition: 0.3s;
    }
    .projets-list li:hover img{
      transform: scale(1.155);
    }
    
  }
  @media (max-width: 1650px) {
    .projets-list{
      flex-wrap: wrap;
    }
    .projets-list li{
      width: calc(33% - 10px);
    }
    .technos-list li{
      width: calc(16% - 8px);
    }
    
    .miniature{
      width: calc(33% - 33px);
      margin: 0;
    }
    .miniatures-container{
      gap: 20px;
      margin-top: 20px;
    }
    .miniatures-container--top{
      border-top: solid 3px black;
      padding-top: 30px;
      top:-30px; 
      position: relative;
    }
    .image-mobile,
    .resultat-part--image{
        width: calc(100% + 40px);
        border-radius: 20px;
        left: -20px;
        position: relative;
    }
    .miniatures-container{
      align-items: center;
    }
    .mini-page{
        display: flex;
        align-items: center;
        gap: 20px;
        border-radius: 20px;
        background: #472a72;
    }
    
    .mini-projet--selected {
        transform: scale(1.05);
        border: solid 5px;
        border-color: #FDB925;
    }
    .objectif--tookis,
    .objectif--kek{
        margin-bottom:0;
    }
    .une-section--resultat{
      margin-top: 30px;
    }
  }


  @media screen and (max-width: 900px) {
    .technos-list li{
      width: calc(50% - 10px);
    }
    .projets-list li{
      width: calc(50% - 10px);
    }
    .deux-sections{
      flex-wrap:wrap;
    }
    .resultat-part{
      width: 100%;
    }
    .resultat-part--image{
      border-radius: 20px;
    }
    .content-objectif{
      flex-wrap: wrap;
    }
    
    .logotexte{
      display: flex;
      gap: 20px;
      flex-direction: column;
    }
    .technos-list{
        max-height: 310px;
        overflow-y: scroll;
        padding: 20px;
        border-radius: 20px;
        background: #dc9a09;
        border: 3px black solid;
    }


    .mini--mobile{
      display:flex;
    }

    
    

    .div-projets-list{
      padding: 20px 10px; 
      margin-top: 20px;
    }
    .projets-list{
      gap:10px;
    }
    .projets-list li{
      width: calc(50% - 5px);
    }


  }
</style>
  