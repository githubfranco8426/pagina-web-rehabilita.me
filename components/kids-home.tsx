import Link from "next/link"
import { ArrowUpRight, Footprints, MessageCircle, Sparkles, HeartHandshake, Check, MapPin } from "lucide-react"
import { brand, whatsappConsultasLink } from "@/lib/brand"
import styles from "./kids-home.module.css"

const enquiry = whatsappConsultasLink("Hola, me interesa Rehabilítame Kids. Quisiera orientación sobre desarrollo temprano y consultar disponibilidad para mi hijo/a.")
const services = [
  { icon: Footprints, name: "Movimiento", discipline: "Kinesiología infantil", text: "Observamos cómo tu hijo explora, cambia de posición y se mueve durante el juego. Evaluamos sus habilidades motoras y las inquietudes de tu familia.", color: "sage" },
  { icon: MessageCircle, name: "Comunicación", discipline: "Fonoaudiología infantil", text: "Evaluamos cómo comprende, se expresa y comparte con otros. Acompañamos la comunicación y el lenguaje temprano a partir del juego y las rutinas.", color: "blue" },
  { icon: HeartHandshake, name: "Juego en familia", discipline: "Orientación a cuidadores", text: "Practicamos contigo estrategias sencillas para acompañar su desarrollo en casa, aprovechando los momentos que ya comparten cada día.", color: "gold" },
]
const questions = [
  { q: "¿Necesito saber si requiere kine o fono?", a: "No. Cuéntanos la edad de tu hijo y qué te preocupa. Te orientaremos sobre la evaluación más pertinente. La atención con ambos profesionales se propone únicamente cuando aporta a sus necesidades." },
  { q: "¿Todos los niños necesitan tratamiento?", a: "No. Después de evaluar, podemos recomendar orientación, seguimiento, intervención o derivación. El plan depende de lo observado y de las prioridades de cada familia." },
  { q: "¿Puedo participar durante la atención?", a: "Sí. La participación del cuidador es parte central de nuestra propuesta: observar, preguntar y practicar estrategias que puedan incorporarse a las rutinas del hogar." },
  { q: "¿Cómo consulto una hora?", a: "Escríbenos por WhatsApp para conocer disponibilidad, valores, modalidad e indicaciones antes de reservar. Atendemos con coordinación previa en Iquique." },
  { q: "¿Y si mi hijo necesita otra evaluación?", a: "Te explicaremos los hallazgos y orientaremos la derivación al profesional correspondiente. Nuestra línea inicial se enfoca en desarrollo temprano, movimiento y comunicación." },
]
export function KidsHome() {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#contenido">Saltar al contenido</a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.wordmark} href="/" aria-label="Rehabilítame Kids, inicio">Rehabilítame<span>K<span>I</span>D<span>S</span></span></Link>
          <nav className={styles.nav} aria-label="Navegación principal">
            <a href="#acompanamiento">Cómo acompañamos</a><a href="#equipo">Equipo</a><Link className={styles.adultsLink} href="/adultos">Adultos <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </nav>
          <a className={styles.headerCta} href={enquiry} target="_blank" rel="noopener noreferrer">Consultar <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <nav className={styles.mobileNav} aria-label="Navegación móvil"><a href="#acompanamiento">Acompañamiento</a><a href="#equipo">Equipo</a><Link href="/adultos">Adultos ↗</Link></nav>
      </header>
      <main id="contenido">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> Desarrollo temprano · Iquique</p>
            <h1>Crecer es descubrir.<br /><em>Acompañemos<br />sus primeros pasos.</em></h1>
            <p className={styles.lead}>Kinesiología y Fonoaudiología infantil para acompañar el movimiento, la comunicación y el juego en los primeros años de vida.</p>
            <div className={styles.actions}><a className={styles.primary} href={enquiry} target="_blank" rel="noopener noreferrer">Quiero orientación <ArrowUpRight size={19} aria-hidden="true" /></a><a className={styles.textLink} href="#acompanamiento">Conoce nuestra propuesta ↓</a></div>
            <p className={styles.heroNote}>Primera infancia · Foco inicial de 0 a 3 años · Atención coordinada previamente</p>
          </div>
          <div className={styles.heroVisual} aria-label="Movimiento, comunicación y juego: los pilares de Rehabilítame Kids">
            <span className={styles.visualTop}>SU MUNDO EMPIEZA A CRECER</span>
            <div className={styles.playground} aria-hidden="true">
              <div className={styles.arch}><Footprints size={56} strokeWidth={1.5}/></div>
              <div className={styles.bubble}><MessageCircle size={59} strokeWidth={1.5}/></div>
              <div className={styles.ball}><Sparkles size={48} strokeWidth={1.5}/></div>
              <div className={styles.block}>a<span>b</span>c</div>
              <div className={styles.path}/>
            </div>
            <div className={styles.visualBottom}><span>Movimiento</span><span>Comunicación</span><span>Juego</span></div>
            <p>Explorar, conectar y aprender contigo.</p>
          </div>
        </section>
        <div className={styles.promiseStrip}><p><Check size={17} aria-hidden="true"/> Objetivos que comprendes</p><p><Check size={17} aria-hidden="true"/> Cuidadores que participan</p><p><Check size={17} aria-hidden="true"/> Estrategias para la vida diaria</p></div>
        <section id="acompanamiento" className={styles.section}>
          <div className={styles.sectionHead}><div><p className={styles.eyebrow}>Nuestra forma de acompañar</p><h2>El desarrollo sucede<br />en los pequeños momentos.</h2></div><p>Partimos de tus preguntas y de lo que tu hijo ya puede hacer. Evaluamos, acordamos objetivos y buscamos oportunidades de aprendizaje dentro de su vida cotidiana.</p></div>
          <div className={styles.cards}>{services.map(({icon: Icon, ...s})=><article className={styles.card} key={s.name}><div className={styles[s.color]}><Icon size={29} strokeWidth={1.6} aria-hidden="true"/></div><p className={styles.discipline}>{s.discipline}</p><h3>{s.name}</h3><p>{s.text}</p></article>)}</div>
        </section>
        <section className={styles.familySection}>
          <div><p className={styles.eyebrow}>El sello Rehabilítame Kids</p><h2>Comprender.<br />Practicar.<br /><em>Acompañar.</em></h2><p>Queremos que sepas qué trabajamos, para qué y cómo acompañarlo en casa, sin llenar tu día de tareas.</p></div>
          <ol className={styles.steps}>
            <li><span>01</span><div><h3>Escuchamos y evaluamos</h3><p>Conocemos sus rutinas, observamos sus habilidades y conversamos sobre tus inquietudes.</p></div></li>
            <li><span>02</span><div><h3>Definimos el siguiente paso</h3><p>Recibes una devolución clara y objetivos acordados. No todos los niños necesitan un tratamiento continuo.</p></div></li>
            <li><span>03</span><div><h3>Lo practicamos contigo</h3><p>Probamos estrategias durante la atención para que puedas incorporarlas al juego y las rutinas.</p></div></li>
            <li><span>04</span><div><h3>Revisamos el proceso</h3><p>Cuando corresponde seguimiento, acordamos cuándo revisar los objetivos y ajustar el plan.</p></div></li>
          </ol>
        </section>
        <section id="equipo" className={styles.section}>
          <div className={styles.sectionHead}><div><p className={styles.eyebrow}>Personas que acompañan</p><h2>Dos miradas.<br />Un equipo cercano.</h2></div><p>Kinesiología y Fonoaudiología se coordinan cuando tu hijo lo necesita. Cada disciplina evalúa y trabaja dentro de su área profesional.</p></div>
          <div className={styles.team}>
            <article><img src="/images/foto-franco-clinico.png" alt="Franco Tabilo, kinesiólogo" loading="lazy"/><div><p className={styles.discipline}>Kinesiología</p><h3>Franco E. Tabilo Díaz</h3><p>Experiencia en atención infantil y kinesiología respiratoria de urgencia. Acompañamiento del movimiento y el desarrollo motor temprano.</p></div></article>
            <article><img src="/images/foto-bar-clinico.png" alt="Bárbara Covarrubias, fonoaudióloga" loading="lazy"/><div><p className={styles.discipline}>Fonoaudiología</p><h3>Bárbara E. Covarrubias Piñero</h3><p>Evaluación y acompañamiento de la comunicación y el lenguaje infantil, con participación de la familia.</p></div></article>
          </div>
        </section>
        <section id="preguntas" className={styles.faq}><div><p className={styles.eyebrow}>Antes de comenzar</p><h2>También acompañamos<br />tus preguntas.</h2></div><div>{questions.map(item=><details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></section>
        <section id="contacto" className={styles.contact}><div><p className={styles.eyebrow}><MapPin size={15} aria-hidden="true"/> Iquique · Con coordinación previa</p><h2>Cuéntanos qué te gustaría<br />acompañar de su desarrollo.</h2><p>Consulta por disponibilidad, valores y modalidad de atención antes de reservar.</p></div><a className={styles.primary} href={enquiry} target="_blank" rel="noopener noreferrer">Conversemos por WhatsApp <ArrowUpRight size={19} aria-hidden="true"/></a></section>
      </main>
      <footer className={styles.footer}><div><Link className={styles.wordmark} href="/">Rehabilítame<span>KIDS</span></Link><p>Movimiento · Comunicación · Juego</p></div><nav aria-label="Navegación de pie de página"><Link href="/adultos">Atención de adultos ↗</Link><a href={brand.contact.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a><Link href="/politica-de-privacidad">Privacidad</Link></nav><p>© {new Date().getFullYear()} Rehabilítame · Iquique</p></footer>
    </div>
  )
}
