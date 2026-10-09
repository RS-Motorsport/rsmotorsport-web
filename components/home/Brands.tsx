import Image from "next/image";

const brands = [
  { name: "Mercedes-Benz", logo: "/logos/brands/mercedes-benz.svg" },
  { name: "BMW", logo: "/logos/brands/bmw.svg" },
  { name: "Audi", logo: "/logos/brands/audi.svg" },
  { name: "Volkswagen", logo: "/logos/brands/volkswagen.svg" },
  { name: "Porsche", logo: "/logos/brands/porsche.svg" },
  { name: "SEAT", logo: "/logos/brands/seat.svg" },
  { name: "MINI", logo: "/logos/brands/mini.svg" },
  { name: "Volvo", logo: "/logos/brands/volvo.svg" },
  { name: "Jaguar", logo: "/logos/brands/jaguar.svg" },
];

export default function Brands() {
  return (
    <section className="brands-section" id="marcas">
      <div className="site-container">
        <div className="brands-header">
          <div>
            <p className="section-kicker">MARCAS QUE ATENDEMOS</p>

            <h2>
              Experiencia multimarca.
              <span> Especialización europea.</span>
            </h2>
          </div>

          <p className="brands-intro">
            Trabajamos con vehículos europeos, japoneses, americanos y
            multimarca, con especial experiencia en diagnóstico y mantenimiento
            de marcas premium.
          </p>
        </div>

        <div className="brands-list">
          {brands.map((brand) => (
            <div className="brand-item" key={brand.name}>
              <Image
                src={brand.logo}
                alt={`Logo de ${brand.name}`}
                width={160}
                height={70}
                className="brand-logo"
              />
            </div>
          ))}
        </div>

        <p className="brands-note">
          También atendemos vehículos de otras marcas según diagnóstico y
          requerimiento técnico.
        </p>
      </div>
    </section>
  );
}