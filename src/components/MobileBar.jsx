import { Link } from 'react-router-dom';
import { useLang } from '../lang';
import { CONTACT } from '../config';

// Barra inferior fija en movil: Llamar, WhatsApp, Cotizar. Botones de 48px.
// En escritorio se oculta y aparece el flotante discreto de WhatsApp.
export default function MobileBar() {
  const { lang, L, ui } = useLang();
  return (
    <>
      <nav className="mobile-bar" aria-label="Quick actions">
        <a href={CONTACT.phoneHref}>{L(ui.mobilebar.call)}</a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">{L(ui.mobilebar.whatsapp)}</a>
        <Link to={`/${lang}/contact`} className="mobile-bar-quote">{L(ui.mobilebar.quote)}</Link>
      </nav>
      <a
        className="wa-float"
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
          <path d="M8.8 9.2c.3 2.6 3.4 5.4 6 5.9l1.2-1.2-1.9-1.3-1 .6a6.4 6.4 0 0 1-2.3-2.3l.6-1-1.3-1.9z" />
        </svg>
      </a>
    </>
  );
}
