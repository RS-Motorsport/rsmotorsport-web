export default function Location() {
  const whatsappUrl =
    "https://wa.me/51902282934?text=Hola%2C%20quisiera%20agendar%20una%20atenci%C3%B3n%20en%20RS%20Motorsport.";

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Av.%20Rep%C3%BAblica%20de%20Panam%C3%A1%20235%2C%20Barranco%2C%20Lima";

  return (
    <section className="location-section" id="ubicacion">
      <div className="site-container">
        <div className="location-header">
          <div>
            <p className="section-kicker">UBICACIÓN Y HORARIOS</p>

            <h2>
              Visítanos en <span>Barranco.</span>
            </h2>
          </div>

          <p className="location-intro">
            Agenda tu atención y conversemos sobre lo que necesita tu
            vehículo. Nuestro equipo te acompaña desde el diagnóstico
            inicial hasta la solución.
          </p>
        </div>

        <div className="location-layout">
          <div className="location-info">
            <div className="location-detail">
              <span>UBICACIÓN</span>

              <h3>RS Motorsport</h3>

              <p>
                Av. República de Panamá 235
                <br />
                Barranco, Lima
              </p>
            </div>

            <div className="location-detail">
              <span>HORARIO DE ATENCIÓN</span>

              <div className="location-hours">
                <div>
                  <p>Lunes — Viernes</p>
                  <strong>09:00 — 18:00</strong>
                </div>

                <div>
                  <p>Sábados</p>
                  <strong>09:00 — 13:00</strong>
                </div>
              </div>
            </div>

            <div className="location-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                Agendar por WhatsApp ↗
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="location-map-link"
              >
                Cómo llegar <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="location-map">
            <iframe
              title="Ubicación de RS Motorsport en Barranco"
              src="https://www.google.com/maps?q=Av.%20Rep%C3%BAblica%20de%20Panam%C3%A1%20235%2C%20Barranco%2C%20Lima&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="location-map-label">
              <span>RS MOTORSPORT</span>
              <p>Barranco · Lima</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}