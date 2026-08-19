import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLang, switchLangPath, persistLang } from '../lang';
import { LANGS } from '../config';

export default function Navbar() {
  const { lang, L, ui } = useLang();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const dark = (isHome && !scrolled && !open) || open;
  const links = [
    { to: `/${lang}`, label: L(ui.nav.home), end: true },
    { to: `/${lang}/portfolio`, label: L(ui.nav.portfolio) },
    { to: `/${lang}/services`, label: L(ui.nav.services) },
    { to: `/${lang}/about`, label: L(ui.nav.about) },
    { to: `/${lang}/contact`, label: L(ui.nav.contact) },
  ];

  return (
    <header className={`navbar ${dark ? 'navbar-dark' : 'navbar-light'} ${scrolled || !isHome ? 'navbar-solid' : ''}`}>
      <div className="navbar-inner">
        <Link to={`/${lang}`} className="navbar-logo" aria-label="Structure Art">
          <img src={dark ? '/media/brand/logo-on-black.webp' : '/media/brand/logo-lockup.webp'} alt="Structure Art" />
        </Link>

        <nav className="navbar-links" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-right">
          <div className="lang-toggle" role="group" aria-label="Language">
            {LANGS.map((l, i) => (
              <span key={l}>
                {i > 0 && <span className="lang-sep" aria-hidden="true">|</span>}
                <Link
                  to={switchLangPath(pathname, l)}
                  className={l === lang ? 'lang-active' : ''}
                  aria-current={l === lang ? 'true' : undefined}
                  onClick={() => persistLang(l)}
                >
                  {l.toUpperCase()}
                </Link>
              </span>
            ))}
          </div>
          <Link to={`/${lang}/contact`} className="btn-gold navbar-cta">{L(ui.nav.cta)}</Link>
          <button
            type="button"
            className={`nav-burger ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-label={open ? L(ui.nav.menu_close) : L(ui.nav.menu_open)}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile" aria-label="Main mobile">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
          <Link to={`/${lang}/trade-partners`}>{L(ui.nav.trade)}</Link>
          <Link to={`/${lang}/contact`} className="btn-gold">{L(ui.nav.cta)}</Link>
        </nav>
      )}
    </header>
  );
}
