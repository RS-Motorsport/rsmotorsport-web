import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <Image src="/logos/logo-rs.png" alt="RS Motorsport" width={180} height={58} />
          <p>Diagnóstico e ingeniería automotriz especializada. Tecnología, método y experiencia al servicio de tu vehículo.</p>
        </div>
        <div><h3>Navegación</h3><a href="#inicio">Inicio</a><a href="#especialidades">Especialidades</a><a href="#tecnologia">Tecnología</a><a href="#casos">Casos de éxito</a><a href="#nosotros">Nosotros</a></div>
        <div><h3>Especialidades</h3><span>Diagnóstico electrónico</span><span>Mecánica especializada</span><span>Reprogramación ECU</span><span>Frenos y suspensión</span><span>Flotas corporativas</span></div>
        <div><h3>Contacto</h3><span>Av. República de Panamá 235</span><span>Barranco, Lima – Perú</span><a href="tel:+51902282934">902 282 934</a><span>Lun–Vie 9:00–18:00</span><span>Sáb 9:00–13:00</span></div>
        <div><h3>Síguenos</h3><a href="https://instagram.com/rsmotorsportperu" target="_blank" rel="noopener noreferrer">Instagram</a><span>Facebook</span><span>TikTok</span><a href="https://wa.me/51902282934" target="_blank" rel="noopener noreferrer">WhatsApp</a></div>
      </div>
      <div className="site-container footer-bottom">© 2026 RS Motorsport S.A.C. Todos los derechos reservados.</div>
    </footer>
  );
}
