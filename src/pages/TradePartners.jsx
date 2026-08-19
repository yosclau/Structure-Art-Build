import { useLang } from '../lang';
import { useMeta } from '../seo';
import LeadForm from '../components/LeadForm';
import useReveal from '../components/useReveal';

export default function TradePartners() {
  const { L, ui } = useLang();
  useMeta({ title: L(ui.meta.trade_title), description: L(ui.meta.trade_desc) });
  useReveal();

  return (
    <>
      <div className="b2b-band" style={{ marginTop: 78 }}>{L(ui.b2b.band)}</div>
      <header className="page-head s-gray" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
        <div className="sec-inner">
          <span className="eyebrow">{L(ui.trade_page.eyebrow)}</span>
          <h1 className="display-2">{L(ui.trade_page.title)}</h1>
          <p className="lede" style={{ marginTop: 16 }}>{L(ui.trade_page.sub)}</p>
        </div>
      </header>

      <section className="sec s-gray" style={{ paddingTop: 0 }}>
        <div className="sec-inner b2b-grid">
          <div className="reveal">
            <div style={{ marginBottom: 44 }}>
              <span className="eyebrow">{L(ui.trade_page.capabilities_title)}</span>
              <ul className="trade-list">
                {ui.trade_page.capabilities.map((c) => <li key={c.en}>{L(c)}</li>)}
              </ul>
            </div>
            <div>
              <span className="eyebrow">{L(ui.trade_page.logistics_title)}</span>
              <ul className="trade-list">
                {ui.trade_page.logistics.map((c) => <li key={c.en}>{L(c)}</li>)}
              </ul>
            </div>
          </div>
          <div className="reveal delay-1">
            <h2 className="display-3" style={{ marginBottom: 24 }}>{L(ui.trade_page.form_title)}</h2>
            <LeadForm variant="trade" />
          </div>
        </div>
      </section>
    </>
  );
}
