<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <em>Marketing</em> hidrotermal

    b.my-3 El mundo cada vez está más globalizado y competido, por esta razón el mercadeo y la publicidad se convierten en herramientas efectivas a la hora de divulgar un servicio, en el <em>marketing</em> de los productos hidroterapéuticos son muchos los factores a tener en cuenta si de generar mejores ingresos se trata, los más importantes son:

    .row.justify-content-center.mb-3.mt-4.fnd
      .tarjeta.tarjeta--blanca.p-5
        .row.justify-content-center
          .col-lg-9.align-content-center
            .row
              .col-lg-3.align-content-center
                p.my-1 <b>Atención al cliente:</b>
              .col-lg-9
                p.my-1 es un valor añadido para lograr la satisfacción del usuario frente a la competencia, teniendo en cuenta la similitud en la oferta de servicios de los centros de salud y bienestar.
            .row
              .col-lg-3.align-content-center
                p.my-1 <b>Calidad:</b>
              .col-lg-9
                p.my-1 es importante establecer estándares de mejoramiento continuo para la optimización de los servicios, de la calidad depende el éxito y rentabilidad del negocio teniendo como premisa la satisfacción del cliente.
            .row
              .col-lg-3.align-content-center
                p.my-1 <b>Precio:</b>
              .col-lg-9
                p.my-1 es importante establecer estándares de mejoramiento continuo para la optimización de los servicios, de la calidad depende el éxito y rentabilidad del negocio teniendo como premisa la satisfacción del cliente.
            .row
              .col-lg-3.align-content-center
                p.my-1 <b>Innovación:</b>
              .col-lg-9
                p.my-1 cómo se describe antes, la competencia es cada vez mayor, por lo tanto, los servicios ofrecidos deben contar con un sello de innovación que genere diferencia en este mercado.
            .row
              .col-lg-3.align-content-center
                p.my-1 <b>Crecimiento y desarrollo sostenible:</b>
              .col-lg-9
                p.my-1 respetar los recursos naturales como parte de la responsabilidad social, debe ser premisa de todos los actores involucrados en el uso de las diferentes fuentes de agua, ya sea natural, mineromedicinal o de mar.
            .row
              .col-lg-3.align-content-center
                p.my-1 <b>Adelantos tecnológicos:</b>
              .col-lg-9
                p.my-1 como herramienta que favorece la competitividad y la productividad empresarial, es importante renovar y actualizar las técnicas ofertadas de acuerdo al crecimiento constante del sector.

          .col-lg-2.col-md-4.align-content-center
            img.my-3(src="@/assets/curso/temas/tema4/img1.png")
    
    .row.justify-content-center.my-3  
      .col-lg-5.col-md-8.align-content-center.order-lg-1.order-md-2
        img.my-3(src='@/assets/curso/temas/tema4/img2.png', alt='Imagen decorativa')
      .col-lg-7.align-content-center.order-lg-2.order-md-1
        p.my-3 El <em>marketing</em> hidrotermal está evolucionando gracias a las innovaciones tecnológicas y la creciente demanda de productos orientados al bienestar. Entre las principales novedades, destaca el uso de la Inteligencia Artificial (IA) para personalizar campañas publicitarias y ofrecer experiencias inmersivas mediante la Realidad Aumentada (AR) y la Realidad Virtual (VR). 
        p.my-3 La tendencia actual se centra en un <em>marketing</em> más personalizado, basado en datos y dirigido a consumidores interesados en la salud. Además, el <em>marketing</em> de voz y la automatización de procesos contribuyen a optimizar la promoción de estos productos, ampliando su alcance a nivel global.

    


</template>

<script>
export default {
  name: 'Tema4',
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
