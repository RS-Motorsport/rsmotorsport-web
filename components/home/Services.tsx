const services = [
  [
    "Diagnóstico electrónico",
    "Escaneo avanzado, lectura de datos en tiempo real y pruebas bidireccionales.",
    "diagnostic",
  ],
  [
    "Mecánica especializada",
    "Mantenimiento preventivo, correctivo y reparaciones complejas.",
    "mechanical",
  ],
  [
    "Reprogramación ECU",
    "Optimización electrónica orientada a potencia, respuesta y confiabilidad.",
    "ecu",
  ],
  [
    "Frenos y suspensión",
    "Diagnóstico y reparación de sistemas de frenos, dirección y suspensión.",
    "brakes",
  ],
  [
    "Flotas corporativas",
    "Programas de inspección y mantenimiento para reducir tiempos de inactividad.",
    "fleet",
  ],
];

export default function Services() {
  return (
    <section id="especialidades" className="specialties-section">
      <div className="site-container">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Especialidades</p>
            <h2>Soluciones para cada necesidad.</h2>
          </div>

          <a className="text-link" href="#contacto">
            Ver todas las especialidades <span>→</span>
          </a>
        </div>

        <div className="specialties-grid">
          {services.map(([title, text, kind]) => (
            <article key={title} className="specialty-card">
              <div
                className={`specialty-photo specialty-photo--${kind}`}
              >
                {kind !== "brakes" && kind !== "ecu" && <span />}
              </div>

              <div>
                <span className="specialty-icon" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}