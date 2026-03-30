import { Link } from 'react-router-dom';
import { LOGO } from '../images';
import { useLang } from '../lang';

const IGIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

const FBIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const socialStyle = {
  display:'inline-flex', alignItems:'center', justifyContent:'center',
  width:38, height:38,
  border:'1px solid rgba(196,163,90,0.25)',
  color:'var(--gold)',
  textDecoration:'none',
  transition:'all .25s',
  borderRadius:0,
};

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={LOGO} alt="Structure Art" />
          <p>{t.footer_p}</p>
          <p className="footer-tagline">{t.footer_tagline}</p>
          {/* Social icons */}
          <div style={{display:'flex',gap:10,marginTop:20}}>
            <a href="https://www.instagram.com/structure_art_built?igsh=MTJ2aHkzNHU5anI1Yg==" target="_blank" rel="noreferrer"
              style={socialStyle}
              onMouseEnter={e=>{e.currentTarget.style.background='var(--gold)';e.currentTarget.style.color='var(--navy)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='var(--gold)';}}>
              <IGIcon/>
            </a>
            <a href="https://www.facebook.com/share/1AmXmGRe7j/?mibextid=wwXIfr" target="_blank" rel="noreferrer"
              style={socialStyle}
              onMouseEnter={e=>{e.currentTarget.style.background='var(--gold)';e.currentTarget.style.color='var(--navy)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='var(--gold)';}}>
              <FBIcon/>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>{t.footer_services}</h4>
          <ul>
            <li><Link to="/services">{t.nav_services}</Link></li>
            <li><Link to="/services">Custom Metal Decks</Link></li>
            <li><Link to="/services">Beam Reinforcement</Link></li>
            <li><Link to="/services">Architectural Metal</Link></li>
            <li><Link to="/services">Gates & Fences</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t.footer_company}</h4>
          <ul>
            <li><Link to="/why-us">{t.nav_why}</Link></li>
            <li><Link to="/portfolio">{t.nav_portfolio}</Link></li>
            <li><Link to="/about">{t.nav_about}</Link></li>
            <li><Link to="/contact">{t.nav_quote}</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t.footer_contact}</h4>
          <ul>
            <li><a href="tel:4709148996">(470) 914-8996</a></li>
            <li><a href="mailto:Structureartco@gmail.com">Structureartco@gmail.com</a></li>
            <li>
              <a href="https://www.instagram.com/structure_art_built?igsh=MTJ2aHkzNHU5anI1Yg==" target="_blank" rel="noreferrer"
                style={{display:'flex',alignItems:'center',gap:8,color:'rgba(253,252,249,0.38)',textDecoration:'none',transition:'color .2s'}}
                onMouseEnter={e=>e.currentTarget.style.color='var(--gold)'}
                onMouseLeave={e=>e.currentTarget.style.color='rgba(253,252,249,0.38)'}>
                <IGIcon/> @structure_art_built
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/1AmXmGRe7j/?mibextid=wwXIfr" target="_blank" rel="noreferrer"
                style={{display:'flex',alignItems:'center',gap:8,color:'rgba(253,252,249,0.38)',textDecoration:'none',transition:'color .2s'}}
                onMouseEnter={e=>e.currentTarget.style.color='var(--gold)'}
                onMouseLeave={e=>e.currentTarget.style.color='rgba(253,252,249,0.38)'}>
                <FBIcon/> Structure Art
              </a>
            </li>
            <li><span style={{color:'rgba(253,252,249,0.38)'}}>Chicago, Illinois</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Structure Art. <span>{t.footer_bottom1}</span> Chicago, IL.</p>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <a href="https://www.instagram.com/structure_art_built?igsh=MTJ2aHkzNHU5anI1Yg==" target="_blank" rel="noreferrer"
            style={{color:'rgba(196,163,90,0.5)',transition:'color .2s'}}
            onMouseEnter={e=>e.currentTarget.style.color='var(--gold)'}
            onMouseLeave={e=>e.currentTarget.style.color='rgba(196,163,90,0.5)'}>
            <IGIcon/>
          </a>
          <a href="https://www.facebook.com/share/1AmXmGRe7j/?mibextid=wwXIfr" target="_blank" rel="noreferrer"
            style={{color:'rgba(196,163,90,0.5)',transition:'color .2s'}}
            onMouseEnter={e=>e.currentTarget.style.color='var(--gold)'}
            onMouseLeave={e=>e.currentTarget.style.color='rgba(196,163,90,0.5)'}>
            <FBIcon/>
          </a>
        </div>
      </div>
    </footer>
  );
}

