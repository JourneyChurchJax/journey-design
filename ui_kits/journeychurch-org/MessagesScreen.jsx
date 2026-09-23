const { Headline, Eyebrow, Button, Scripture } = window.JourneyChurchDesignSystem_84738d;
const MSG_A = '../../assets';
const WEEKS = [
  { n:'01', title:'A House Built For His Presence', date:'Sun Oct 18', ref:'Ephesians 2:22' },
  { n:'02', title:'Rooms He Hasn\u2019t Been Given', date:'Sun Oct 25', ref:'Psalm 27:4' },
  { n:'03', title:'Making Room', date:'Sun Nov 1', ref:'' },
];

function MessagesScreen(){
  const [active, setActive] = React.useState(0);
  const w = WEEKS[active];
  return (<>
    <section className="on-deep" style={{paddingTop:'clamp(4rem,8vw,7rem)'}}>
      <div className="container-x">
        <Eyebrow dot>Messages</Eyebrow>
        <Headline as="h1" size="display" accent="week" style={{marginTop:'1rem'}}>Catch up on last</Headline>
      </div>
    </section>

    <section className="on-deep" style={{paddingTop:0}}>
      <div className="container-x">
        <div style={{position:'relative',background:'#000'}}>
          <img src={MSG_A+'/series/series-a-house-built-title-1920x1080.png'} alt="A House Built for His Presence" style={{width:'100%',display:'block',opacity:.9}}/>
          <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <button aria-label="Play" style={{width:96,height:96,borderRadius:999,border:0,background:'var(--ember)',color:'#fff',cursor:'pointer',fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1rem',letterSpacing:'.02em'}}>Play</button>
          </div>
        </div>
        <div className="split" style={{marginTop:'2.5rem'}}>
          <div className="stack">
            <Eyebrow>Week {w.n} · {w.date}</Eyebrow>
            <Headline size="h2">{w.title}</Headline>
            <p className="t-lead muted">Adam Hardegree · Lead Pastor</p>
            <div className="btn-row"><Button size="sm">Watch</Button><Button size="sm" variant="ghost">Listen</Button><Button size="sm" variant="ghost">Notes</Button></div>
          </div>
          <div className="stack-lg">
            {w.ref ? <Scripture reference={w.ref}>In him you also are being built together into a dwelling place for God by the <em>Spirit</em>.</Scripture> : null}
            <hr className="rule-dark"/>
            <div className="stack">
              <p className="t-eyebrow" style={{color:'var(--ink-300)'}}>All weeks</p>
              {WEEKS.map((it,i)=>(
                <button key={it.n} onClick={()=>setActive(i)} style={{textAlign:'left',background:'none',border:0,borderTop:'1px solid rgba(247,244,240,.16)',padding:'1rem 0',cursor:'pointer',display:'flex',gap:'1.25rem',alignItems:'baseline',color:i===active?'var(--ember)':'var(--ink-50)',font:'inherit'}}>
                  <span className="num" style={{color:i===active?'var(--ember)':'var(--ink-300)',fontSize:'1.1rem'}}>{it.n}</span>
                  <span style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:'1.05rem',letterSpacing:'-.01em'}}>{it.title}</span>
                  <span className="muted" style={{marginLeft:'auto',fontSize:'.8rem',letterSpacing:'.14em',textTransform:'uppercase'}}>{it.date}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container-x">
      <Eyebrow>Past series</Eyebrow>
      <div className="grid3" style={{marginTop:'1.5rem'}}>
        <img src={MSG_A+'/series/series-a-house-built-square-1080.png'} alt="A House Built for His Presence, square" style={{width:'100%',display:'block'}}/>
        <div style={{background:'var(--ink-100)',aspectRatio:'1/1',display:'flex',alignItems:'flex-end',padding:'1.25rem'}}><p className="muted" style={{margin:0,fontSize:'.875rem'}}>Earlier series artwork was not part of the brand handoff. This slot stays blank on purpose.</p></div>
        <div style={{background:'var(--ink-100)',aspectRatio:'1/1'}}/>
      </div>
    </section>
  </>);
}
window.MessagesScreen = MessagesScreen;
