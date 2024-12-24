<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Turismo de bienestar

    h5.blue_icon.my-3(data-aos="fade-left") Concepto y características

    p.my-3 Turismo de bienestar se define como “viajes con el objetivo primordial de realizar actividades encaminadas al cuidado, a sentirse bien recibiendo tratamientos alternativos y a descansar”. Tourism & Leisure (2019).

    .row.justify-content-center.my-3  
      .col-lg-5.col-md-8.align-content-center
        img.my-3(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
      .col-lg-7.align-content-center
        p El turismo de bienestar se caracteriza por ser proactivo, es decir, que el individuo involucrado debe tener interés por mejorar su calidad y estilo de vida, participando activamente. Las personas que acuden al turismo de bienestar son usualmente sanas, pero buscan mejorar sus condiciones de vida y mantenerse así por muchos más años, como es el caso de los usuarios que acuden a las técnicas de hidroterapia implícitas en los diferentes centros de salud y <em>Wellness</em>. 
    
    p.my-3 Como ya se ha descrito antes, el agua es sinónimo de salud y bienestar, sus diversas técnicas cumplen con las expectativas de este tipo de turistas, solo es necesario saberlas enfocar y tener claridad frente a los efectos fisiológicos que cada una de estas aporta al organismo humano. 
    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
