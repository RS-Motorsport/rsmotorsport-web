const schema = {
  "@context": "https://schema.org",

  "@type": "AutoRepair",

  "@id": "https://www.rsmotorsport.pe/#business",

  name: "RS Motorsport",

  url: "https://www.rsmotorsport.pe",

  telephone: "+51902282934",

  description:
    "Taller automotriz multimarca especializado en diagnóstico electrónico, mantenimiento, reparaciones, frenos, suspensión, reprogramación ECU e inspección precompra en Lima.",

  image: "https://www.rsmotorsport.pe/images/hero-workshop-sprint03.webp",

  logo: "https://www.rsmotorsport.pe/logos/logo-rs.png",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. República de Panamá 235",
    addressLocality: "Barranco",
    addressRegion: "Lima",
    addressCountry: "PE",
  },

  areaServed: {
    "@type": "AdministrativeArea",
    name: "Lima Metropolitana",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],

  knowsAbout: [
    "Diagnóstico electrónico automotriz",
    "Mecánica automotriz",
    "Mantenimiento preventivo",
    "Mantenimiento correctivo",
    "Reparación de motores",
    "Frenos",
    "Suspensión",
    "Dirección",
    "Reprogramación ECU",
    "Inspección precompra",
    "Diagnóstico multimarca",
  ],

  sameAs: [
    "https://www.instagram.com/rsmotorsportperu/",
  ],
};

export default function Schema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}