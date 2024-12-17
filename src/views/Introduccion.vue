<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-3(data-aos="flip-up") Las técnicas de hidroterapia se clasifican según la forma de aplicación del agua, ya sea en baños, duchas o envolturas, y se usan tanto en centros de salud como en turismo de bienestar. También estas prácticas promueven beneficios terapéuticos, estéticos y de relajación, atrayendo a turistas en busca de equilibrio físico y mental. Además, esta tendencia creciente destaca en centros de <em>spa</em> y bienestar, promoviendo el equilibrio mente-cuerpo. Bienvenido a este componente formativo:

    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/vC37sMKxz0Q?si=a09HxcYkggpJMEgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
