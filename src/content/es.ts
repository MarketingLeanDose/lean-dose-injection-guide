/**
 * CONTENIDO EN ESPAÑOL — Guía de Inyección en Casa de Lean Dose
 * ------------------------------------------------------------
 * Debe mantener exactamente la misma estructura que en.ts.
 * No traduzca los valores de `key`, `icon`, `visual`, `side` ni `pending`.
 * Terminología: "vial", "jeringa", "unidades", "equipo de atención",
 * "contenedor para objetos punzocortantes", "toallitas con alcohol".
 */
import type { Content } from '../i18n/types';

export const es: Content = {
  meta: {
    title: 'Su Guía de Inyección en Casa | Lean Dose',
    description:
      'Todo lo que necesita para preparar y aplicarse su inyección semanal de Lean Dose con confianza. Disponible en inglés y español.',
  },

  ui: {
    skip: 'Ir al contenido principal',
    menu: 'Menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    english: 'English',
    spanish: 'Español',
    contact: 'Contactar a Soporte',
    backToTop: 'Volver arriba',
  },

  nav: [
    { id: 'video', label: 'Video' },
    { id: 'schedule', label: 'Tabla de dosis' },
    { id: 'supplies', label: 'Materiales' },
    { id: 'steps', label: 'Pasos' },
    { id: 'aftercare', label: 'Después' },
    { id: 'safety', label: 'Seguridad' },
    { id: 'faq', label: 'Preguntas' },
  ],

  review: {
    banner:
      'Vista previa interna — el contenido marcado como "Pendiente de revisión clínica" no se muestra a los pacientes hasta su aprobación.',
    badge: 'Pendiente de revisión clínica',
    placeholderTitle: 'Estamos terminando esta sección',
    placeholderBody:
      'Nuestro equipo clínico está terminando esta parte de la guía. Mientras tanto, siga la técnica que le mostró su profesional de salud de Lean Dose y comuníquese con su equipo de atención si tiene alguna pregunta.',
    mediaPlaceholder: 'Aquí aparecerá la imagen aprobada por el equipo clínico',
  },

  hero: {
    eyebrow: 'Guía para pacientes de Lean Dose',
    title: 'Su Guía de Inyección en Casa',
    subtitle: 'Todo lo que necesita para preparar y aplicarse su inyección semanal con confianza.',
    intro:
      '¡Le damos la bienvenida a Lean Dose! Creamos esta guía para ayudarle a entender su calendario de tratamiento, preparar su medicamento y aplicarse su inyección semanal en casa de forma segura.',
    ctaVideo: 'Ver el video tutorial',
    ctaSteps: 'Ver instrucciones paso a paso',
    ctaSchedule: 'Consultar mi calendario de dosis',
    highlights: ['English y Español', 'No necesita crear una cuenta', 'Avance a su propio ritmo'],
  },

  video: {
    eyebrow: 'Tutorial con nuestra enfermera',
    title: 'Vea su tutorial de inyección paso a paso',
    description:
      'Siga a nuestra enfermera mientras le explica cómo preparar su medicamento, cómo leer su tabla de dosis y cómo aplicarse su inyección semanal.',
    note: 'Le recomendamos ver el tutorial completo antes de su primera inyección. Puede regresar a los pasos escritos cada vez que necesite repasar.',
    play: 'Reproducir el video tutorial',
    playerTitle: 'Tutorial de inyección de Lean Dose (español)',
    placeholderTitle: 'Su video tutorial estará disponible muy pronto',
    placeholderBody:
      'Aquí aparecerá el video guiado por nuestra enfermera. Mientras tanto, siga los pasos escritos y comuníquese con su equipo de atención si tiene preguntas.',
    captions: 'Subtítulos en español',
    versionLabel: 'Versión en español',
    showEnglish: 'Ver la versión en inglés',
  },

  schedule: {
    eyebrow: 'Su plan de 12 semanas',
    title: 'Cómo entender su tabla de dosis de tres meses',
    intro:
      'Su paquete de tres meses incluye una tabla de dosis personalizada de 12 semanas. Su proveedor puede recetarle semaglutida o tirzepatida, y la dosis inicial puede variar según su historial de tratamiento y las indicaciones de su proveedor.',
    months: [
      { label: 'Mes 1', weeks: 'Semanas 1–4', dose: 'Primera dosis recetada', injections: 'Cuatro inyecciones semanales' },
      { label: 'Mes 2', weeks: 'Semanas 5–8', dose: 'Segunda dosis recetada', injections: 'Cuatro inyecciones semanales' },
      { label: 'Mes 3', weeks: 'Semanas 9–12', dose: 'Tercera dosis recetada', injections: 'Cuatro inyecciones semanales' },
    ],
    monthsNote:
      'La dosis de cada mes y el número de unidades de jeringa que le corresponde aparecen en su tabla de dosis personalizada.',
    howTitle: 'Cómo leer su tabla',
    how: [
      'Identifique el medicamento que le recetaron.',
      'Identifique su dosis inicial recetada.',
      'Busque las indicaciones de dosis que corresponden a su medicamento y su dosis.',
      'Revise en qué semana de tratamiento se encuentra.',
      'Confirme el número de unidades de jeringa para esa semana.',
      'Verifique que coincida con la etiqueta de su receta.',
      'Comuníquese con su equipo de atención si algo no está claro o no coincide.',
    ],
    quote:
      'Su tabla de dosis le indica cuántas unidades debe cargar en su jeringa para cada inyección semanal. Siga siempre las indicaciones de su medicamento y de su plan de tratamiento recetado.',
    unitsTitle: 'Miligramos y unidades no son lo mismo',
    unitsBody:
      'Su dosis se receta en miligramos (mg), pero su jeringa está marcada en unidades. La cantidad de unidades depende de la concentración de su medicamento y del tipo de jeringa que recibió, así que no existe una conversión única para todos. Use siempre las unidades que aparecen en su propia tabla.',
    safetyTitle: 'Su dosis la decide su proveedor, no el calendario',
    safety: [
      'El esquema de tres meses muestra cómo está organizado su paquete. No significa que deba aumentar su dosis automáticamente cada cuatro semanas.',
      'Cualquier cambio de dosis debe estar autorizado por su proveedor.',
      'Si su proveedor pospone o cambia un aumento de dosis, su receta actualizada tiene prioridad.',
      '¿Tiene dudas sobre su dosis? Comuníquese con su equipo de atención antes de inyectarse.',
    ],
    sampleTitle: 'Ejemplo de tabla de dosis',
    sampleNote: 'Solo es un ejemplo del formato. Su tabla personal muestra su medicamento, dosis y unidades reales.',
    sampleCols: ['Semana', 'Dosis recetada', 'Unidades de jeringa'],
    samplePlaceholder: 'Vea su tabla',
    monthWord: 'Mes',
    weekWord: 'Semana',
  },

  finder: {
    eyebrow: 'Su calendario personal',
    title: 'Consulte su calendario de dosis de 12 semanas',
    intro:
      'Elija su medicamento y la dosis inicial que aparece en su receta. Le mostraremos el número de unidades y la dosis para cada semana de su paquete de tres meses.',
    medLabel: 'Elija su medicamento',
    doseLabel: 'Elija su dosis inicial',
    doseHint: 'Su dosis inicial aparece en la etiqueta de su receta y en su tabla de dosis.',
    meds: { semaglutide: 'Semaglutida', tirzepatide: 'Tirzepatida' },
    empty: 'Elija su dosis inicial para ver su calendario.',
    resultTitle: '{med}, con dosis inicial de {dose} mg',
    unitsWord: 'unidades',
    perWeek: 'cada semana',
    weeks: 'Semanas {range}',
    week: 'Semana {n}',
    monthWord: 'Mes',
    vialTag: 'Vial {n}',
    vialsTitle: 'Sus viales',
    vialLine: 'Vial {n} — etiqueta {label}',
    switchNote:
      'A partir de la semana {week}, use el Vial {n} (etiqueta {label}). Tiene una concentración diferente, por eso cambia el número de unidades; su dosis sigue siendo {dose} mg.',
    sameVialNote: 'A partir de la semana {week}, abra el Vial {n}. Tiene la misma concentración, así que cargue las unidades indicadas.',
    splitNote: 'Semana {week}: {total} unidades en total, aplicadas en {count} jeringas de {each} unidades cada una.',
    videoTitle: 'Vea su calendario de {med}, con dosis inicial de {dose} mg',
    videoSoon: 'Su video personalizado estará disponible muy pronto',
    videoSoonBody: 'Nuestra enfermera le explicará su dosis inicial y las unidades de cada uno de los siguientes meses. Mientras tanto, use el calendario de arriba y su tabla de dosis.',
    videoPlay: 'Reproducir el video de su calendario',
    verifyTitle: 'Verifique siempre',
    verify:
      'Antes de cada inyección, compare este calendario con su tabla de dosis personalizada y la etiqueta de su receta. Si su proveedor cambió o pospuso un aumento de dosis, siga su receta actualizada. Si algo no coincide, comuníquese con su equipo de atención antes de inyectarse.',
    syringeNote: 'Las unidades corresponden a la jeringa U-100 incluida con su tratamiento (100 unidades = 1 mL).',
    privacy: 'Su selección no se guarda ni se envía a ningún lugar.',
    wip: 'En proceso (guía interna)',
  },

  supplies: {
    eyebrow: 'Antes de empezar',
    title: 'Lo que necesitará',
    intro:
      'Su medicamento llega preparado y listo para usarse, empacado en un contenedor con control de temperatura que lo mantiene frío. Antes de cada inyección, cargará en su jeringa el número de unidades recetadas según sus indicaciones de dosis.',
    items: [
      { icon: 'vial', title: 'Vial de medicamento', body: 'Su medicamento recetado. Llega frío y debe guardarse en el refrigerador.' },
      { icon: 'syringe', title: 'Jeringa estéril nueva', body: 'Una jeringa y aguja nuevas incluidas con su tratamiento. Use una nueva cada vez.' },
      { icon: 'wipe', title: 'Toallitas con alcohol', body: 'Para limpiar el tapón del vial y la zona de inyección.' },
      { icon: 'fridge', title: 'Su refrigerador', body: 'Su medicamento debe guardarse en el refrigerador en todo momento.' },
      { icon: 'sharps', title: 'Botella para desechar agujas', body: 'Una botella de plástico resistente con tapa de rosca, como una botella vacía de detergente. Más abajo le explicamos cómo prepararla.' },
      { icon: 'chart', title: 'Su tabla de dosis', body: 'Su tabla personalizada con las unidades para cada semana de tratamiento.' },
    ],
    checkTitle: 'Antes de cada inyección, revise que:',
    checks: [
      'El nombre y la concentración del medicamento en la etiqueta coincidan con su receta.',
      'La fecha de caducidad o fecha límite de uso no haya pasado.',
      'El medicamento se vea como lo describen las indicaciones de su farmacia.',
      'Se haya mantenido en su refrigerador.',
    ],
    checkNote: 'Si algo se ve diferente o tiene dudas, comuníquese con su equipo de atención antes de inyectarse.',
    arrival: {
      title: 'Cuando llegue su paquete: refrigérelo de inmediato',
      items: [
        'Su vial se envía en un contenedor con control de temperatura que lo mantiene frío durante la entrega.',
        'En cuanto llegue su paquete, saque el vial y colóquelo en su refrigerador.',
        'Mantenga su medicamento en el refrigerador en todo momento. Sáquelo solo para preparar su dosis y vuelva a guardarlo de inmediato.',
        'Si su paquete llegó tibio o el vial se quedó fuera del refrigerador, comuníquese con su equipo de atención antes de usarlo.',
      ],
    },
  },

  steps: {
    eyebrow: 'Paso a paso',
    title: 'Su inyección, paso a paso',
    intro: 'Vaya un paso a la vez. Use los botones para avanzar o regresar, o vea todos los pasos juntos.',
    progress: 'Paso {n} de {total}',
    prev: 'Anterior',
    next: 'Siguiente paso',
    showAll: 'Ver todos los pasos',
    showOne: 'Un paso a la vez',
    finish: 'Continuar con los cuidados posteriores',
    stepWord: 'Paso',
    items: [
      {
        key: 'wash',
        short: 'Lavarse',
        title: 'Lávese las manos',
        paras: [
          'Antes de preparar su inyección, lávese bien las manos con agua y jabón. Séquelas con una toalla limpia y coloque sus materiales sobre una superficie limpia y seca.',
        ],
        callout: '',
      },
      {
        key: 'confirm',
        short: 'Confirmar dosis',
        title: 'Confirme su dosis recetada',
        paras: [
          'Revise la etiqueta de su medicamento y su tabla de dosis personalizada. Busque su semana de tratamiento actual y confirme el número de unidades de jeringa recetadas para esa inyección.',
        ],
        callout: 'Nunca adivine su dosis ni use la tabla de dosis de otro paciente.',
      },
      {
        key: 'vial',
        short: 'Preparar vial',
        title: 'Prepare su vial de medicamento',
        paras: [
          'Saque su vial del refrigerador cuando esté listo para preparar su dosis.',
          'Revise su vial para asegurarse de que coincida con su receta. Inspecciónelo según las indicaciones de la farmacia que lo surtió.',
          'Limpie el tapón de goma de la parte superior del vial con una toallita con alcohol y deje que se seque.',
        ],
        callout: '',
      },
      {
        key: 'draw',
        short: 'Cargar dosis',
        title: 'Cargue su medicamento en la jeringa',
        paras: [
          'Con una jeringa estéril nueva, siga las indicaciones de su farmacia para cargar del vial el número de unidades recetadas.',
          'Revise con cuidado las marcas de la jeringa para asegurarse de que la cantidad coincida con su tabla de dosis.',
          'Vuelva a guardar el vial en el refrigerador de inmediato.',
        ],
        callout: 'Si no está seguro de la cantidad correcta o nota algún problema con la jeringa, comuníquese con su equipo de atención antes de inyectarse.',
      },
      {
        key: 'site',
        short: 'Elegir zona',
        title: 'Elija la zona de inyección',
        paras: [
          'Elija una zona en su abdomen que esté al menos a dos pulgadas (unos 5 cm) del ombligo.',
          'Alterne el lado del abdomen cada semana y elija un punto diferente en cada inyección.',
          'Evite las áreas con moretones, irritación, cicatrices, enrojecimiento o sensibilidad.',
        ],
        callout: '',
      },
      {
        key: 'clean',
        short: 'Limpiar zona',
        title: 'Limpie la zona de inyección',
        paras: [
          'Use una toallita con alcohol nueva para limpiar la zona que eligió. Deje que la piel se seque por completo antes de aplicarse la inyección.',
        ],
        callout: '',
      },
      {
        key: 'inject',
        short: 'Inyectarse',
        title: 'Cómo aplicarse la inyección',
        paras: [
          'Siga estos siete pasos breves para manejar su jeringa de forma segura, aplicarse el medicamento y desechar sus materiales.',
        ],
        callout: '',
      },
    ],
    syringeLabels: {
      plunger: 'Émbolo',
      barrel: 'Cuerpo de la jeringa',
      markings: 'Marcas de unidades',
      needle: 'Aguja',
      cap: 'Capuchón de la aguja',
      vial: 'Vial de medicamento',
      stopper: 'Tapón de goma',
    },
    syringeNote:
      'Su jeringa está marcada en unidades, no en miligramos. Este diagrama es solo ilustrativo: siga siempre las marcas de la jeringa incluida con su tratamiento y la demostración de su enfermera.',
    drawDetail: {
      title: 'Técnica detallada para cargar la jeringa',
      body: 'Aquí agregaremos las instrucciones paso a paso para introducir la aguja en el vial, manejar el aire y cargar su medicamento, una vez que se confirme el procedimiento aprobado por nuestra farmacia. Mientras tanto, siga las indicaciones de su farmacia y la demostración de su enfermera.',
    },
    site: {
      yourRight: 'Su lado derecho',
      yourLeft: 'Su lado izquierdo',
      avoid: 'Manténgase a 2 pulgadas (5 cm) del ombligo',
      zone: 'Zona de inyección',
      rotationTitle: 'Ejemplo de rotación',
      rotationHint: 'Toque una semana para ver un punto de ejemplo.',
      rotation: [
        { week: 'Semana 1', side: 'right', label: 'Lado derecho' },
        { week: 'Semana 2', side: 'left', label: 'Lado izquierdo' },
        { week: 'Semana 3', side: 'right', label: 'Lado derecho, otro punto' },
        { week: 'Semana 4', side: 'left', label: 'Lado izquierdo, otro punto' },
      ],
      rotationNote:
        'Siga alternando de lado durante todo su tratamiento y elija un punto nuevo cada vez. Cambiar de lado no es suficiente por sí solo.',
      diagramAlt:
        'Vista frontal del abdomen. Las zonas de inyección sombreadas están en los lados derecho e izquierdo, y se deja libre un área de dos pulgadas alrededor del ombligo.',
    },
  },

  inject: {
    title: 'Cómo aplicarse la inyección',
    reminder:
      'Siga siempre la técnica de inyección que le mostró su profesional de salud de Lean Dose. Si tiene dudas sobre su dosis o sobre cómo aplicarse la inyección, comuníquese con su equipo de atención antes de continuar.',
    watchStep: 'Ver este paso',
    demo: { twoIn: '5 cm', sideView: 'VISTA LATERAL' },
    cards: [
      {
        num: '7.1',
        visual: 'inject-check',
        pending: false,
        title: 'Revise de nuevo su jeringa preparada',
        paras: [
          'Antes de inyectarse, asegúrese de que la cantidad de medicamento en su jeringa coincida con el número de unidades recetadas para su semana de tratamiento actual.',
          'Verifique que la jeringa y la aguja estén listas para usarse según las indicaciones de su enfermera.',
        ],
        callout: 'Si tiene dudas sobre la dosis, deténgase y comuníquese con su equipo de atención.',
      },
      {
        num: '7.2',
        visual: 'inject-hold',
        pending: false,
        title: 'Sostenga la jeringa correctamente',
        paras: [
          'Sostenga firmemente la jeringa preparada con su mano dominante, como si sostuviera un lápiz o un dardo. Retire con cuidado el capuchón de la aguja cuando esté listo para inyectarse.',
          'No toque la aguja ni deje que entre en contacto con su piel, su ropa o cualquier superficie antes de la inyección. Si la aguja se contamina, no la use.',
        ],
        callout: '',
      },
      {
        num: '7.3',
        visual: 'inject-pinch',
        pending: false,
        title: 'Pellizque suavemente la piel',
        paras: [
          'Con la mano libre, pellizque suavemente un pliegue de piel y tejido graso en su abdomen, al menos a 2 pulgadas (5 cm) del ombligo. No apriete demasiado.',
          'Esto ayuda a que el medicamento llegue al tejido graso justo debajo de la piel, cuando se recomienda según su aguja y tipo de cuerpo.',
        ],
        callout: '',
      },
      {
        num: '7.4',
        visual: 'inject-insert',
        pending: false,
        title: 'Introduzca la aguja',
        paras: [
          'Sostenga la jeringa en posición vertical, en un ángulo de 90 grados con respecto a la piel, e introduzca la aguja en el pliegue de tejido graso con un solo movimiento suave.',
          'Introduzca la aguja por completo, manteniéndola recta, sin inclinarla hacia arriba ni hacia abajo. Mantenga la jeringa firme y evite movimientos innecesarios.',
        ],
        callout: '',
      },
      {
        num: '7.5',
        visual: 'inject-administer',
        pending: false,
        title: 'Aplíquese el medicamento',
        paras: [
          'Una vez que la aguja esté bien colocada, mantenga la jeringa firme y aplíquese el medicamento recetado según las indicaciones de su enfermera.',
          'Presione el émbolo de forma suave y constante. Siga las indicaciones de su profesional de salud sobre si debe mantener o soltar el pliegue de piel.',
        ],
        callout: '',
      },
      {
        num: '7.6',
        visual: 'inject-remove',
        pending: false,
        title: 'Retire la aguja',
        paras: [
          'Después de aplicarse el medicamento, retire la aguja en línea recta, con el mismo ángulo de 90 grados que usó para introducirla.',
          'Si es necesario, presione suavemente con una bolita de algodón o un pañuelo desechable limpio. No frote ni masajee la zona de inyección.',
        ],
        callout: '',
      },
      {
        num: '7.7',
        visual: 'inject-dispose',
        pending: false,
        title: 'Deseche la jeringa usada',
        paras: [
          'Coloque de inmediato la aguja y la jeringa usadas, con la aguja hacia abajo, en su botella para desechar agujas o en un contenedor para punzocortantes. No le vuelva a poner el capuchón a la aguja usada.',
          'Nunca reutilice ni comparta agujas o jeringas. Mantenga el contenedor cerrado y fuera del alcance de niños y mascotas. Vea “Cómo desechar las agujas usadas” para saber cómo prepararlo.',
        ],
        callout: '',
      },
    ],
  },

  aftercare: {
    eyebrow: '¡Lo logró!',
    title: 'Después de su inyección',
    items: [
      'Deseche de inmediato la aguja y la jeringa usadas.',
      'No frote ni masajee la zona de inyección.',
      'Puede sentir una molestia leve y pasajera en la zona de inyección.',
      'Anote la fecha y el lugar de la inyección.',
      'Vuelva a guardar el vial en el refrigerador: debe mantenerse refrigerado en todo momento.',
      'Mantenga el medicamento fuera del alcance de niños y mascotas.',
      'Siga su calendario semanal de inyecciones recetado.',
    ],
    disposal: {
      title: 'Cómo desechar las agujas usadas',
      intro: 'La mayoría de los hogares no tiene un contenedor médico para punzocortantes, y no hay problema. Puede hacer un contenedor seguro con una botella de plástico resistente que ya tenga en casa.',
      makeTitle: 'Haga su propio contenedor para agujas',
      make: [
        'Use una botella vacía de plástico grueso con tapa de rosca, como una botella de detergente o de cloro. No use un recipiente transparente.',
        'Rotúlela claramente: “PUNZOCORTANTES — NO RECICLAR”.',
        'Justo después de cada inyección, coloque la aguja y la jeringa usadas, con la aguja hacia abajo. Nunca le vuelva a poner el capuchón a la aguja.',
        'Mantenga la tapa bien cerrada. Guarde la botella de pie y fuera del alcance de niños y mascotas.',
        'Cuando esté llena a tres cuartas partes, cierre bien la tapa y séllela con cinta resistente, como cinta gris (duct tape).',
      ],
      fullTitle: 'Cuando la botella esté llena',
      full: [
        'En Texas, puede tirar la botella sellada y rotulada en la basura normal de su casa.',
        'Nunca la ponga en el contenedor de reciclaje.',
        'Nunca tire agujas o jeringas sueltas a la basura ni al inodoro.',
      ],
      otherStates: 'Las reglas pueden ser diferentes fuera de Texas. Si vive en otro estado, consulte las indicaciones locales en safeneedledisposal.org.',
      option: '¿Prefiere un contenedor oficial? En la mayoría de las farmacias venden contenedores para punzocortantes aprobados por la FDA, y se usan de la misma manera.',
      sourceNote: 'Basado en las indicaciones de la FDA de EE. UU. y de la Comisión de Calidad Ambiental de Texas (TCEQ).',
    },
    tracker: {
      title: 'Registro semanal de inyecciones',
      intro:
        'Marque cada inyección semanal y anote la fecha y el lado que usó. Este registro se guarda solo en el navegador de su dispositivo; no se envía a Lean Dose ni a nadie más.',
      cols: ['Semana', 'Hecho', 'Fecha', 'Lado'],
      sides: { none: '—', right: 'Derecho', left: 'Izquierdo' },
      progress: '{n} de 12 inyecciones registradas',
      clear: 'Borrar registro',
      clearConfirm: '¿Borrar todos los registros? Esta acción no se puede deshacer.',
      yes: 'Sí, borrar',
      no: 'Cancelar',
      lastSide: 'Último registro: lado {side}. Esta semana pruebe el lado {other}.',
      doneLabel: 'Marcar la semana {n} como hecha',
      dateLabel: 'Fecha de la semana {n}',
      sideLabel: 'Lado de inyección de la semana {n}',
      storageOff: 'Su navegador no está guardando los registros, así que se borrarán al cerrar esta página.',
    },
  },

  safety: {
    eyebrow: 'Su seguridad',
    title: 'Información importante de seguridad',
    intro: 'Algunos hábitos sencillos ayudan a que cada inyección sea segura.',
    items: [
      'Verifique su medicamento y su dosis antes de cada inyección.',
      'Use materiales estériles y de un solo uso cada vez.',
      'Nunca comparta su medicamento ni sus materiales de inyección.',
      'Mantenga su medicamento en el refrigerador en todo momento.',
      'Siga la etiqueta de su receta y las indicaciones de su farmacia.',
      'Nunca aumente ni cambie su dosis sin la autorización de su proveedor.',
      'Comuníquese con su equipo de atención si el vial, la jeringa o las indicaciones de dosis parecen incorrectos.',
      'Comuníquese con su equipo de atención si olvida una dosis o tiene algún problema con una inyección.',
    ],
    emergencyTitle: 'Cuándo buscar ayuda de emergencia',
    emergencyBody:
      'Llame al 911 o busque atención médica de emergencia de inmediato si tiene señales de una reacción alérgica grave, como dificultad para respirar o hinchazón de la cara, los labios, la lengua o la garganta.',
    moreNote:
      'Su proveedor y su farmacia le darán información sobre los posibles efectos secundarios de su medicamento.',
  },

  faq: {
    eyebrow: '¿Tiene preguntas?',
    title: 'Preguntas frecuentes',
    fallback: 'Su equipo de atención de Lean Dose le dará indicaciones para su medicamento y su plan. Comuníquese con nosotros para resolver esta pregunta.',
    items: [
      {
        q: '¿Con qué frecuencia debo aplicarme la inyección?',
        a: 'Una vez por semana, según el calendario de su tabla de dosis personalizada. A muchos pacientes les ayuda elegir el mismo día cada semana. Siga siempre la etiqueta de su receta y las indicaciones de su proveedor.',
        pending: false,
      },
      {
        q: '¿Cómo sé cuántas unidades debo cargar?',
        a: 'Su tabla de dosis personalizada indica el número de unidades de jeringa para cada semana de tratamiento. Busque su semana actual, confirme las unidades y compárelas con la etiqueta de su receta. Si la tabla y la etiqueta no coinciden, comuníquese con su equipo de atención antes de inyectarse.',
        pending: false,
      },
      {
        q: '¿Qué pasa si empiezo con una dosis diferente?',
        a: 'Es normal. La dosis inicial varía según su historial de tratamiento y las indicaciones de su proveedor. Su tabla está hecha para su plan: siga siempre su propia tabla, nunca la de otra persona.',
        pending: false,
      },
      {
        q: '¿Mi dosis cambia cada mes?',
        a: 'Su paquete está organizado en tres etapas mensuales, pero su dosis solo cambia cuando su proveedor lo autoriza. Si su proveedor pospone o cambia un aumento de dosis, su receta actualizada tiene prioridad. Si tiene dudas, comuníquese con su equipo de atención antes de inyectarse.',
        pending: false,
      },
      {
        q: '¿En qué parte del abdomen debo inyectarme?',
        a: 'Elija un punto en su abdomen que esté al menos a dos pulgadas (unos 5 cm) del ombligo. Evite las áreas con moretones, irritación, cicatrices, enrojecimiento o sensibilidad.',
        pending: false,
      },
      {
        q: '¿Debo cambiar de lado cada semana?',
        a: 'Sí. Alterne entre el lado derecho y el izquierdo del abdomen cada semana, y elija un punto diferente cada vez, no solo un lado diferente.',
        pending: false,
      },
      {
        q: '¿Qué hago si veo una gotita de sangre?',
        a: 'Puede salir una pequeña gota de sangre en la zona de inyección. Presione suavemente con una bolita de algodón o un pañuelo desechable limpio, sin frotar ni masajear. Si el sangrado no se detiene o nota algo inusual, comuníquese con su equipo de atención.',
        pending: true,
      },
      {
        q: '¿Qué hago si veo una burbuja de aire en la jeringa?',
        a: 'Su enfermera le mostrará cómo revisar su jeringa como parte de la técnica de preparación aprobada. Si ve una burbuja de aire y no sabe qué hacer, no se inyecte: comuníquese con su equipo de atención para recibir indicaciones.',
        pending: true,
      },
      {
        q: '¿Qué hago si olvido una inyección?',
        a: 'Comuníquese con su equipo de atención de Lean Dose antes de su siguiente inyección para recibir indicaciones. No se aplique una dosis extra ni doble para compensar una inyección olvidada, a menos que su proveedor se lo indique.',
        pending: true,
      },
      {
        q: '¿Qué hago si no estoy seguro de haberme aplicado la dosis completa?',
        a: 'No se aplique otra dosis. Comuníquese con su equipo de atención, cuénteles lo que pasó y ellos le dirán qué hacer.',
        pending: true,
      },
      {
        q: '¿Cómo debo guardar mi medicamento?',
        a: 'En el refrigerador, en todo momento. Su vial se envía frío en un contenedor con control de temperatura; páselo a su refrigerador en cuanto llegue su paquete. Sáquelo solo para preparar su dosis, vuelva a guardarlo de inmediato y manténgalo fuera del alcance de niños y mascotas. Si el vial se quedó fuera del refrigerador o llegó tibio, comuníquese con su equipo de atención antes de usarlo.',
        pending: false,
      },
      {
        q: '¿Qué hago con las agujas usadas?',
        a: 'No necesita un contenedor médico especial. Coloque las agujas y jeringas usadas, con la aguja hacia abajo, en una botella vacía de plástico grueso con tapa de rosca (como una de detergente) rotulada “PUNZOCORTANTES — NO RECICLAR”. Cuando esté llena a tres cuartas partes, selle la tapa con cinta. En Texas, la botella sellada puede ir a la basura normal, nunca al reciclaje. Nunca les vuelva a poner el capuchón, ni las reutilice o comparta. Vea “Cómo desechar las agujas usadas” para todos los pasos.',
        pending: false,
      },
      {
        q: '¿A quién llamo si necesito ayuda?',
        a: 'Su equipo de atención de Lean Dose está aquí para usted. Vea la sección “¿Necesita ayuda?” más abajo para saber cómo comunicarse con nosotros.',
        pending: false,
      },
    ],
  },

  support: {
    title: '¿Necesita ayuda? ¡Estamos aquí para usted!',
    description:
      'Ya sea que tenga preguntas sobre su tabla de dosis, la preparación de su medicamento o cómo aplicarse la inyección, nuestro equipo de atención de Lean Dose está para ayudarle.',
    phone: 'Llámenos',
    email: 'Escríbanos un correo',
    message: 'Envíenos un mensaje',
    notSet: 'Datos de contacto disponibles muy pronto',
    website: 'Visite leandose.co',
  },

  footer: {
    tagline: 'Control de peso médico guiado por proveedores.',
    disclaimer:
      'Esta guía tiene fines educativos y no sustituye las indicaciones personalizadas de su proveedor de salud ni de la farmacia que surte su medicamento. Siga siempre la etiqueta de su receta y su plan de tratamiento personalizado.',
    rights: '© {year} Lean Dose. Todos los derechos reservados.',
    website: 'leandose.co',
  },
};
