<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se ofrece una visión general sobre técnicas de hidroterapia y turismo de bienestar. Se comienza destacando la importancia de la hidroterapia, que abarca diversas técnicas, como la balneoterapia y la talasoterapia, clasificadas según el tipo de agua utilizada y sus aplicaciones terapéuticas. También, estos tratamientos se llevan a cabo en centros de salud y bienestar, donde se busca promover la relajación y mejorar la salud. Además, en el contexto del turismo de bienestar, dichos centros atraen a visitantes que buscan experiencias revitalizantes. Por último, se aborda el <em>marketing</em> hidrotermal, fundamental para destacar las ofertas de estos espacios, enfocándose en resaltar sus beneficios únicos y atraer a un público interesado en el autocuidado.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Muestra la síntesis del componente formativo técnicas de hidroterapia y turismo de bienestar, teniendo en cuenta la hidroterapia y su clasificación, centro de salud y bienestar, turismo de bienestar y marketing hidrotermal.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
