import Image from "next/image";

const inspectionItems = [
  {
    number: "01",
    title: "Diagnóstico electrónico",
    text: "Escaneo de módulos, lectura de códigos de avería y análisis de datos en vivo.",
  },
  {
    number: "02",
    title: "Inspección mecánica",
    text: "Revisión de fugas, suspensión, dirección, frenos y componentes críticos.",
  },
  {
    number: "03",
    title: "Prueba funcional",
    text: "Comprobamos el comportamiento del vehículo y validamos los síntomas reportados.",
  },
  {
    number: "04",
    title: "Informe técnico",
    text: "Hallazgos documentados, evidencia y recomendaciones priorizadas para tomar decisiones.",
  },
];

export default function Inspection() {
  return (
    <section className="inspection-section" id="inspeccion">
      <div className="site-container inspection-container">
        <div className="inspection-heading">
          <span className="inspection-eyebrow">
            DIAGNÓSTICO E INSPECCIÓN
          </span>

          <h2>Decisiones respaldadas por evidencia técnica.</h2>

          <p>
            Evaluamos el vehículo de forma integral para identificar fallas,
            riesgos y necesidades de mantenimiento antes de iniciar una
            reparación o tomar una decisión de compra.
          </p>
        </div>

        <div className="inspection-layout">
          <div className="inspection-content">
            <div className="inspection-grid">
              {inspectionItems.map((item) => (
                <article className="inspection-item" key={item.number}>
                  <span className="inspection-number">{item.number}</span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="inspection-prepurchase">
              <span>INSPECCIÓN PRE-COMPRA</span>

              <h3>¿Estás por comprar un vehículo usado?</h3>

              <p>
                Conoce su condición real antes de cerrar la operación.
                Revisamos el vehículo y documentamos los principales hallazgos
                para ayudarte a tomar una decisión con mayor información.
              </p>

              <a
                href="https://wa.me/51902282934?text=Hola%20RS%20Motorsport,%20quisiera%20agendar%20una%20inspección%20vehicular."
                target="_blank"
                rel="noopener noreferrer"
                className="inspection-cta"
              >
                Agendar inspección
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="inspection-media">
            <Image
              src="/images/taller-rs-panorama.webp"
              alt="Área de trabajo de RS Motorsport"
              fill
              sizes="(max-width: 899px) 100vw, 46vw"
              className="inspection-image"
            />

            <div className="inspection-media-overlay" />

            <div className="inspection-media-caption">
              <span>RS MOTORSPORT</span>
              <p>Diagnosticar. Comprobar. Documentar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}