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
    name: "Otros estudios especializados",
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

const FISIOLOGICO_LIMITADO: Cpt[] = [
  { code: "93922*", name: "Estudio fisiológico arterial no invasivo de extremidades, bilateral limitado, de 1–2 niveles." },
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
    name: "Doppler venoso abdominopélvico: vena cava inferior y venas ilíacas",
    category: "venosos",
    description:
      "Evalúa la vena cava inferior y las venas ilíacas para investigar obstrucciones y alteraciones del flujo venoso en el abdomen y la pelvis.",
    cpt: AORTA_CAVA_ILIACOS,
  },
  {
    slug: "mapeo-venoso-preoperatorio",
    name: "Mapeo venoso preoperatorio para varices",
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
    slug: "doppler-renal",
    name: "Doppler renal",
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
    slug: "indice-tobillo-brazo",
    name: "Índice tobillo-brazo (ITB)",
    category: "hemodinamicos",
    description:
      "Compara la presión arterial de los tobillos con la de los brazos para valorar la circulación arterial hacia las piernas.",
    cpt: FISIOLOGICO_LIMITADO,
  },
  {
    slug: "indice-dedo-brazo",
    name: "Índice dedo-brazo (IDB)",
    category: "hemodinamicos",
    description:
      "Compara la presión arterial de un dedo del pie con la del brazo para complementar la evaluación de la circulación hacia los pies.",
    cpt: FISIOLOGICO_LIMITADO,
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
    name: "Evaluación de masa o lesión vascular",
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
    name: "Evaluación de accesos para hemodiálisis: fístula o injerto",
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
    slug: "doppler-arteria-oftalmica",
    name: "Doppler de arteria oftálmica",
    category: "otros",
    description:
      "Evalúa la dirección y velocidad del flujo sanguíneo en la arteria que contribuye a la irrigación del ojo.",
    cpt: [{ code: "93888†", name: "Doppler transcraneal de arterias intracraneales, estudio limitado." }],
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
    name: "Holter de 24 o 48 horas",
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
    name: "Monitoreo ambulatorio de presión arterial (MAPA)",
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

export const CPT_MARKS_NOTE =
  "Los códigos marcados con * o † son de referencia y su aplicación debe confirmarse según la técnica empleada y la aseguradora.";

export function getCategory(id: CategoryId) {
  return categories.find((c) => c.id === id)!;
}

export function studiesIn(id: CategoryId) {
  return studies.filter((s) => s.category === id);
}

export function getStudy(slug: string) {
  return studies.find((s) => s.slug === slug);
}
