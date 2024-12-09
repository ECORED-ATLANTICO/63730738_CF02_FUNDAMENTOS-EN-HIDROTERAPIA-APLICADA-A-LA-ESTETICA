<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Centros de salud y bienestar

    p.my-3 Sus instalaciones se diferencian en el tipo de servicio que ofertan y sobre todo hablando de hidroterapia, si tienen en cuenta o no el agua dentro de sus tratamientos.

    h5.blue_icon.my-3(data-aos="fade-left") Ofertas basadas en el agua

    .row.justify-content-center.my-3  
      .col-lg-10
        .row.mt-3.mb-3.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Balnearios

        .row.justify-content-center.my-3  
          .col-lg-8.align-content-center
            p.my-3 Están considerados como centros en los cuales se emplean tratamientos para la salud y el bienestar basados en la utilización del agua mineromedicinal, pueden contar opcionalmente con hotel dentro de sus instalaciones.
            p.my-3 En Europa se caracterizan por disponer de agua mineromedicinal aplicada con técnicas hidrotermales (agua termal con temperatura superior 4°C de la media anual de la zona) y técnicas complementarias, debe contar con la presencia de personal de salud; médico, terapeutas, entre otros, (Mourelle,y Cols, 2009, p. 58), en Colombia no existe aún una normativa que los regule y/o clasifique, por esta razón se consideran más como centros termales.
            p.my-3 Los tratamientos más comunes en el balneario están encaminados a la cura de enfermedades que se pueden tratar con el uso de agua mineromedicinal, como las asociadas con el reumatismo, aparato digestivo y sistema tegumentario o piel.
          .col-lg-4.col-md-8.align-content-center
            img.my-3(src='@/assets/curso/temas/tema2/img1.png', alt='Imagen decorativa')
        

        .row.mt-3.mb-3.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Centros de talasoterapia

        .row.justify-content-center.my-3
          .col-lg-5.me-0.col-md-6.pe-0
            img.h-100(src="@/assets/curso/temas/tema2/img2.png", alt="alt")
          .col-lg-7.ms-0.align-content-center(style="background: #DCF5F5; padding: 2em")
            p Catalogados como centros de salud y bienestar, en los que se utilizan los elementos que componen el medio marino como las algas, lodos marinos, arena, clima marino y la radiación solar, a manera preventiva y /o curativa.

        p.my-3 Dentro de sus instalaciones los usuarios podrán disfrutar tratamientos de psamoterapia, helioterapia, hidroterapia, envolturas con algas y lodos marinos y en las playas aledañas al centro ejercicios y otros tipos de técnicas para el aprovechamiento del clima marino.

        .row.mt-3.mb-3.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Tratamientos frecuentes en los centros de talasoterapia

        p.my-3 Son similares a los descritos en los balnearios, en el área terapéutica se centran en las afecciones reumáticas, traumatológicas, neurológicas, cardiovasculares y dermatológicas en casos específicos como el acné y la psoriasis. Es necesaria la intervención de personal médico e inclusive de la nutricionista para prescribir planes dietéticos en personas que deseen tener control de peso durante su estadía ya que también pueden contar con hotel dentro de sus instalaciones. (Mourelle y Cols, 2009, p. 63)

    h5.blue_icon.my-3(data-aos="fade-left") Centros <em>spa</em> y <em>wellness</em>

    p.my-3 “Se denominan <em>spa</em> a los centros que usan el agua común con fines de mejora del estado de salud, bienestar y belleza en sus más amplios términos” (Mourelle y Cols, 2009, p. 63).

    .bloque-texto-g.p-3.p-sm-4.p-md-5(style="background: #48C1EC")
      .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img3.png')})`}"
        )

      .bloque-texto-g__texto.p-4(data-aos="zoom-in")
        p.mb-0 En materia de <em>spa</em>, existen diversas clasificaciones vinculadas a las asociaciones que se han creado en torno de estos, como es el caso de la Asociación internacional de <em>spa</em> (ISPA); la cual los clasifica en: <em>Day spa</em>, destinación <em>spa</em>, - <em>medical spa</em>, <em>Mineral spring spa, Resort/ hotel spa</em>, Club <em>spa, Cruise ship spa</em>. Por su parte la Asociación de <em>spa</em> Norteamericana (<em>The spa Association</em>), los clasifica así: <em>Beauty spa</em>, <em>Hotel spa</em>, <em>Fitness spa, Wellness</em> <em>spa</em>, <em>Medical spa</em>.

    p.my-3 Otra clasificación es la de Freire & Mourelle 2005, expertos españoles quienes los ordenan de la siguiente forma: <em>spa</em> urbano, <em>spa</em> destino, <em>spa fitness</em>, <em>spa</em> hotel, <em>spa</em> terapéutico. (Mourelle y Cols, 2009, p. 65). Se describen a continuación los más comunes:


    .row.justify-content-center.mb-3.mt-4.fnd
      .tarjeta.tarjeta--blanca.p-4(data-aos="fade-up")
        SlyderA(tipo="b")
          
          .row.px-3.pt-3
            .col-lg-7.mb-4.mb-md-0.align-content-center
              h4 <em>Day spa</em>
                p.mt-4 Por lo general, está ubicado en una zona urbana o cerca de esta, no cuenta con oferta de alojamiento, las personas acuden a tomar un “pasa día” buscando relajación y bienestar o programas de reducción y moldeo corporal. Se pueden encontrar servicios variados como; técnicas manuales, de belleza, relajantes y de bienestar acompañadas con el uso terapéutico del agua, chorros, bañeras, duchas, piscinas entre otros.
            .col-lg-5.align-content-center
              figure
                img(src='@/assets/curso/temas/tema2/img4.png', alt='Imagen decorativa')
             
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              h4 <em>Spa</em> destino
                p.mt-4 Es un centro en donde todo el ambiente está dirigido a conseguir el bienestar del usuario, se ofrece alojamiento y las técnicas son variadas ya que cuenta con áreas comunes para tratamientos colectivos y zonas para tratamientos individuales o personalizados, es importante para estos centros contar con un área de estilo de vida saludable sobre todo en el ámbito de la alimentación.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema2/img5.png', alt='Imagen decorativa')
              
          .row.px-3.pt-3
            .col-lg-5.mb-4.mb-md-0.align-content-center
              h4 <em>Spa</em> hotel
                p.mt-4 Su oferta principal es la del alojamiento, sin embargo, cuenta con instalaciones típicas de un <em>spa</em>, para ofrecerlo a sus huéspedes como complemento a los servicios hoteleros.
            .col-lg-7.align-content-center
              figure
                img(src='@/assets/curso/temas/tema2/img6.png', alt='Imagen decorativa')
          
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              h4 <em>Spa resort</em>
                p.mt-4 Está conformado por un complejo de hoteles de todas las categorías y al alcance de todas las clases sociales. Ofrecen distintos tipos de servicios complementarios, como deporte, aventura, técnicas manuales y técnicas asociadas al agua en sus diferentes formas de acuerdo a la ubicación locativa o geográfica del mismo.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema2/img7.png', alt='Imagen decorativa')
                
    h5.blue_icon.my-3(data-aos="fade-left") Ofertas no basadas en el uso del agua

    .row.justify-content-center.my-3  
      .col-lg-10
        .row.mt-3.mb-3.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Centros de belleza

        p.my-3 Se enfocan en los tratamientos de embellecimiento corporal o estética ornamental como la capilar, cuidados estético de manos y pies, entre otros.      
        
        .row.mt-3.mb-3.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Centros <em>Mind and Spirit</em>

        p.my-3 En este tipo de centros la recuperación física, mental y emocional juegan un papel importante en su oferta de servicios, las cuales complementan con terapias alternativas como yoga, pilates, acupuntura, aromaterapia.
        
        .row.mt-3.mb-3.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Oferta singular

        p.my-3 Estos centros se caracterizan por ofrecer tratamientos basados en el uso de productos locales, como el vino, café, cacao, según la región en donde se encuentren ubicados.     


        .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1. 
            span <em>Clasificación centros de salud y bienestar</em>
        .tabla-b
          table
            tbody  
              tr
                th(rowspan="6")(style="background: #B5E6F7; border: 1px solid black") Centros de salud y bienestar
                td(rowspan="3")(style="background: #48C1EC; border: 1px solid black") Ofertas basadas en el agua
                td(style="background: white; border: 1px solid black") Balnearios
                td(style="background: white; border: 1px solid black") Tratamientos basados en el uso de agua mineromedicinal.<br>Se requiere la presencia de personal médico.
              tr 
                td(style="background: white; border: 1px solid black") Centros de talasoterapia
                td(style="background: white; border: 1px solid black") Tratamientos basados en el uso de agua de mar, clima marino, algas, arena, sol.
              tr
                td(style="background: white; border: 1px solid black") Centros <em>Spa</em> y <em>Wellness.</em>
                td(style="background: white; border: 1px solid black") Tratamiento basado en el uso de agua común y terapias complementarias de relajación y bienestar.
              tr
                td(rowspan="3")(style="background: #48C1EC; border: 1px solid black") Ofertas no basadas en el uso del agua
                td(style="background: white; border: 1px solid black") Centros de belleza
                td(style="background: white; border: 1px solid black") Tratamientos de embellecimiento corporal.
              tr  
                td(style="background: white; border: 1px solid black") Centros <em>Mind and Spirit</em>
                td(style="background: white; border: 1px solid black") Tratamientos de recuperación física, mental y emocional, terapias alternativas complementarias.
              tr
                td(style="background: white; border: 1px solid black") Oferta singular
                td(style="background: white; border: 1px solid black") Tratamientos basados en el uso de productos locales, vino, café, cacao.
        p Fuente: SENA (2014).
              
</template>

<script>
export default {
  name: 'Tema2',
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
