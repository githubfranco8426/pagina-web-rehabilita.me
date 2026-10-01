export type RehabilitationPage = {
  slug: string
  label: string
  title: string
  description: string
  intro: string
  image: string
  imageAlt: string
  situations: string[]
  goals: { title: string; text: string }[]
  faqs: { question: string; answer: string }[]
}

const coverageFaq = {
  question: "¿Atienden en Iquique y Alto Hospicio?",
  answer: "Sí, atendemos a domicilio en ambas comunas. Escríbenos para confirmar cobertura de tu sector, modalidad y disponibilidad antes de agendar.",
}
const evaluationFaq = {
  question: "¿Qué necesitamos para la primera evaluación?",
  answer: "Ten a mano las indicaciones del equipo tratante, el informe de alta y los antecedentes que tengas disponibles. Nos sirven para conocer el proceso y planificar la atención. Si tienes dudas, podemos orientarte antes de reservar.",
}

export const rehabilitationPages: RehabilitationPage[] = [
  {
    slug: "rehabilitacion-domiciliaria", label: "Rehabilitación a domicilio",
    title: "Rehabilitación especializada en tu hogar",
    description: "Rehabilitación a domicilio en Iquique y Alto Hospicio. Kinesiología y Fonoaudiología para recuperación post hospitalización, neurológica y respiratoria.",
    intro: "Cuando trasladarse cuesta o la recuperación continúa después del alta, el hogar puede ser el lugar para trabajar objetivos concretos. Evaluamos las necesidades de cada persona y coordinamos Kinesiología y Fonoaudiología cuando corresponde.",
    image: "/images/domicilio-paciente.webp", imageAlt: "Franco Tabilo durante una atención domiciliaria",
    situations: ["Volver a casa después de una hospitalización o estadía en UCI.", "Necesitar apoyo para caminar, levantarse o recuperar fuerza.", "Vivir con secuelas de un ACV u otra condición neurológica.", "Presentar dificultades respiratorias, de comunicación o deglución."],
    goals: [
      { title: "Objetivos para tu vida diaria", text: "Partimos de las actividades que importan: moverse en casa, comunicarse, alimentarse y participar en la rutina familiar." },
      { title: "Coordinación según el caso", text: "No todas las personas necesitan las mismas disciplinas. Definimos qué evaluaciones corresponden y cómo coordinar los objetivos." },
      { title: "Familia y entorno", text: "Consideramos el espacio del hogar y orientamos a quienes acompañan el proceso, según las necesidades de la persona." },
    ],
    faqs: [coverageFaq, { question: "¿Tengo que saber qué profesional necesito?", answer: "No. Cuéntanos qué dificultad quieres abordar y te orientamos sobre la evaluación pertinente. Si requiere otra disciplina, conversamos sobre la coordinación con el equipo tratante." }, evaluationFaq],
  },
  {
    slug: "rehabilitacion-post-hospitalizacion", label: "Post hospitalización y post UCI",
    title: "Rehabilitación en casa después de una hospitalización",
    description: "Evaluación de rehabilitación post hospitalización y post UCI a domicilio en Iquique y Alto Hospicio. Orientación para pacientes y familias.",
    intro: "Volver a casa puede ser el comienzo de una nueva etapa. Si aparecen dificultades para moverse, respirar, comunicarse o alimentarse, una evaluación permite definir prioridades y acompañar la recuperación junto al equipo tratante.",
    image: "/images/paciente-oxigeno.webp", imageAlt: "Atención respiratoria de una persona en recuperación",
    situations: ["Menos fuerza o dificultad para levantarse y caminar después del alta.", "Fatiga o menor tolerancia a actividades que antes eran habituales.", "Necesidades de rehabilitación respiratoria indicadas por el equipo tratante.", "Dificultades para comunicarse, comer o beber después de la hospitalización."],
    goals: [
      { title: "Fuerza y movilidad", text: "Evaluación de movimiento, transferencias y marcha para establecer objetivos progresivos según la condición de la persona." },
      { title: "Respiración y esfuerzo", text: "Evaluación kinésica respiratoria y funcional considerando las indicaciones médicas y la tolerancia al esfuerzo." },
      { title: "Comunicación y deglución", text: "Evaluación fonoaudiológica cuando hay dificultades para comunicarse o alimentarse. El plan se ajusta al resultado de la evaluación." },
    ],
    faqs: [{ question: "¿Cuándo se puede iniciar la rehabilitación después del alta?", answer: "Depende de la condición y las indicaciones del equipo tratante. Escríbenos para revisar los antecedentes y coordinar una evaluación. No existe un plazo único para todos los casos." }, { question: "¿Se puede coordinar Kinesiología y Fonoaudiología?", answer: "Sí, cuando ambas disciplinas son pertinentes para el caso, trabajamos con objetivos compartidos. La frecuencia y el plan se definen después de evaluar." }, evaluationFaq, coverageFaq],
  },
  {
    slug: "rehabilitacion-neurologica-domicilio", label: "Rehabilitación neurológica",
    title: "Rehabilitación neurológica a domicilio en Iquique y Alto Hospicio",
    description: "Orientación y evaluación de rehabilitación neurológica en casa tras un ACV u otra condición neurológica. Kinesiología y Fonoaudiología en Iquique y Alto Hospicio.",
    intro: "Después de un ACV u otra condición neurológica, cada persona puede necesitar apoyos distintos. Evaluamos movimiento, comunicación y deglución para acordar objetivos que tengan sentido en su vida cotidiana.",
    image: "/images/domicilio-caminador.webp", imageAlt: "Trabajo de movilidad con apoyo de un caminador en el hogar",
    situations: ["Dificultades para caminar o realizar transferencias después de un ACV.", "Cambios en el habla, lenguaje, voz o comunicación.", "Dificultades para comer o beber con seguridad.", "Mayor dependencia para realizar actividades en casa."],
    goals: [
      { title: "Movimiento y funcionalidad", text: "La evaluación kinésica ayuda a definir objetivos de movilidad, postura y desplazamiento según las capacidades y necesidades individuales." },
      { title: "Comunicación y alimentación", text: "Fonoaudiología evalúa habla, lenguaje, voz y deglución cuando corresponde, e involucra a la familia en el acompañamiento." },
      { title: "Autonomía y participación", text: "Consideramos las actividades cotidianas. Si se necesita Terapia Ocupacional, evaluamos la coordinación con el equipo tratante." },
    ],
    faqs: [{ question: "¿La familia participa en la rehabilitación?", answer: "Sí, con acuerdo de la persona y según el caso. Orientamos a quienes la acompañan para que comprendan los objetivos y las recomendaciones del equipo." }, { question: "¿Cuántas sesiones se necesitan?", answer: "La frecuencia y duración dependen de la evaluación, evolución y objetivos de cada persona. Se revisan durante el proceso; no se puede definir una cantidad universal antes de evaluar." }, evaluationFaq, coverageFaq],
  },
  {
    slug: "kinesiologia-respiratoria-domicilio", label: "Kinesiología respiratoria",
    title: "Kinesiología respiratoria a domicilio en Iquique y Alto Hospicio",
    description: "Kinesiología respiratoria infantil y adulta a domicilio. Evaluación y recuperación respiratoria post alta en Iquique y Alto Hospicio.",
    intro: "La evaluación respiratoria permite comprender qué necesita cada persona. Atendemos a adultos, niños y niñas, con objetivos y recomendaciones adecuados a la edad, condición y antecedentes clínicos.",
    image: "/images/domicilio-paciente.webp", imageAlt: "Atención kinésica respiratoria a domicilio",
    situations: ["Recuperación respiratoria después de una enfermedad u hospitalización.", "Necesidad de evaluar el manejo de secreciones.", "Menor tolerancia al esfuerzo asociada a una condición respiratoria.", "Necesidades respiratorias de niños y niñas que requieren evaluación profesional."],
    goals: [
      { title: "Respiratorio adulto", text: "Evaluación, manejo de secreciones y trabajo respiratorio o funcional según los hallazgos y las indicaciones del equipo tratante." },
      { title: "Respiratorio infantil", text: "Evaluación adaptada a la edad y situación clínica, con orientación a la familia sobre el plan y el seguimiento." },
      { title: "Recuperación post alta", text: "Coordinación de los objetivos respiratorios con la movilidad y el resto de las necesidades de rehabilitación." },
    ],
    faqs: [{ question: "¿Atienden a niños y adultos?", answer: "Sí. Antes de coordinar, cuéntanos la edad y el motivo de consulta por nuestro canal de atención para orientar la evaluación. Los objetivos y la atención se adaptan a cada caso." }, { question: "¿La atención domiciliaria reemplaza una urgencia?", answer: "No. Si hay dificultad respiratoria intensa o un deterioro repentino, busca atención de urgencia. La rehabilitación domiciliaria se coordina para evaluación y seguimiento, no para resolver emergencias." }, evaluationFaq, coverageFaq],
  },
  {
    slug: "rehabilitacion-funcional-domicilio", label: "Rehabilitación funcional",
    title: "Recuperar movilidad y autonomía en tu hogar",
    description: "Evaluación de movilidad, marcha y autonomía para la vida cotidiana a domicilio en Iquique y Alto Hospicio. Consulta por rehabilitación funcional.",
    intro: "Levantarse, desplazarse por la casa o volver a participar en la rutina familiar pueden convertirse en objetivos importantes. Evaluamos las dificultades y definimos un plan según las capacidades, prioridades y entorno de la persona.",
    image: "/images/domicilio-caminador.webp", imageAlt: "Rehabilitación de la marcha con caminador en casa",
    situations: ["Pérdida de fuerza o movilidad después de una enfermedad.", "Dificultad para levantarse, sentarse o desplazarse en el hogar.", "Necesidad de apoyo para recuperar marcha y confianza al moverse.", "Cambios en la autonomía que requieren evaluar el hogar y las actividades diarias."],
    goals: [
      { title: "Movimiento en casa", text: "Trabajamos movilidad, transferencias y marcha según la evaluación, con metas relacionadas con la rutina diaria." },
      { title: "Participación de la familia", text: "Orientamos sobre el acompañamiento del proceso y revisamos las dificultades que aparecen entre sesiones." },
      { title: "Rol de Terapia Ocupacional", text: "Puede aportar en autocuidado, adaptación del hogar y participación. Si se requiere esta disciplina, consúltanos para evaluar la coordinación con tu equipo tratante." },
    ],
    faqs: [{ question: "¿Qué diferencia hay entre Kinesiología y Terapia Ocupacional?", answer: "Kinesiología aborda aspectos como movilidad, fuerza y marcha. Terapia Ocupacional se enfoca en la participación en actividades cotidianas y su relación con el entorno. Se complementan según las necesidades del caso." }, { question: "¿Puedo reservar Terapia Ocupacional directamente?", answer: "Por ahora, consulta por WhatsApp para evaluar la coordinación con tu equipo tratante. La agenda publicada corresponde a nuestros servicios de Kinesiología y Fonoaudiología." }, evaluationFaq, coverageFaq],
  },
  {
    slug: "fonoaudiologia-neuro-adultos", label: "Fonoaudiología neuro-adultos",
    title: "Fonoaudiología para comunicarse y alimentarse mejor",
    description: "Fonoaudiología neuro-adultos a domicilio en Iquique y Alto Hospicio. Evaluación de comunicación, voz, lenguaje y deglución según cada caso.",
    intro: "Las dificultades de comunicación o deglución pueden cambiar la vida diaria de una persona y su familia. Evaluamos cada situación para definir objetivos de rehabilitación y recomendaciones individuales.",
    image: "/images/foto-bar-clinico.png", imageAlt: "Bárbara Covarrubias, fonoaudióloga de Rehabilitame",
    situations: ["Cambios en habla o lenguaje después de un ACV.", "Necesidades de apoyo comunicativo en condiciones neurológicas.", "Dificultades de voz o comunicación después de una hospitalización.", "Dificultad o inseguridad al comer y beber."],
    goals: [
      { title: "Comunicación cotidiana", text: "Objetivos de habla y lenguaje vinculados a situaciones relevantes: expresar necesidades, conversar o participar en la rutina familiar." },
      { title: "Deglución", text: "Evaluación de las dificultades al comer y beber. Las recomendaciones se definen individualmente; no se indican cambios de consistencia sin evaluar." },
      { title: "Acompañamiento familiar", text: "Orientación a la familia y coordinación con otros profesionales cuando el caso lo requiere." },
    ],
    faqs: [{ question: "¿Atienden a personas con secuelas de ACV?", answer: "Sí, evaluamos necesidades de comunicación y deglución en personas adultas después de un ACV u otras condiciones neurológicas, según el caso." }, { question: "¿Puedo cambiar la consistencia de los alimentos por mi cuenta?", answer: "Las recomendaciones para alimentarse deben individualizarse. Consulta al equipo tratante o coordina una evaluación fonoaudiológica antes de hacer cambios por dificultades de deglución." }, evaluationFaq, coverageFaq],
  },
]

export const homePaths = rehabilitationPages.filter(page => [
  "rehabilitacion-post-hospitalizacion", "rehabilitacion-neurologica-domicilio",
  "kinesiologia-respiratoria-domicilio", "rehabilitacion-funcional-domicilio",
].includes(page.slug))

export function getRehabilitationPage(slug: string) {
  return rehabilitationPages.find(page => page.slug === slug)
}
