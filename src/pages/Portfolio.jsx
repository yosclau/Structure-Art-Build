import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lang';
import { useMeta } from '../seo';
import { MIN_PROJECTS_PER_FILTER } from '../config';
import Img from '../components/Img';
import useReveal from '../components/useReveal';
import projectsData from '../content/projects.json';

const CATEGORY_ORDER = ['metal-railings', 'gates-fencing', 'interior-stone', 'concrete-sitework'];

export default function Portfolio() {
  const { lang, L, ui } = useLang();
  useMeta({ title: L(ui.meta.portfolio_title), description: L(ui.meta.portfolio_desc) });
  const [active, setActive] = useState('all');
  useReveal();

  const { projects } = projectsData;

  const filters = useMemo(() => {
    const counts = {};
    const labels = {};
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
      labels[p.category] = p.category_label;
    });
    return CATEGORY_ORDER
      .filter((c) => (counts[c] || 0) >= MIN_PROJECTS_PER_FILTER)
      .map((c) => ({ id: c, label: labels[c], count: counts[c] }));
  }, [projects]);

  const shown = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <header className="page-head s-bone">
        <div className="sec-inner">
          <span className="eyebrow">{L(ui.portfolio.eyebrow)}</span>
          <h1 className="display-2">{L(ui.portfolio.title)}</h1>
          <p className="lede" style={{ marginTop: 16 }}>{L(ui.portfolio.sub)}</p>
        </div>
      </header>

      <section className="sec s-bone" style={{ paddingTop: 0 }}>
        <div className="sec-inner">
          <div className="filter-row" role="group" aria-label={L(ui.portfolio.eyebrow)}>
            <button
              type="button"
              className={`filter-pill ${active === 'all' ? 'active' : ''}`}
              aria-pressed={active === 'all'}
              onClick={() => setActive('all')}
            >
              {L(ui.portfolio.filter_all)}
            </button>
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`filter-pill ${active === f.id ? 'active' : ''}`}
                aria-pressed={active === f.id}
                onClick={() => setActive(f.id)}
              >
                {L(f.label)}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {shown.map((p) => {
              const cover = p.images.find((i) => i.slug === p.cover) || p.images[0];
              return (
                <Link key={p.slug} to={`/${lang}/portfolio/${p.slug}`} className="project-card">
                  <div className="card-img">
                    <Img image={cover} alt={L(p.title)} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                  </div>
                  <div className="card-meta">
                    <span className="card-cat">{L(p.category_label)} · {p.photo_count} {L(ui.portfolio.photos)}</span>
                    <h3>{L(p.title)}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
