import Image from "next/image";

const appointmentUrl =
  "https://wa.me/51902282934?text=Hola%2C%20quisiera%20agendar%20un%20diagn%C3%B3stico.";

export default function Hero() {

  return (
    <section id="inicio" className="hero-final">
      <div className="site-container hero-final-grid">
        <div className="hero-final-copy">
          <p className="eyebrow">
            <span />
            Diagnóstico e ingeniería automotriz
          </p>

          <h1>
            Diagnósticos
            <br />
            precisos.
            <br />
            <span>
              Soluciones
              <br />
              confiables.
            </span>
          </h1>

          {/* Imagen exclusiva para móvil */}
          <div className="hero-mobile-media">
          <Image
            src="/images/hero-workshop-sprint03.webp"
            alt="Técnico de RS Motorsport realizando diagnóstico automotriz"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 639px) 380px, 1px"
            className="object-cover"
          />

            <div className="hero-mobile-overlay" />
          </div>

          <p>
            Aplicamos tecnología, método y experiencia para diagnosticar,
            mantener, reparar y optimizar tu vehículo con precisión.
          </p>

          <div className="hero-final-actions">
            <a
              className="button-primary"
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar diagnóstico <span>↗</span>
            </a>

            <a className="text-link" href="#especialidades">
              Conocer especialidades <span>↓</span>
            </a>
          </div>

          <div className="hero-proof">
            <div>
              <b>Tecnología especializada</b>
              <span>Equipamiento profesional</span>
            </div>

            <div>
              <b>Ingeniería aplicada</b>
              <span>Método basado en datos</span>
            </div>

            <div>
              <b>Resultados verificables</b>
              <span>Evidencia en cada intervención</span>
            </div>
          </div>
        </div>

        {/* Imagen desktop / tablet */}
        <div className="hero-final-media">
          <Image
            src="/images/hero-workshop-sprint03.webp"
            alt="Técnico de RS Motorsport realizando diagnóstico automotriz"
            fill
            sizes="(min-width: 1400px) 840px, (min-width: 900px) 58vw, 1px"
            className="object-cover"
          />

          <div className="hero-final-overlay" />
        </div>
      </div>
    </section>
  );
}