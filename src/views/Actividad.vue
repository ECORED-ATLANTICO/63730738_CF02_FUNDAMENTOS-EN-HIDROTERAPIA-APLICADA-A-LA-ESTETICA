<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> lea cada enunciado referente a los temas desarrollados en el componente formativo y elija una opción según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es un beneficio de la hidroterapia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora la circulación sanguínea.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Aumenta la masa muscular.', esCorrecta: false },
            { id: 'c', texto: 'Reduce la flexibilidad.', esCorrecta: false },
            { id: 'd', texto: 'Aumenta el estrés.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es el objetivo del turismo de bienestar?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promover el turismo de aventura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ofrecer tratamientos de salud en entornos relajantes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar la producción de bienes.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Reducir el uso de agua.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué se considera un centro de salud y bienestar?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un <em>spa</em> o balneario.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Un gimnasio.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Una tienda de productos cosméticos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Un restaurante.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cómo se clasifica la hidroterapia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Por el tipo de agua utilizada.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Todas las anteriores.', esCorrecta: true },
            { id: 'c', texto: 'Por su temperatura.', esCorrecta: false },
            { id: 'd', texto: 'Por su uso terapéutico.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es una estrategia de <em>marketing</em> hidrotermal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ofrecer descuentos en productos de limpieza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar la producción de agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Promocionar paquetes de bienestar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir el uso de recursos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué tipo de terapia se puede realizar en un <em>spa</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Todas las anteriores.', esCorrecta: true },
            { id: 'b', texto: 'Masoterapia.', esCorrecta: false },
            { id: 'c', texto: 'Hidroterapia.', esCorrecta: false },
            { id: 'd', texto: 'Aromaterapia.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es un componente esencial del <em>marketing</em> en turismo de bienestar?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear una experiencia única.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Aumentar precios.', esCorrecta: false },
            { id: 'c', texto: 'Limitar servicios.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Promocionar productos de belleza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la clasificación del agua utilizada en hidroterapia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agua fría, templada y caliente.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Agua dulce y salada.', esCorrecta: false },
            { id: 'c', texto: 'Agua mineral y potable.', esCorrecta: false },
            { id: 'd', texto: 'Agua tratada y no tratada.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es un ejemplo de un centro de salud y bienestar?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Una piscina pública.', esCorrecta: false },
            { id: 'b', texto: 'Un supermercado.', esCorrecta: false },
            { id: 'c', texto: 'Un balneario.', esCorrecta: true },
            { id: 'd', texto: 'Un cine.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué estrategia se utiliza para atraer turistas al turismo de bienestar?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promociones de paquetes de salud.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Descuentos en alimentos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Publicidad en redes sociales para productos de consumo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitación de actividades recreativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué tipo de actividades suelen incluir los destinos de bienestar?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Surf</em> y deportes extremos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Paseos en bicicleta por la ciudad.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Yoga y meditación.', esCorrecta: true },
            { id: 'd', texto: 'Excursiones nocturnas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una de las características del turismo de bienestar en Colombia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fomento de viajes en crucero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exclusivamente turismo cultural.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desarrollo de <em>spas</em> y centros de hidroterapia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Enfoque en deportes extremos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué se busca principalmente en un destino de turismo de bienestar?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aventura y adrenalina.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Concurrencia y vida nocturna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conexión con la naturaleza y relajación.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Compras y entretenimiento.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué importancia tiene la satisfacción del cliente en el <em>marketing</em> hidrotermal?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es clave para fidelizar clientes.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'No es relevante.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Solo es importante en <em>resorts</em> de lujo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se ignora en centros económicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el público objetivo principal del <em>marketing</em> hidrotermal?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Jóvenes aventureros.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Personas en busca de relajación y salud.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Solo deportistas extremos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Ejecutivos en viajes de negocios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué terapia de agua se utiliza para relajar músculos profundos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Sauna seca.', esCorrecta: false },
            { id: 'b', texto: 'Hidromasaje.', esCorrecta: true },
            { id: 'c', texto: 'Compresas frías.', esCorrecta: false },
            { id: 'd', texto: 'Duchas regulares.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué técnica de hidroterapia utiliza agua caliente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Duchas frías.', esCorrecta: false },
            { id: 'b', texto: 'Baños de contraste.', esCorrecta: false },
            { id: 'c', texto: 'Jacuzzi.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Ejercicio en piscinas frías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuál es una técnica común de hidroterapia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Natación en piscina.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Baño turco.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Terapia de sonido.', esCorrecta: false },
            { id: 'd', texto: 'Yoga acuático.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué elementos debería incluir una campaña exitosa de <em>marketing</em> hidrotermal?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ofrecer descuentos permanentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promocionar experiencias únicas y bienestar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo enfocarse en el mercado juvenil.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desalentar la personalización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cómo se clasifica la hidroterapia según la temperatura del agua?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Estándar y no estándar.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Hidroterapia fría, tibia y caliente.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Superficial y profunda.', esCorrecta: false },
            { id: 'd', texto: 'Por tipo de instalaciones.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
