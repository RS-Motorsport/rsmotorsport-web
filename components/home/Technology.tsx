const processSteps = [
  {
    number: "01",
    title: "Recepción del vehículo",
    text: "Escuchamos el síntoma, registramos antecedentes y realizamos una inspección inicial antes de intervenir.",
  },
  {
    number: "02",
    title: "Diagnóstico electrónico",
    text: "Escaneamos módulos, revisamos datos en vivo y verificamos códigos de falla con herramientas profesionales.",
  },
  {
    number: "03",
    title: "Pruebas técnicas",
    text: "Confirmamos cada hipótesis mediante mediciones, pruebas dirigidas e inspección física.",
  },
  {
    number: "04",
    title: "Análisis e interpretación",
    text: "Relacionamos la evidencia obtenida para identificar la causa real antes de recomendar una reparación.",
  },
  {
    number: "05",
    title: "Presupuesto respaldado",
    text: "Presentamos hallazgos, prioridades y alternativas para que el cliente decida con información clara.",
  },
];

const capabilities = [
  "Diagnóstico multimarca",
  "Datos en vivo",
  "Pruebas bidireccionales",
  "Programación y codificación",
  "Informes digitales",
];

export default function Technology() {
  return (
    <section id="tecnologia" className="tech-section tech-section-v2">
      <div className="site-container">
        <div className="tech-v2-header">
          <div className="tech-v2-intro">
            <p className="section-kicker">Tecnología y proceso</p>

            <h2>
              Así trabajamos.
              <span> Así obtenemos resultados.</span>
            </h2>

            <p>
              Un diagnóstico preciso no depende únicamente de un escáner.
              Combinamos tecnología, pruebas técnicas, interpretación y
              experiencia antes de recomendar una intervención.
            </p>
          </div>

          <div className="tech-v2-principle">
            <span>Principio RS</span>

            <strong>
              Primero comprendemos.
              <br />
              Luego intervenimos.
            </strong>

            <p>
              Cada recomendación debe estar respaldada por evidencia técnica.
            </p>
          </div>
        </div>

        <div className="process-v2">
          {processSteps.map((step) => (
            <article className="process-v2-step" key={step.number}>
              <div className="process-v2-number">
                <span>{step.number}</span>
              </div>

              <div className="process-v2-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="tech-v2-capabilities">
          <div className="tech-v2-capabilities-title">
            <span />
            <p>Capacidad técnica</p>
          </div>

          <div className="tech-v2-capabilities-list">
            {capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}