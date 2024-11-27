export default {
  global: {
    componenteFormativo:
      'Técnicas de hidroterapia aplicadas en el turismo de bienestar.',
    descripcionCurso:
      'Las técnicas de hidroterapia en el turismo de bienestar, como la balneoterapia, talasoterapia y crenoterapia, utilizan agua en diversas formas para promover la relajación y mejorar la salud física y emocional. Los Spas y balnearios ofrecen tratamientos especializados que alivian el estrés, mejoran la circulación y brindan beneficios estéticos, convirtiéndose en destinos populares para el bienestar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas de hidroterapia y su clasificación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Centros de salud y bienestar',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Turismo de bienestar',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<em>Marketing</em> hidrotermal',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Turismo de bienestar.',
      referencia:
        'Colombia Productiva (2020). ¿Qué es turismo de bienestar y cuál es su potencial en Colombia? [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TPrdGTJVON0',
    },
    {
      tema: '<em>Marketing</em> hidrotermales.',
      referencia: 'CEAC (2017). Técnicas hidrotermales.',
      tipo: 'Página web',
      link:
        'https://www.ceac.es/blog/que-son-y-para-que-sirven-las-tecnicas-hidrotermales',
    },
  ],
  glosario: [
    {
      termino: 'Aditivo',
      significado:
        'sustancia que se añade a otra para aumentar o mejorar cualidades.',
    },
    {
      termino: 'Bienestar',
      significado:
        'estado de equilibrio integral que incluye la salud física, mental y emocional de una persona.',
    },
    {
      termino: 'Cataplasma',
      significado:
        'sustancia blanda y pastosa que se extiende sobre alguna parte del cuerpo cataplasmas para aliviar el dolor.',
    },
    {
      termino: 'Fomento',
      significado:
        'paño o compresa empapados en agua u otro líquido que se aplica directamente sobre una parte del cuerpo para calmar un dolor.',
    },
    {
      termino: '<em>Marketing</em> hidrotermal',
      significado:
        'estrategias promocionales dirigidas a destacar los beneficios de las instalaciones y servicios de tratamientos con agua, como baños termales y terapias acuáticas.',
    },
    {
      termino: 'Ornamental',
      significado: 'sirve para adornar.',
    },
    {
      termino: 'Relajación',
      significado:
        'proceso de reducir el estrés físico o mental, a menudo a través de técnicas como la meditación, el yoga o los tratamientos en centros de bienestar.',
    },
    {
      termino: 'Sedación',
      significado: 'acción de calmar o disminuir la excitación nerviosa',
    },
    {
      termino: 'Spa',
      significado:
        'centro dedicado al bienestar donde se ofrecen servicios como masajes, hidroterapia, tratamientos faciales y corporales, entre otros.',
    },
    {
      termino: 'Terapias acuáticas',
      significado:
        'conjunto de tratamientos que emplean el agua como recurso principal para mejorar el bienestar físico y emocional, como la flotación y los baños de vapor.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco de comercio exterior de Colombia S.A. (2013). Plan de negocios para el subsector de turismo de bienestar en Colombia. ',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/producto-turistico/turismo-de-bienestar/plan-de-negocios-para-el-subsector-de-turismo-de-b/plan-de-negocios-para-el-subsector-de-turismo-de-bienestar-en-colombia.pdf.aspx ',
    },
    {
      referencia:
        'Ergofisa. (2016). De Material de Apoyo a la Asignatura Kinesiterapia. ',
      link:
        'http://www.ergofisa.com/docencia/Hidroterapia.cap%2012.%202008.pdf ',
    },
    {
      referencia:
        'InMedicina. (2012). De Técnicas de aplicación en hidroterapia: baños, chorros, duchas y envolturas.',
      link:
        'https://www.salud.mapfre.es/cuerpo-y-mente/belleza-y-salud/cuerpo-y-mentehidroterapia-todas-las-tecnicas/',
    },
    {
      referencia:
        'Mourelle, Faílde, Freire, Maraver, Carretero. (2009, p. 79-179). Técnicas hidrotermales y estética del bienestar. Madrid: Paraninfo.',
      link: '',
    },
    {
      referencia: 'SALUDTERAPIA. (2016). Hidroterapia. ',
      link: 'http://www.saludterapia.com/glosario/d/40-hidroterapia.html',
    },
    {
      referencia:
        'Villavicencio Vargas, O. (2000, p. 60-82). Manual de hidroterapia. En O. Villavicencio Vargas, Manual de hidroterapia. Lima: Panamericana de salud.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
