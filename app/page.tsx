import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atención temprana en Iquique | Rehabilítame Kids",
  description:
    "Atención temprana, estimulación temprana y fonoaudiología infantil en Iquique. Agenda una evaluación en consulta o solicita atención a domicilio en Iquique y Alto Hospicio.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/kids-media/logo.webp",
  },
  openGraph: {
    title: "Atención temprana en Iquique | Rehabilítame Kids",
    description:
      "Atención temprana, estimulación temprana y fonoaudiología infantil en Iquique. Agenda una evaluación en consulta o solicita atención a domicilio en Iquique y Alto Hospicio.",
    locale: "es_CL",
    siteName: "Rehabilítame Kids",
    type: "website",
    url: "/",
    images: [
      {
        url: "/kids-media/hero.webp",
        alt: "Una madre y su bebé juegan con piezas de madera en el suelo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atención temprana en Iquique | Rehabilítame Kids",
    description:
      "Atención temprana, estimulación temprana y fonoaudiología infantil en Iquique. Agenda una evaluación en consulta o solicita atención a domicilio en Iquique y Alto Hospicio.",
    images: ["/kids-media/hero.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://rehabilitame.cl/#kids",
  name: "Rehabilítame Kids",
  url: "https://rehabilitame.cl/",
  telephone: "+56937381137",
  areaServed: ["Iquique", "Alto Hospicio"],
  description:
    "Atención temprana, estimulación temprana y fonoaudiología infantil en Iquique. Agenda una evaluación en consulta o solicita atención a domicilio en Iquique y Alto Hospicio.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "José Francisco Vergara 3391, oficina 202",
    addressLocality: "Iquique",
    addressCountry: "CL",
  },
};

export default function KidsHomePage() {
  return (
    <div className="kids-page">
      <link rel="stylesheet" href="/kids-media/home.css" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="kids">
        <a className="skip" href="#contenido">
          Saltar al contenido
        </a>
        <header className="top">
          <div className="wrap bar">
            <a href="#contenido">
              <img
                className="logo"
                src="/kids-media/logo.webp"
                alt="Rehabilítame Kids"
                width="579"
                height="78"
              />
            </a>
            <nav className="wide" aria-label="Navegación principal">
              <a href="#acompanamiento">Servicios</a>
              <a href="#primera-sesion">Primera sesión</a>
              <a href="#equipo">Equipo</a>
              <a href="#preguntas">Preguntas</a>
            </nav>
            <a
              className="book-small"
              href="https://app-centro-rehabilitame.vercel.app/reservar?modo=especialidad&amp;modalidad=consulta"
            >
              <svg
                className="ki"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="16" rx="3"></rect>
                <path d="M7 3v4m10-4v4M3 10h18m-14 5h3"></path>
              </svg>{" "}
              Agendar hora
            </a>
            <details className="mobile-nav">
              <summary aria-label="Menú principal">
                <svg
                  className="ki"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 6h18M3 12h18M3 18h18"></path>
                </svg>
              </summary>
              <nav aria-label="Navegación móvil">
                <a href="#acompanamiento">Servicios</a>
                <a href="#primera-sesion">Primera sesión</a>
                <a href="#equipo">Equipo</a>
                <a href="#preguntas">Preguntas</a>
              </nav>
            </details>
          </div>
        </header>
        <main id="contenido">
          <section className="hero">
            <div className="wrap hero-grid">
              <div className="intro">
                <div className="local">
                  <svg
                    className="ki"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>{" "}
                  Iquique y Alto Hospicio
                </div>
                <h1>
                  <em>Atención temprana</em> y acompañamiento integral para el
                  desarrollo de tu hijo en Iquique
                </h1>
                <p>
                  Potenciamos sus hitos motores, comunicativos y sensoriales a
                  través del juego, junto a tu familia, desde sus primeros años.
                </p>
                <div className="actions">
                  <a
                    className="btn primary"
                    href="https://app-centro-rehabilitame.vercel.app/reservar?modo=especialidad&amp;modalidad=consulta"
                  >
                    <svg
                      className="ki"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="16" rx="3"></rect>
                      <path d="M7 3v4m10-4v4M3 10h18m-14 5h3"></path>
                    </svg>
                    Agendar evaluación
                  </a>
                  <a
                    className="btn outline"
                    href="https://wa.me/56937381137?text=Hola%2C%20quisiera%20orientaci%C3%B3n%20sobre%20atenci%C3%B3n%20temprana%20para%20mi%20hijo%20o%20hija."
                  >
                    <svg
                      className="ki"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 11.8A9 9 0 0 1 7.2 19.5L3 21l1.2-4.5A9 9 0 1 1 21 11.8Z"></path>
                      <path
                        d="M8.2 7.5c-.7 1.2 0 3.4 2 5.5s4.4 3 5.6 2.1l.6-1.1-2.7-1.4-.8.8a7 7 0 0 1-2.7-2.8l.6-.9L9.5 7Z"
                        strokeWidth="1.25"
                      ></path>
                    </svg>
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
              <div className="scene">
                <div className="photo-back"></div>
                <img
                  className="hero-img"
                  src="/kids-media/hero.webp"
                  width="1280"
                  height="854"
                  alt="Una madre y su bebé juegan con piezas de madera en el suelo"
                  fetchPriority="high"
                />
                <span className="sun" aria-hidden="true">
                  ✳
                </span>
                <div className="rainbow" aria-hidden="true">
                  <b></b>
                </div>
                <div className="photo-note">
                  <svg
                    className="ki"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20.2 5.8a5 5 0 0 0-7.1 0L12 7l-1.2-1.2a5 5 0 0 0-7 7L12 21l8.2-8.2a5 5 0 0 0 0-7Z"></path>
                  </svg>{" "}
                  Atención en consulta y a domicilio
                </div>
              </div>
            </div>
          </section>
          <section className="section wrap" id="acompanamiento">
            <div className="secthead">
              <div>
                <p className="eyebrow">Nuestros servicios</p>
                <h2>Atención temprana y neurodesarrollo</h2>
              </div>
              <p>
                En estimulación temprana partimos de lo que tu hijo ya puede
                hacer y de las preguntas que traes de casa.
              </p>
            </div>
            <div className="cards">
              <article className="card tone-0">
                <div className="tile-icon">
                  <svg
                    className="ki"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m3 20 6-6 4 2 8-9M15 7h6v6"></path>
                    <circle cx="6.5" cy="7" r="3"></circle>
                  </svg>
                </div>
                <span className="tag">Movimiento</span>
                <h3>Estimulación y neurorehabilitación motora</h3>
                <p>
                  Observamos cómo sostiene la cabeza, se sienta, gatea y da sus
                  primeros pasos. Evaluamos el tono muscular y seguimos sus
                  avances contigo.
                </p>
              </article>
              <article className="card tone-1">
                <div className="tile-icon">
                  <svg
                    className="ki"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"></path>
                    <path d="M21 8v9h-3v4l-5-4"></path>
                  </svg>
                </div>
                <span className="tag">Comunicación</span>
                <h3>Fonoaudiología infantil y comunicación</h3>
                <p>
                  Acompañamos el lenguaje, el habla y la interacción durante el
                  juego. También evaluamos la lactancia, el frenillo lingual y
                  la motricidad orofacial.
                </p>
              </article>
              <article className="card tone-2">
                <div className="tile-icon">
                  <svg
                    className="ki"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="4" width="15" height="18" rx="3"></rect>
                    <path d="M9 4V2h7v3H9m0 8 2 2 5-5"></path>
                  </svg>
                </div>
                <span className="tag">Desarrollo</span>
                <h3>Evaluación integral del desarrollo</h3>
                <p>
                  Conversamos sobre tus inquietudes y observamos el movimiento,
                  la comunicación y las respuestas sensoriales para acordar qué
                  necesita tu hijo.
                </p>
              </article>
            </div>
            <aside className="resp">
              <div className="resp-icon">
                <svg
                  className="ki"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 4v6c-1 3-3 4-5 5m9-11v6c1 3 3 4 5 5M9 8C7 4 2 12 2 18c0 4 7 2 8-2v-5m5-3c2-4 7 4 7 10 0 4-7 2-8-2v-5"></path>
                </svg>
              </div>
              <div>
                <small>Servicio complementario</small>
                <h3>Kinesiología respiratoria infantil</h3>
                <p>
                  Evaluamos cuadros bronquiales y apoyamos el manejo de crisis
                  obstructivas según indicación clínica. Trabajamos la higiene
                  bronquial y enseñamos a la familia los cuidados indicados para
                  casa.
                </p>
              </div>
            </aside>
          </section>
          <section className="first" id="primera-sesion">
            <div className="wrap two">
              <div>
                <p className="eyebrow">La primera sesión</p>
                <h2>Un espacio para entender lo que te preocupa.</h2>
                <p>
                  La evaluación inicial permite conocer a tu hijo y acordar por
                  dónde empezar. En las sesiones de seguimiento practicamos lo
                  acordado, revisamos avances y ajustamos el plan.
                </p>
                <a
                  className="btn primary"
                  href="https://app-centro-rehabilitame.vercel.app/reservar?modo=especialidad&amp;modalidad=consulta"
                >
                  <svg
                    className="ki"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="3"></rect>
                    <path d="M7 3v4m10-4v4M3 10h18m-14 5h3"></path>
                  </svg>
                  Agendar evaluación
                </a>
              </div>
              <ol className="process">
                <li>
                  <h3>Evaluación diagnóstica integral</h3>
                  <p>
                    Escuchamos tu historia y observamos a tu hijo en el juego y
                    el movimiento. Según sus necesidades, coordinamos la mirada
                    de kine y fono.
                  </p>
                </li>
                <li>
                  <h3>Orientación para tu familia</h3>
                  <p>
                    Conversamos sobre lo que observamos y practicamos
                    estrategias que puedas incorporar a sus rutinas.
                  </p>
                </li>
                <li>
                  <h3>Un plan de trabajo compartido</h3>
                  <p>
                    Acordamos objetivos y definimos si corresponde seguimiento,
                    intervención o derivación.
                  </p>
                </li>
              </ol>
            </div>
          </section>
          <section className="section wrap" id="equipo">
            <p className="eyebrow">Equipo profesional</p>
            <h2>Conoce a quienes te acompañan</h2>
            <div className="team-grid">
              <article className="person">
                <img
                  loading="lazy"
                  src="/kids-media/franco.webp"
                  width="180"
                  height="220"
                  alt="Franco Tabilo Díaz, kinesiólogo"
                />
                <div>
                  <small>Kinesiología infantil</small>
                  <h3>Franco E. Tabilo Díaz</h3>
                  <p>
                    Desarrollo motor temprano y atención respiratoria infantil.
                    Posgrado en terapia respiratoria y maxilofacial, con
                    experiencia en atención pediátrica intensiva y de urgencia.
                  </p>
                </div>
              </article>
              <article className="person">
                <img
                  loading="lazy"
                  src="/kids-media/barbara.webp"
                  width="180"
                  height="220"
                  alt="Bárbara Covarrubias Piñero, fonoaudióloga"
                />
                <div>
                  <small>Fonoaudiología infantil</small>
                  <h3>Bárbara E. Covarrubias Piñero</h3>
                  <p>
                    Comunicación, lenguaje y alimentación en la infancia.
                    Formación de posgrado en neurorehabilitación y en lactancia
                    materna y frenillo lingual.
                  </p>
                </div>
              </article>
            </div>
            <p className="registry">
              Puedes buscar a cada profesional por su nombre en el{" "}
              <a href="https://rnpi.superdesalud.gob.cl/">
                registro de la Superintendencia de Salud
              </a>
              .
            </p>
          </section>
          <section className="modes">
            <div className="wrap section">
              <p className="eyebrow">Modalidades de atención</p>
              <h2>En consulta o en casa</h2>
              <div className="mode-grid">
                <article>
                  <svg
                    className="ki"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="4" y="3" width="16" height="18" rx="2"></rect>
                    <path d="M10 21v-5h4v5M9 9h6m-3-3v6"></path>
                  </svg>
                  <h3>Atención en consulta</h3>
                  <p>
                    Un espacio adaptado y seguro para observar, jugar y
                    practicar juntos.
                  </p>
                  <address>
                    José Francisco Vergara 3391, oficina 202, Iquique.
                  </address>
                  <a href="https://app-centro-rehabilitame.vercel.app/reservar?modo=especialidad&amp;modalidad=consulta">
                    Ver horarios y agendar en consulta
                  </a>
                </article>
                <article>
                  <svg
                    className="ki"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m2 11 10-8 10 8M5 9v12h14V9M9 21v-7h6v7"></path>
                  </svg>
                  <h3>Atención a domicilio</h3>
                  <p>
                    Observamos cómo se desenvuelve tu hijo en su entorno natural
                    y trabajamos con los objetos y rutinas de tu hogar.
                  </p>
                  <address>
                    Cobertura en Iquique y Alto Hospicio, previa coordinación.
                  </address>
                  <a href="https://app-centro-rehabilitame.vercel.app/solicitar-evaluacion">
                    Solicitar evaluación a domicilio
                  </a>
                </article>
              </div>
            </div>
          </section>
          <section className="quote wrap">
            <p className="eyebrow">Experiencias de familias</p>
            <blockquote>
              “El seguimiento del frenillo lingual de mi bebé fue muy claro y
              cercano. Nos explicaron cada paso de la lactancia.”
            </blockquote>
            <p>
              <strong>Camila S.</strong> · Madre
            </p>
          </section>
          <section className="faq" id="preguntas">
            <div className="wrap two">
              <div>
                <p className="eyebrow">Antes de agendar</p>
                <h2>Preguntas frecuentes</h2>
                <p>
                  Si tienes otra duda, puedes{" "}
                  <a href="https://wa.me/56937381137?text=Hola%2C%20quisiera%20orientaci%C3%B3n%20sobre%20atenci%C3%B3n%20temprana%20para%20mi%20hijo%20o%20hija.">
                    conversar con el equipo por WhatsApp
                  </a>
                  .
                </p>
              </div>
              <div className="questions">
                <details>
                  <summary>
                    ¿Cuándo conviene consultar por el desarrollo de mi hijo?
                  </summary>
                  <p>
                    Puedes consultar si tienes dudas sobre cómo se mueve, juega,
                    se comunica o responde a lo que le rodea. Cuéntanos qué has
                    observado y desde cuándo para orientarte sobre la evaluación
                    más adecuada.
                  </p>
                </details>
                <details>
                  <summary>¿Puedo pedir reembolso en mi Isapre?</summary>
                  <p>
                    Emitimos boleta de honorarios para que puedas solicitar el
                    reembolso. Antes de reservar, consulta con tu Isapre la
                    cobertura de tu plan y si te exige una orden médica.
                  </p>
                </details>
                <details>
                  <summary>
                    ¿La evaluación y el seguimiento tienen el mismo valor?
                  </summary>
                  <p>
                    La agenda en consulta distingue la evaluación infantil de
                    fonoaudiología ($45.000) de la sesión de tratamiento
                    ($30.000). La evaluación kinésica con informe figura a
                    $35.000. Revisa el valor vigente al elegir la prestación o
                    consulta el valor a domicilio.
                  </p>
                </details>
                <details>
                  <summary>¿Cuánto dura una sesión?</summary>
                  <p>
                    La agenda en consulta indica 30 minutos para la evaluación
                    infantil de fonoaudiología y 45 minutos para su sesión de
                    tratamiento. La evaluación kinésica con informe figura con
                    30 minutos. Al reservar puedes revisar la duración de la
                    prestación elegida.
                  </p>
                </details>
                <details>
                  <summary>¿Qué medios de pago aceptan?</summary>
                  <p>
                    Puedes pagar en efectivo o por transferencia. Al coordinar
                    tu atención, el equipo te indicará los datos de pago y el
                    valor de la prestación.
                  </p>
                </details>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="wrap foot">
            <a href="#contenido">
              <img
                className="logo"
                src="/kids-media/logo.webp"
                alt="Rehabilítame Kids"
                width="579"
                height="78"
              />
            </a>
            <div>
              <a href="https://rehabilitame.cl/adultos">Atención de adultos</a>
              <a href="https://www.instagram.com/rehabilitamechile/">
                Instagram
              </a>
              <a href="https://rehabilitame.cl/politica-de-privacidad">
                Privacidad
              </a>
            </div>
          </div>
        </footer>
        <a
          className="float-wa"
          href="https://wa.me/56937381137?text=Hola%2C%20quisiera%20orientaci%C3%B3n%20sobre%20atenci%C3%B3n%20temprana%20para%20mi%20hijo%20o%20hija."
          aria-label="Consultar por WhatsApp"
        >
          <svg
            className="ki"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 11.8A9 9 0 0 1 7.2 19.5L3 21l1.2-4.5A9 9 0 1 1 21 11.8Z"></path>
            <path
              d="M8.2 7.5c-.7 1.2 0 3.4 2 5.5s4.4 3 5.6 2.1l.6-1.1-2.7-1.4-.8.8a7 7 0 0 1-2.7-2.8l.6-.9L9.5 7Z"
              strokeWidth="1.25"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
