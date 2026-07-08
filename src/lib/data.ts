export const CONTACT = {
  phone: "+52 81 1164 9200",
  phoneHref: "tel:+528111649200",
  whatsapp: "+52 81 2923 5319",
  whatsappHref: "https://wa.me/528129235319",
  whatsappDigits: "528129235319",
  email: "contacto@lcaarquitectos.mx",
  emailHref: "mailto:contacto@lcaarquitectos.mx",
  address: "Torre Legacy, San Pedro Garza García, N.L.",
  addressShort: "San Pedro Garza García, N.L.",
} as const;

export const STATS = [
  { value: "+20", label: "Años de experiencia" },
  { value: "+120", label: "Proyectos entregados" },
  { value: "100%", label: "Diseño a la medida" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "arquitectura-residencial",
    title: "Arquitectura Residencial",
    short: "Casas y residencias diseñadas alrededor de quienes las habitan.",
    description:
      "Diseñamos residencias contemporáneas donde la luz, la proporción y los materiales crean espacios atemporales. Cada proyecto nace de un estudio profundo del terreno, el clima y la forma de vivir de cada familia.",
    points: [
      "Casas y residencias unifamiliares",
      "Remodelaciones y ampliaciones",
      "Estudio de asoleamiento y ventilación",
      "Selección de materiales y acabados",
    ],
  },
  {
    slug: "arquitectura-comercial",
    title: "Arquitectura Comercial",
    short: "Espacios comerciales y corporativos que comunican una marca.",
    description:
      "Proyectamos oficinas, locales y desarrollos comerciales que equilibran funcionalidad, identidad y experiencia. Diseño estratégico que potencia el valor de cada metro cuadrado.",
    points: [
      "Oficinas y espacios corporativos",
      "Locales y desarrollos comerciales",
      "Diseño de experiencia y flujo",
      "Optimización de área rentable",
    ],
  },
  {
    slug: "interiorismo",
    title: "Interiorismo",
    short: "Interiores cálidos, sobrios y profundamente habitables.",
    description:
      "Curamos cada interior con una paleta de materiales nobles, mobiliario a medida e iluminación precisa. Ambientes que envejecen con elegancia y se sienten propios desde el primer día.",
    points: [
      "Diseño integral de interiores",
      "Mobiliario a la medida",
      "Diseño de iluminación",
      "Curaduría de materiales y arte",
    ],
  },
  {
    slug: "construccion-gerencia",
    title: "Construcción y Gerencia de Obra",
    short: "Del render a la realidad, con control total del proceso.",
    description:
      "Acompañamos cada proyecto hasta su entrega con supervisión rigurosa, control de calidad y administración transparente de tiempos y costos. Un solo responsable, del primer trazo a la última luminaria.",
    points: [
      "Presupuesto y programación de obra",
      "Supervisión y control de calidad",
      "Administración de costos",
      "Entrega llave en mano",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  category: string;
  tone: string; // gradient tone key for the placeholder
};

export const PROJECTS: Project[] = [
  {
    slug: "casa-sierra",
    title: "Casa Sierra",
    location: "San Pedro Garza García",
    year: "2024",
    category: "Residencial",
    tone: "a",
  },
  {
    slug: "residencia-valle",
    title: "Residencia Valle",
    location: "Valle Oriente, Monterrey",
    year: "2023",
    category: "Residencial",
    tone: "b",
  },
  {
    slug: "pabellon-legacy",
    title: "Pabellón Legacy",
    location: "San Pedro Garza García",
    year: "2023",
    category: "Comercial",
    tone: "c",
  },
  {
    slug: "casa-carolco",
    title: "Casa Carolco",
    location: "Carretera Nacional, Monterrey",
    year: "2022",
    category: "Residencial",
    tone: "d",
  },
  {
    slug: "estudio-obispado",
    title: "Estudio Obispado",
    location: "Obispado, Monterrey",
    year: "2022",
    category: "Interiorismo",
    tone: "e",
  },
  {
    slug: "casa-cumbres",
    title: "Casa Cumbres",
    location: "Cumbres, Monterrey",
    year: "2021",
    category: "Residencial",
    tone: "f",
  },
];

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
] as const;
