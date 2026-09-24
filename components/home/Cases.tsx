const cases = [
  {
    number: "01",
    vehicle: "BMW 118i 2019",
    category: "Sobrealimentación",
    problem: "Pérdida de potencia",
    diagnosis:
      "Se identificó una respuesta irregular del sistema de sobrealimentación y desgaste en el mecanismo de wastegate.",
    solution:
      "Se verificó el sistema, se corrigió la causa mecánica y se validó nuevamente el funcionamiento bajo carga.",
    result: "Recuperación de la respuesta y funcionamiento normal del turbo.",
  },
  {
    number: "02",
    vehicle: "Chrysler 300C 3.6",
    category: "Diagnóstico electrónico",
    problem: "Mensaje de ahorro de energía",
    diagnosis:
      "La evaluación permitió relacionar la falla con el sistema eléctrico y descartar reemplazos innecesarios.",
    solution:
      "Se realizaron pruebas dirigidas sobre alimentación, comunicación y comportamiento de los módulos involucrados.",
    result: "Causa identificada mediante diagnóstico antes de intervenir.",
  },
  {
    number: "03",
    vehicle: "Dodge Durango 2013",
    category: "Sistema eléctrico",
    problem: "Borne positivo sobrecalentado",
    diagnosis:
      "Se detectó alta resistencia en conexiones del borne remoto, generando caída de tensión y temperatura excesiva.",
    solution:
      "Se corrigieron los puntos de conexión afectados y se comprobaron nuevamente voltajes y comportamiento del sistema.",
    result: "Alimentación estabilizada y eliminación del sobrecalentamiento.",
  },
];

export default function Cases() {
  return (
    <section id="casos" className="cases-section cases-section-v2">
      <div className="site-container">
        <div className="cases-v2-header">
          <div>
            <p className="section-kicker">Casos de éxito</p>

            <h2>
              Diagnósticos que
              <span> se convierten en resultados.</span>
            </h2>
          </div>

          <p className="cases-v2-intro">
            No mostramos únicamente reparaciones terminadas. Mostramos el
            razonamiento técnico que permitió llegar a la solución.
          </p>
        </div>

        <div className="cases-v2-grid">
          {cases.map((item, index) => (
            <article
              className={`case-v2-card ${
                index === 0 ? "case-v2-card--featured" : ""
              }`}
              key={item.vehicle}
            >
              <div className="case-v2-top">
                <span className="case-v2-number">{item.number}</span>
                <span className="case-v2-category">{item.category}</span>
              </div>

              <div className="case-v2-title">
                <p>{item.vehicle}</p>
                <h3>{item.problem}</h3>
              </div>

              <div className="case-v2-details">
                <div>
                  <span>Diagnóstico</span>
                  <p>{item.diagnosis}</p>
                </div>

                <div>
                  <span>Intervención</span>
                  <p>{item.solution}</p>
                </div>

                <div className="case-v2-result">
                  <span>Resultado</span>
                  <p>{item.result}</p>
                </div>
              </div>

              <div className="case-v2-footer">
                <span>Evidencia · Diagnóstico · Verificación</span>
                <span aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>

        <div className="cases-v2-bottom">
          <p>
            Cada vehículo requiere una evaluación diferente.
            <strong> El método permanece.</strong>
          </p>

          <a href="#contacto" className="text-link">
            Ver más casos <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}