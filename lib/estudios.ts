// Fuente única del catálogo: la usan la portada, /estudios, las fichas y la solicitud imprimible.

export type CategoryId = "venosos" | "arteriales" | "hemodinamicos" | "otros" | "cardiovasculares";

export type Category = {
  id: CategoryId;
  name: string;
  color: "blue" | "red";
  intro: string;
};

export type Cpt = { code: string; name: string };

export type Study = {
  slug: string;
  name: string;
  category: CategoryId;
  description: string;
  cpt: Cpt[];
};

export const categories: Category[] = [
  {
    id: "venosos",
    name: "Estudios venosos",
    color: "blue",
    intro: "Evaluación del retorno venoso: trombosis, insuficiencia valvular y planificación de tratamientos.",
  },
  {
    id: "arteriales",
    name: "Estudios arteriales",
    color: "red",
    intro: "Detección de estrechamientos, obstrucciones y dilataciones en las arterias principales.",
  },
  {
    id: "hemodinamicos",
    name: "Estudios hemodinámicos",
    color: "blue",
    intro: "Mediciones de presión y volumen de pulso para valorar la circulación hacia las extremidades.",
  },
  {
    id: "otros",
    name: "Otros estudios",
    color: "blue",
    intro: "Evaluaciones dirigidas a lesiones, accesos de hemodiálisis, circulación pélvica, obstétrica y oftálmica.",
  },
  {
    id: "cardiovasculares",
    name: "Estudios cardiovasculares",
    color: "red",
    intro: "Evaluación del ritmo, la estructura y la función del corazón, y monitoreo de la presión arterial.",
  },
];

const VENOSO_EXT: Cpt[] = [
  { code: "93970", name: "Dúplex venoso de extremidades, bilateral completo." },
  { code: "93971", name: "Dúplex venoso de extremidades, unilateral o limitado." },
];

const AORTA_CAVA_ILIACOS: Cpt[] = [
  { code: "93978", name: "Dúplex de aorta, vena cava inferior o vasos ilíacos, completo." },
  { code: "93979", name: "Dúplex de aorta, vena cava inferior o vasos ilíacos, unilateral o limitado." },
];


export const studies: Study[] = [
  // Venosos
  {
    slug: "doppler-venoso-trombosis-miembros-inferiores",
    name: "Doppler venoso por trombosis de miembros inferiores",
    category: "venosos",
    description:
      "Evalúa las venas de las piernas para identificar coágulos y obstrucciones que dificultan el retorno de la sangre.",
    cpt: VENOSO_EXT,
  },
  {
    slug: "doppler-venoso-insuficiencia-miembros-inferiores",
    name: "Doppler venoso por insuficiencia de miembros inferiores",
    category: "venosos",
    description:
      "Examina el funcionamiento de las válvulas venosas y detecta reflujo asociado con varices, hinchazón y cambios en la piel.",
    cpt: VENOSO_EXT,
  },
  {
    slug: "doppler-venoso-miembros-superiores",
    name: "Doppler venoso de miembros superiores",
    category: "venosos",
    description: "Estudia las venas de los brazos para identificar trombosis y otras alteraciones del retorno venoso.",
    cpt: VENOSO_EXT,
  },
  {
    slug: "doppler-venoso-abdominopelvico",
    name: "Doppler venoso abdominopélvico (vena cava inferior e ilíacas)",
    category: "venosos",
    description:
      "Evalúa la vena cava inferior y las venas ilíacas para investigar obstrucciones y alteraciones del flujo venoso en el abdomen y la pelvis.",
    cpt: AORTA_CAVA_ILIACOS,
  },
  {
    slug: "mapeo-venoso-preoperatorio",
    name: "Mapeo venoso preoperatorio",
    category: "venosos",
    description:
      "Identifica el recorrido, diámetro y características de las venas para planificar el tratamiento de las varices.",
    cpt: VENOSO_EXT,
  },

  // Arteriales
  {
    slug: "doppler-arterial-miembros-inferiores",
    name: "Doppler arterial de miembros inferiores",
    category: "arteriales",
    description:
      "Examina las arterias de piernas y pies para identificar estrechamientos u obstrucciones que pueden reducir la circulación.",
    cpt: [
      { code: "93925", name: "Dúplex arterial de miembros inferiores, bilateral completo." },
      { code: "93926", name: "Dúplex arterial de miembros inferiores, unilateral o limitado." },
    ],
  },
  {
    slug: "doppler-arterial-miembros-superiores",
    name: "Doppler arterial de miembros superiores",
    category: "arteriales",
    description:
      "Evalúa las arterias de brazos y manos para detectar estrechamientos, obstrucciones y alteraciones del flujo sanguíneo.",
    cpt: [
      { code: "93930", name: "Dúplex arterial de miembros superiores, bilateral completo." },
      { code: "93931", name: "Dúplex arterial de miembros superiores, unilateral o limitado." },
    ],
  },
  {
    slug: "doppler-carotidas-vertebrales",
    name: "Doppler de arterias carótidas y vertebrales",
    category: "arteriales",
    description:
      "Examina las arterias del cuello que llevan sangre al cerebro para identificar placas, estrechamientos y alteraciones del flujo.",
    cpt: [
      { code: "93880", name: "Dúplex de arterias extracraneales, bilateral completo." },
      { code: "93882", name: "Dúplex de arterias extracraneales, unilateral o limitado." },
    ],
  },
  {
    slug: "doppler-arterias-renales",
    name: "Doppler de arterias renales",
    category: "arteriales",
    description:
      "Estudia la circulación sanguínea de los riñones y ayuda a investigar estrechamientos de las arterias renales.",
    cpt: [
      {
        code: "93975",
        name: "Dúplex de circulación arterial y venosa de órganos abdominales, pélvicos o retroperitoneales, completo.",
      },
      {
        code: "93976",
        name: "Dúplex de circulación arterial y venosa de órganos abdominales, pélvicos o retroperitoneales, limitado.",
      },
    ],
  },
  {
    slug: "doppler-aorta-abdominal-iliacas",
    name: "Doppler de aorta abdominal y arterias ilíacas",
    category: "arteriales",
    description:
      "Evalúa el diámetro y el flujo de estas arterias para identificar dilataciones, estrechamientos u obstrucciones.",
    cpt: AORTA_CAVA_ILIACOS,
  },

  // Hemodinámicos
  {
    slug: "indice-tobillo-brazo-dedo-brazo",
    name: "Índice tobillo-brazo (ITB) y/o índice dedo-brazo (IDB) con equipo automatizado",
    category: "hemodinamicos",
    description:
      "Compara las presiones de los tobillos y/o de los dedos de los pies con las de los brazos mediante equipo automatizado, para valorar la circulación arterial de las extremidades inferiores. El ITB y el IDB se realizan según la solicitud y la evaluación clínica.",
    cpt: [
      { code: "93922*", name: "Estudio fisiológico arterial no invasivo de extremidades, bilateral limitado, de 1–2 niveles." },
    ],
  },
  {
    slug: "pletismografia-arterial-pvr",
    name: "Pletismografía arterial con presiones segmentarias (PVR)",
    category: "hemodinamicos",
    description:
      "Registra ondas de volumen de pulso y presiones en distintos niveles de las extremidades para valorar la circulación y orientar la localización de obstrucciones.",
    cpt: [
      {
        code: "93923",
        name: "Estudio fisiológico arterial no invasivo de extremidades, bilateral completo, de 3 o más niveles o con maniobras funcionales provocativas.",
      },
    ],
  },

  // Otros especializados
  {
    slug: "evaluacion-pseudoaneurisma",
    name: "Evaluación de pseudoaneurisma",
    category: "otros",
    description:
      "Examina una colección de sangre comunicada con una arteria y valora su tamaño, conexión y características de flujo.",
    cpt: [
      { code: "93926", name: "Dúplex arterial de miembros inferiores, unilateral o limitado." },
      { code: "93931", name: "Dúplex arterial de miembros superiores, unilateral o limitado." },
    ],
  },
  {
    slug: "evaluacion-masa-lesion-vascular",
    name: "Evaluación de masa / lesión vascular",
    category: "otros",
    description:
      "Estudia una masa o lesión para determinar su relación con los vasos sanguíneos y evaluar el flujo en su interior.",
    cpt: [
      { code: "93926", name: "Dúplex arterial limitado de miembros inferiores." },
      { code: "93931", name: "Dúplex arterial limitado de miembros superiores." },
      { code: "93971", name: "Dúplex venoso de extremidades, unilateral o limitado." },
      { code: "93882", name: "Dúplex de arterias extracraneales, unilateral o limitado." },
      { code: "93976", name: "Dúplex vascular limitado de órganos abdominales, pélvicos o retroperitoneales." },
    ],
  },
  {
    slug: "accesos-hemodialisis",
    name: "Evaluación de accesos para hemodiálisis (fístula/injerto)",
    category: "otros",
    description:
      "Examina el flujo del acceso vascular para detectar estrechamientos, coágulos u otras alteraciones que pueden afectar su funcionamiento.",
    cpt: [
      { code: "93990", name: "Dúplex de acceso para hemodiálisis, incluyendo entrada arterial, acceso y salida venosa." },
    ],
  },
  {
    slug: "doppler-venoso-pelvico",
    name: "Doppler venoso pélvico / varices pélvicas",
    category: "otros",
    description:
      "Evalúa las venas de la pelvis para identificar dilataciones y alteraciones del flujo asociadas con trastornos venosos pélvicos.",
    cpt: [
      { code: "93975", name: "Dúplex de circulación arterial y venosa de órganos pélvicos, completo." },
      { code: "93976", name: "Dúplex de circulación arterial y venosa de órganos pélvicos, limitado." },
    ],
  },
  {
    slug: "doppler-obstetrico-fetoplacentario",
    name: "Doppler obstétrico fetoplacentario",
    category: "otros",
    description:
      "Analiza el flujo sanguíneo fetal y placentario para aportar información sobre la circulación y el bienestar del bebé.",
    cpt: [
      { code: "76820", name: "Velocimetría Doppler fetal de arteria umbilical." },
      { code: "76821", name: "Velocimetría Doppler fetal de arteria cerebral media." },
    ],
  },
  {
    slug: "doppler-arteria-oftalmica-embarazada",
    name: "Doppler de arteria oftálmica en embarazada",
    category: "otros",
    description:
      "Evalúa el flujo sanguíneo de la arteria oftálmica materna durante el embarazo como complemento de la valoración hemodinámica, según indicación obstétrica.",
    cpt: [{ code: "Por confirmar†", name: "Pendiente de validación para el estudio aislado de arteria oftálmica materna." }],
  },

  // Cardiovasculares
  {
    slug: "electrocardiograma",
    name: "Electrocardiograma (ECG)",
    category: "cardiovasculares",
    description:
      "Registra la actividad eléctrica del corazón para evaluar la frecuencia, el ritmo y la conducción eléctrica.",
    cpt: [{ code: "93000", name: "Electrocardiograma de al menos 12 derivaciones, con interpretación e informe." }],
  },
  {
    slug: "ecocardiograma-transtoracico",
    name: "Ecocardiograma transtorácico",
    category: "cardiovasculares",
    description: "Utiliza ultrasonido para evaluar las cavidades del corazón, sus válvulas y su capacidad de bombeo.",
    cpt: [{ code: "93306", name: "Ecocardiograma transtorácico completo con Doppler espectral y color." }],
  },
  {
    slug: "holter",
    name: "Holter 24 h / 48 h",
    category: "cardiovasculares",
    description:
      "Registra continuamente la actividad eléctrica del corazón durante las actividades habituales para detectar alteraciones del ritmo.",
    cpt: [
      {
        code: "93224",
        name: "Monitoreo electrocardiográfico continuo de hasta 48 horas, con registro, análisis, interpretación e informe.",
      },
    ],
  },
  {
    slug: "mapa-presion-arterial",
    name: "MAPA - monitoreo ambulatorio de presión arterial",
    category: "cardiovasculares",
    description:
      "Mide automáticamente la presión arterial durante el día y el sueño, habitualmente durante 24 horas.",
    cpt: [
      {
        code: "93784",
        name: "Monitoreo ambulatorio de presión arterial de 24 horas o más, con registro, análisis, interpretación e informe.",
      },
    ],
  },
];

export const CPT_NOTE =
  "Los nombres de los códigos están resumidos en español. La codificación definitiva depende del procedimiento realizado, su extensión y los requisitos de la aseguradora.";

export const CPT_FOOTNOTES = [
  {
    mark: "*",
    text: "93922: referencia condicionada al estudio fisiológico documentado; la medición del ITB por sí sola no basta para asignar este código. Usar equipo automatizado no determina por sí mismo el CPT.",
  },
  {
    mark: "†",
    text: "El CPT del Doppler de arteria oftálmica materna queda pendiente de validación. El 93888 consignado en la versión anterior describe un Doppler transcraneal limitado y no se presenta aquí como equivalencia confirmada para este estudio aislado.",
  },
];

export const CPT_REFERENCE = {
  label: "CMS, Non-Invasive Vascular Studies (L34045)",
  url: "https://www.cms.gov/medicare-coverage-database/view/lcd.aspx?LCDId=34045",
};

// Notas al pie que aplican a un estudio, según las marcas de sus códigos.
export function footnotesFor(study: Study) {
  return CPT_FOOTNOTES.filter((f) => study.cpt.some((c) => c.code.includes(f.mark)));
}

export function getCategory(id: CategoryId) {
  return categories.find((c) => c.id === id)!;
}

export function studiesIn(id: CategoryId) {
  return studies.filter((s) => s.category === id);
}

export function getStudy(slug: string) {
  return studies.find((s) => s.slug === slug);
}
