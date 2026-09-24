const whatsapp = "https://wa.me/51902282934?text=Hola%2C%20quisiera%20agendar%20un%20diagn%C3%B3stico.";

export default function ContactCTA() {
  return (
    <section id="contacto" className="contact-band">
      <div className="site-container contact-band-inner">
        <div>
          <h2>¿Necesitas un diagnóstico preciso?</h2>
          <p>Agenda tu evaluación y recibe atención personalizada.</p>
        </div>
        <div className="contact-band-actions">
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="button-primary">Agendar por WhatsApp <span>↗</span></a>
          <div><span>O llámanos</span><strong>902 282 934</strong></div>
        </div>
      </div>
    </section>
  );
}
