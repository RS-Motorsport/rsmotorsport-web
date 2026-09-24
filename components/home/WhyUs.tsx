const reasons = [
  [
    "Desde 2018",
    "Experiencia construida con diagnósticos y trabajos reales.",
  ],
  [
    "Multimarca",
    "Especialistas en vehículos europeos y atención para todas las gamas.",
  ],
  [
    "Informes digitales",
    "Hallazgos, evidencia y recomendaciones comunicadas con claridad.",
  ],
  [
    "Garantía de marca",
    "Repuestos de calidad y procesos respaldados.",
  ],
  [
    "Atención personalizada",
    "Comunicación directa antes, durante y después del servicio.",
  ],
];

export default function WhyUs() {
  const firstReasons = reasons.slice(0, 2);
  const remainingReasons = reasons.slice(2);

  return (
    <section id="nosotros" className="why-section">
      <div className="site-container why-layout">
        <div>
          <p className="section-kicker">
            ¿Por qué elegir RS Motorsport?
          </p>

          <h2>
            Ingeniería, experiencia y compromiso.
          </h2>

          {/* Desktop */}
          <div className="reasons-grid reasons-grid-desktop">
            {reasons.map(([title, text]) => (
              <article key={title}>
                <span
                  className="reason-icon"
                  aria-hidden="true"
                />

                <h3>{title}</h3>

                <p>{text}</p>
              </article>
            ))}
          </div>

          {/* Mobile */}
          <div className="why-mobile-content">
            <div className="reasons-grid reasons-grid-mobile">
              {firstReasons.map(([title, text]) => (
                <article key={title}>
                  <span
                    className="reason-icon"
                    aria-hidden="true"
                  />

                  <h3>{title}</h3>

                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div
              className="why-photo why-photo-mobile"
              role="img"
              aria-label="Vista panorámica del taller RS Motorsport"
            >
              <div className="why-badge">
                <span>RS Motorsport</span>
                <strong>Desde 2018</strong>
                <p>Ingeniería automotriz especializada.</p>
              </div>
            </div>

            <div className="reasons-grid reasons-grid-mobile">
              {remainingReasons.map(([title, text]) => (
                <article key={title}>
                  <span
                    className="reason-icon"
                    aria-hidden="true"
                  />

                  <h3>{title}</h3>

                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop photo */}
        <div
          className="why-photo why-photo-desktop"
          role="img"
          aria-label="Vista panorámica del taller RS Motorsport"
        >
          <div className="why-badge">
            <span>RS Motorsport</span>
            <strong>Desde 2018</strong>
            <p>Ingeniería automotriz especializada.</p>
          </div>
        </div>
      </div>
    </section>
  );
}