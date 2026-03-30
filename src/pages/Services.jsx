import { Link } from 'react-router-dom';
import useReveal from '../components/useReveal';
import { SRV1, SRV2, SRV3, PORT1, PORT3, HERO2 } from '../images';

const PRIMARY_SERVICE = {
  num:'01', img: HERO2, featured: true,
  label: 'PRIMARY OFFER',
  title:'Custom Metal Decks',
  subtitle: 'Including integrated railings and stairs.',
  desc:'Structural steel deck systems designed and fabricated in-house. Every project includes the full system — deck platform, integrated railings, and stairs as needed. One team, one build, no weak points.',
  tags:['Anti-Slip Diamond Plate','Integrated Railings','Stairs Included','Custom Dimensions','Chicago-Based'],
  points:[
    'Full structural steel deck platform — custom dimensions',
    'Integrated railing system, designed as part of the deck',
    'Stairs fabricated and installed as part of the same system',
    'Anti-slip diamond plate surface — built for Chicago weather',
    'Powder-coated matte black finish, structural-grade',
    'Residential and multi-unit properties — we handle both',
  ],
};

const SUPPORTING_SERVICES = [
  {
    num:'02', img: SRV1,
    title:'Structural Steel Installation',
    desc:'Full structural steel installation for residential and commercial properties. Foundation anchoring to top rail — engineered for load, longevity, and Chicago weather.',
    tags:['Residential','Commercial','Load-Bearing'],
  },
  {
    num:'03', img: SRV2,
    title:'Beam Installation & Reinforcement',
    desc:'Structural beam installation and reinforcement for existing structures. No shortcuts on load-bearing work.',
    tags:['Structural','Load-Bearing','Reinforcement'],
  },
  {
    num:'04', img: PORT1,
    title:'Architectural Metal Systems',
    desc:'Custom railings, handrail systems, canopies, and structural entry systems. Precision-fabricated to complement your architecture.',
    tags:['Railings','Canopies','Entry Systems'],
  },
  {
    num:'05', img: SRV3,
    title:'High-End Gates & Fences',
    desc:'Custom steel gates and privacy fence systems with wood or composite panel integration. Built for Chicago wind loads.',
    tags:['Steel + Wood','Privacy Systems','Security'],
  },
];

export default function Services() {
  useReveal();
  return (
    <div className="page">
      <div className="page-banner">
        <div className="page-banner-grid"/>
        <div className="page-banner-inner">
          <p className="section-label reveal">What We Build</p>
          <h1 className="reveal" style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(44px,6vw,88px)',fontWeight:400,letterSpacing:3,lineHeight:1}}>
            Custom Metal <em style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',color:'var(--gold)',fontWeight:300}}>Decks</em>
          </h1>
          <p className="reveal" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:19,fontWeight:300,color:'var(--gray)',marginTop:16,maxWidth:520}}>
            Structural steel deck systems with integrated railings and stairs. Fabricated in-house. Built for Chicago.
          </p>
        </div>
      </div>

      {/* PRIMARY SERVICE — FULL WIDTH FEATURE */}
      <section style={{padding:'100px 72px',position:'relative',zIndex:2}} className="srv-main">
        <div style={{maxWidth:1280,margin:'0 auto'}}>

          {/* Primary offer badge */}
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:48}}>
            <div style={{width:48,height:1,background:'var(--gold)'}}/>
            <span style={{fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:4,color:'var(--gold)',textTransform:'uppercase'}}>Primary Offer</span>
            <div style={{flex:1,height:1,background:'rgba(196,163,90,0.15)'}}/>
          </div>

          <div className="reveal" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center',marginBottom:80}} >
            <div style={{position:'relative'}}>
              <img src={PRIMARY_SERVICE.img} alt={PRIMARY_SERVICE.title}
                style={{width:'100%',display:'block',objectFit:'cover',height:480,border:'1px solid rgba(196,163,90,0.2)'}}/>
              <div style={{position:'absolute',top:20,left:20,background:'var(--gold)',color:'var(--navy)',fontFamily:"'Cinzel',serif",fontSize:8,letterSpacing:3,padding:'6px 14px'}}>
                CUSTOM FABRICATED
              </div>
            </div>
            <div>
              <h2 style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(28px,3vw,44px)',fontWeight:400,letterSpacing:2,lineHeight:1.1,marginBottom:8}}>
                {PRIMARY_SERVICE.title}
              </h2>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontStyle:'italic',color:'var(--gold)',marginBottom:24,fontWeight:300}}>
                {PRIMARY_SERVICE.subtitle}
              </p>
              <div style={{width:40,height:1,background:'var(--gold)',marginBottom:24}}/>
              <p style={{fontSize:15,lineHeight:1.9,color:'var(--gray)',marginBottom:32}}>{PRIMARY_SERVICE.desc}</p>
              <ul style={{listStyle:'none',marginBottom:36}}>
                {PRIMARY_SERVICE.points.map(p=>(
                  <li key={p} style={{display:'flex',alignItems:'flex-start',gap:12,marginBottom:12,fontSize:14,color:'rgba(253,252,249,0.75)'}}>
                    <span style={{color:'var(--gold)',flexShrink:0,marginTop:2}}>◆</span>{p}
                  </li>
                ))}
              </ul>
              <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:36}}>
                {PRIMARY_SERVICE.tags.map(t=>(
                  <span key={t} style={{fontSize:9,letterSpacing:2,textTransform:'uppercase',border:'1px solid rgba(196,163,90,0.25)',color:'var(--gold)',padding:'5px 12px'}}>{t}</span>
                ))}
              </div>
              <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
                <Link to="/contact" className="btn-primary">Request a Deck Quote →</Link>
                <Link to="/portfolio" className="btn-outline">View Deck Projects</Link>
              </div>
            </div>
          </div>

          {/* Qualification micro-copy */}
          <div className="reveal" style={{background:'rgba(196,163,90,0.04)',border:'1px solid rgba(196,163,90,0.15)',padding:'28px 36px',display:'flex',alignItems:'center',gap:20,marginBottom:100}}>
            <span style={{color:'var(--gold)',fontSize:18,flexShrink:0}}>◆</span>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,fontStyle:'italic',color:'rgba(253,252,249,0.65)',lineHeight:1.6}}>
              We work best with property owners, contractors, and developers looking for precision-fabricated steel deck systems.
              Our projects typically start at <strong style={{color:'var(--cream)',fontStyle:'normal'}}>$8,000</strong> — if you're looking for the lowest bid, we're probably not the right fit.
              If you're looking for the right build, we are.
            </p>
          </div>

          {/* SUPPORTING SERVICES */}
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:48}}>
            <div style={{width:48,height:1,background:'rgba(196,163,90,0.3)'}}/>
            <span style={{fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:4,color:'rgba(196,163,90,0.6)',textTransform:'uppercase'}}>Additional Services</span>
            <div style={{flex:1,height:1,background:'rgba(196,163,90,0.1)'}}/>
          </div>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,color:'var(--gray)',marginBottom:48,maxWidth:600}}>
            Beyond decks, we handle the full range of structural steel work — for clients who need more than one system addressed.
          </p>

          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:3}} className="supp-grid">
            {SUPPORTING_SERVICES.map(({num,img,title,desc,tags})=>(
              <div key={num} className="reveal" style={{display:'grid',gridTemplateColumns:'200px 1fr',gap:0,background:'rgba(14,14,14,0.8)',border:'1px solid rgba(196,163,90,0.08)',overflow:'hidden',transition:'border-color .3s'}}
                onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(196,163,90,0.2)'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(196,163,90,0.08)'}>
                <img src={img} alt={title} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',minHeight:180}}/>
                <div style={{padding:'28px 24px'}}>
                  <div style={{fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:3,color:'rgba(196,163,90,0.4)',marginBottom:10}}>{num}</div>
                  <h3 style={{fontFamily:"'Cinzel',serif",fontSize:14,letterSpacing:2,fontWeight:400,marginBottom:10,lineHeight:1.3}}>{title}</h3>
                  <p style={{fontSize:12,lineHeight:1.7,color:'rgba(253,252,249,0.45)',marginBottom:14}}>{desc}</p>
                  <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                    {tags.map(t=><span key={t} style={{fontSize:8,letterSpacing:2,textTransform:'uppercase',border:'1px solid rgba(196,163,90,0.15)',color:'rgba(196,163,90,0.6)',padding:'3px 8px'}}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="reveal" style={{marginTop:80,background:'rgba(196,163,90,0.04)',border:'1px solid rgba(196,163,90,0.2)',padding:'60px',textAlign:'center'}}>
            <p style={{fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:5,color:'var(--gold)',marginBottom:16,textTransform:'uppercase'}}>Start Your Project</p>
            <h3 style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(22px,3vw,36px)',fontWeight:400,letterSpacing:2,marginBottom:16}}>
              Not sure which service you need?
            </h3>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:'var(--gray)',marginBottom:36,maxWidth:500,margin:'0 auto 36px'}}>
              Tell us about your property and what you're trying to solve. We'll tell you exactly what makes sense structurally.
            </p>
            <Link to="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </div>
        <style>{`
          @media(max-width:960px){
            .srv-main{padding:80px 24px!important;}
            .reveal[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;gap:36px!important;}
            .supp-grid{grid-template-columns:1fr!important;}
            .supp-grid>div{grid-template-columns:1fr!important;}
            .supp-grid>div img{height:180px!important;}
          }
        `}</style>
      </section>
    </div>
  );
}
          <h1 className="reveal">Our <em>Services</em></h1>
          <p className="reveal">Every project measured, fabricated, and installed in-house. No outsourcing. No exceptions.</p>
        </div>
      </div>

      <section style={{padding:'100px 72px',position:'relative',zIndex:2}} className="srv-main">
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          {SERVICES.map(({num,img,title,desc,tags,points,featured},i)=>(
            <div key={num} className="reveal" style={{
              display:'grid',
              gridTemplateColumns: i%2===0 ? '1fr 1fr' : '1fr 1fr',
              gap:80,
              alignItems:'center',
              marginBottom:100,
              paddingBottom:100,
              borderBottom:'1px solid rgba(196,163,90,0.08)',
            }}>
              <div style={{order: i%2===0 ? 0 : 1}} className="srv-img-wrap">
                <div style={{position:'relative'}}>
                  <img src={img} alt={title} style={{width:'100%',display:'block',border:'1px solid rgba(196,163,90,0.15)',objectFit:'cover',height:380}}/>
                  <div style={{position:'absolute',top:20,left:20,fontFamily:"'Cinzel',serif",fontSize:64,color:'rgba(196,163,90,0.12)',lineHeight:1}}>{num}</div>
                  {featured && <div style={{position:'absolute',top:20,right:20,background:'var(--gold)',color:'var(--navy)',fontFamily:"'Cinzel',serif",fontSize:7,letterSpacing:2,padding:'5px 12px'}}>Most Requested</div>}
                </div>
              </div>
              <div style={{order: i%2===0 ? 1 : 0}}>
                <div style={{width:32,height:1,background:'var(--gold)',marginBottom:20}}/>
                <h2 style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(22px,2.5vw,36px)',fontWeight:400,letterSpacing:2,marginBottom:16,lineHeight:1.2}}>{title}</h2>
                <p style={{fontSize:15,lineHeight:1.9,color:'var(--gray)',marginBottom:28}}>{desc}</p>
                <ul style={{listStyle:'none',marginBottom:32}}>
                  {points.map(p=>(
                    <li key={p} style={{display:'flex',alignItems:'flex-start',gap:12,marginBottom:12,fontSize:14,color:'rgba(253,252,249,0.7)'}}>
                      <span style={{color:'var(--gold)',flexShrink:0,marginTop:2}}>◆</span>{p}
                    </li>
                  ))}
                </ul>
                <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:32}}>
                  {tags.map(t=>(
                    <span key={t} style={{fontSize:9,letterSpacing:2,textTransform:'uppercase',border:'1px solid rgba(196,163,90,0.2)',color:'var(--gold)',padding:'5px 12px'}}>{t}</span>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary">Request a Quote →</Link>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="reveal" style={{background:'rgba(196,163,90,0.04)',border:'1px solid rgba(196,163,90,0.2)',padding:'60px',textAlign:'center'}}>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:32,color:'rgba(196,163,90,0.15)',marginBottom:20}}>◆</div>
            <h3 style={{fontFamily:"'Cinzel',serif",fontSize:24,letterSpacing:2,fontWeight:400,marginBottom:16}}>Don't see your project?</h3>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:'var(--gray)',marginBottom:32,maxWidth:500,margin:'0 auto 32px'}}>Every structure is custom. If you need it built in steel — we can engineer and build it from scratch.</p>
            <Link to="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </div>
        <style>{`
          @media(max-width:960px){
            .srv-main{padding:80px 24px!important;}
            .reveal[style*="grid-template-columns"]{grid-template-columns:1fr!important;gap:36px!important;}
            .srv-img-wrap{order:0!important;}
            .reveal[style*="grid-template-columns"]>div:last-child{order:1!important;}
          }
        `}</style>
      </section>
    </div>
  );
}
