const { Headline, Eyebrow, Button, ArtFrame, ArtScripture, LowerThird } = window.JourneyChurchDesignSystem_84738d;
const SR_A = '../../assets';
const SL = SR_A+'/logo';

function SeriesBlock({ lines, eyebrowSize=34, blkStyle, gap=22 }){
  return (<div className="blk" style={{gap,...blkStyle}}>
    {lines}
  </div>);
}

function SeriesScreen(){
  useFitSeriesType();
  return (<>
    <section className="on-deep grain" style={{paddingTop:'clamp(4rem,8vw,7rem)'}}>
      <div className="container-x">
        <Eyebrow dot>Brand · Sermon series</Eyebrow>
        <Headline as="h1" size="hero" accent="itself" style={{marginTop:'1rem',maxWidth:'16ch'}}>A series can look like</Headline>
        <p className="t-lead muted measure" style={{marginTop:'2rem'}}>Series art is the one place the system steps back. Each series brings its own type, color, and imagery. One rule holds it to Journey, and it is short.</p>
        <div className="btn-row" style={{marginTop:'2.5rem'}}><Button>Request a graphic</Button><Button variant="ghost" href="#download">Download</Button></div>
      </div>
    </section>

    <section className="container-x b-sect" id="rule">
      <div className="b-head"><span className="b-n">01</span><div><p className="t-eyebrow text-ember">The rule</p>
        <h2 className="display t-h2" style={{margin:'.3rem 0 0'}}>One rule. Three strong <span className="display-italic">suggestions</span>.</h2></div></div>
      <div className="g2" style={{marginTop:'2rem'}}>
        <div className="box" style={{background:'var(--ink-800)',color:'var(--ink-50)'}}><h4 style={{color:'#fff'}}>The rule</h4>
          <p style={{color:'rgba(255,255,255,.85)'}}>The reversed horizontal logo sits <b style={{color:'#fff'}}>bottom-right at 360px</b> on 1920-wide art, and <b style={{color:'#fff'}}>bottom-left at 280px</b> on 1080 squares. Same corner, same size, every series, no exceptions. Scripture always stays in Newsreader.</p>
          <p style={{color:'rgba(255,255,255,.7)',fontSize:'.875rem'}}>That is the entire contract. Everything else is yours.</p></div>
        <div className="box"><h4>Three suggestions</h4><ul>
          <li>A series identity is <b>one typeface, one palette, one image idea</b>. Write those three down before you open the design tool.</li>
          <li>The package is <b>title (16:9), square, story, and a lower-third skin</b>. Don't design more than that up front.</li>
          <li>A free look is not free copy. The voice rules still apply — no exclamation points, no invented Scripture.</li>
        </ul></div>
      </div>
      <dl className="spec">
        <dt>Sizes</dt><dd>Title 1920 × 1080 · Square 1080 × 1080 · Story 1080 × 1920 · 4K wall 3840 × 2160.</dd>
        <dt>How many</dt><dd>Four to six series a year. That volume is what makes a bespoke look per series workable.</dd>
        <dt>Outside designers</dt><dd>Send a flattened PNG at full size. The office builds the rest of the package around it.</dd>
      </dl>
    </section>

    <section className="container-x b-sect" id="example">
      <div className="b-head"><span className="b-n">02</span><div><p className="t-eyebrow text-ember">Worked example</p>
        <h2 className="display t-h2" style={{margin:'.3rem 0 0'}}>A House Built for His <span className="display-italic">Presence</span>.</h2></div></div>
      <p className="t-lead measure muted">Our Culture, Vision, &amp; Values. A collage built from twenty-two of our own photographs, a wide grotesque, outline over solid, and red in four small places.</p>
      <div className="fr" style={{'--w':1920,'--h':1080,marginTop:'2rem'}}><div className="art" style={{justifyContent:'center',alignItems:'center',padding:0}}>
        <div className="sbg" style={{backgroundImage:`url('${SR_A}/series/collage-a.png')`}}/><span className="spine"/>
        <p className="big gw" style={{right:-140,bottom:-70,fontSize:560}}>Presence</p>
        <div className="blk"><p className="eb">Our Culture, Vision, &amp; Values</p><p className="big out" data-fit>A House Built</p>
          <div className="ln"><span className="rl"/><p className="big out" data-size="0">For His</p></div><p className="big" data-fit>Presence</p></div>
        <img className="lgc" src={SL+'/horizontal-ember_cream.png'} alt="Journey Church" style={{right:120,bottom:100,width:360}}/>
      </div></div>
      <div className="g2" style={{marginTop:'2rem'}}>
        <div className="box"><h4>What this series brought</h4><ul>
          <li><b>Archivo Expanded Black</b> — a wide, heavy grotesque. Not the website's face.</li>
          <li><b>A photo collage</b> — twenty-two frames cut rough, layered, desaturated, grained.</li>
          <li><b>Outline over solid</b> — the first lines stroked, only the key word filled.</li>
          <li><b>The ghost word</b> — "Presence" repeated huge and outlined, bleeding off two edges.</li>
        </ul></div>
        <div className="box"><h4>Where the red lives</h4><ul>
          <li>The rule that fills the short line.</li>
          <li>A thin spine down the left edge, on every piece.</li>
          <li>The eyebrow — which also carries the series' subtitle.</li>
          <li>The J in the logo. Four small places, no red fields.</li>
        </ul></div>
      </div>
    </section>

    <section className="container-x b-sect" id="package">
      <div className="b-head"><span className="b-n">03</span><div><p className="t-eyebrow text-ember">The package</p>
        <h2 className="display t-h2" style={{margin:'.3rem 0 0'}}>Seven pieces, one <span className="display-italic">decision</span>.</h2></div></div>
      <div className="g2" style={{marginTop:'2rem'}}>
        <div className="ex"><div className="fr" style={{'--w':1080,'--h':1080}}><div className="art" style={{justifyContent:'center',alignItems:'flex-start',padding:'0 80px 0 102px'}}>
          <div className="sbg" style={{backgroundImage:`url('${SR_A}/series/collage-a-sq.png')`}}/><span className="spine" style={{width:18}}/>
          <p className="big gw" style={{right:-110,bottom:-40,fontSize:330}}>Presence</p>
          <div className="blk" style={{width:920,gap:16}}><p className="eb" style={{fontSize:30,marginBottom:18}}>Our Culture, Vision, &amp; Values</p>
            <p className="big out" data-fit>A House</p><p className="big out" data-fit>Built For</p>
            <div className="ln" style={{gap:32}}><span className="rl" style={{height:12}}/><p className="big out" data-size="0">His</p></div>
            <p className="big" data-fit>Presence</p></div>
          <img className="lgc" src={SL+'/horizontal-ember_cream.png'} alt="Journey Church" style={{left:80,bottom:80,width:280}}/>
        </div></div><p className="ex-l">Square · 1080</p><p className="ex-n">Feed. Four lines instead of three, logo bottom-left.</p></div>
        <div className="ex"><div className="fr" style={{'--w':1080,'--h':1920}}><div className="art" style={{justifyContent:'center',alignItems:'flex-start',padding:'0 80px 0 102px'}}>
          <div className="sbg" style={{backgroundImage:`url('${SR_A}/series/collage-a-story.png')`}}/><span className="spine" style={{width:18}}/>
          <p className="big gw" style={{right:-110,bottom:-40,fontSize:330}}>Presence</p>
          <div className="blk" style={{width:920,gap:18}}><p className="eb" style={{fontSize:30,marginBottom:22}}>Our Culture, Vision, &amp; Values</p>
            <p className="big out" data-fit>A House</p><p className="big out" data-fit>Built For</p>
            <div className="ln" style={{gap:32}}><span className="rl" style={{height:12}}/><p className="big out" data-size="0">His</p></div>
            <p className="big" data-fit>Presence</p></div>
          <img className="lgc" src={SL+'/horizontal-ember_cream.png'} alt="Journey Church" style={{left:80,bottom:250,width:300}}/>
        </div></div><p className="ex-l">Story · 1080 × 1920</p><p className="ex-n">Inside the 250px safe zone top and bottom.</p></div>
      </div>
      <div className="g2" style={{marginTop:'2rem'}}>
        <div className="ex"><div className="fr" style={{'--w':1920,'--h':1080}}><div className="art" style={{justifyContent:'center',padding:140}}>
          <div className="sbg" style={{backgroundImage:`url('${SR_A}/series/collage-a.png')`}}/><span className="sbg" style={{background:'rgba(0,0,0,.62)',zIndex:1}}/><span className="spine"/>
          <p className="big gw" style={{left:-80,top:-140,fontSize:700,WebkitTextStrokeColor:'rgba(255,255,255,.14)'}}>02</p>
          <div style={{position:'relative',zIndex:3,display:'flex',flexDirection:'column',gap:40}}>
            <p style={{margin:0,font:"800 30px/1 'Inter Tight',sans-serif",letterSpacing:'.22em',textTransform:'uppercase',color:'#ff3a3a'}}>Week two</p>
            <p className="big" style={{fontSize:150,whiteSpace:'normal',maxWidth:1500}}>Rooms He Hasn't<br/>Been Given</p>
            <span style={{width:220,height:14,background:'#ff3a3a',display:'block'}}/></div>
        </div></div><p className="ex-l">Sermon title slide</p><p className="ex-n">Collage dimmed, week number ghosted, short red rule as the full stop. Title is a placeholder.</p></div>
        <div className="ex"><div className="fr" style={{'--w':1920,'--h':1080}}><div className="art" style={{justifyContent:'center',padding:140}}>
          <div className="sbg" style={{backgroundImage:`url('${SR_A}/series/collage-a.png')`}}/><span className="sbg" style={{background:'rgba(0,0,0,.62)',zIndex:1}}/><span className="spine"/>
          <div style={{position:'relative',zIndex:3,display:'flex',flexDirection:'column',gap:44}}>
            <p style={{margin:0,font:"600 28px/1 'Inter',sans-serif",letterSpacing:'.24em',textTransform:'uppercase',color:'#ff3a3a'}}>Ephesians 2:22</p>
            <p className="a-scripture" style={{'--h1':'92px',color:'#fff',maxWidth:'30ch'}}>In him you also are being built together into a dwelling place for God by the <em>Spirit</em>.</p></div>
        </div></div><p className="ex-l">Scripture slide</p><p className="ex-n">Newsreader, always — this is the one thing a series never changes.</p></div>
        <div className="ex"><div className="fr" style={{'--w':1920,'--h':1080}}><div className="art" style={{padding:0,background:'#222'}}>
          <div className="sbg" style={{backgroundImage:`url('${SR_A}/series/collage-a.png')`,filter:'blur(6px) brightness(.5)'}}/><span className="spine"/>
          <LowerThird name="Adam Hardegree" role="Lead Pastor" left={120} bottom={110} seriesFace/>
        </div></div><p className="ex-l">Lower third</p><p className="ex-n">Name in the series face. The red bar and the position stay house.</p></div>
        <div className="ex"><div className="fr" style={{'--w':1080,'--h':1080}}><div className="art" style={{justifyContent:'space-between',padding:'80px 80px 80px 102px'}}>
          <div className="sbg" style={{backgroundImage:`url('${SR_A}/series/collage-a-sq.png')`}}/><span className="sbg" style={{background:'rgba(0,0,0,.62)',zIndex:1}}/><span className="spine" style={{width:18}}/>
          <p className="big gw" style={{right:-110,top:-60,fontSize:330}}>Presence</p>
          <div style={{position:'relative',zIndex:3}}>
            <p style={{margin:0,font:"800 30px/1 'Inter Tight',sans-serif",letterSpacing:'.22em',textTransform:'uppercase',color:'#ff3a3a'}}>Our Culture, Vision, &amp; Values</p>
            <p style={{margin:'12px 0 0',font:"600 24px/1 'Inter',sans-serif",letterSpacing:'.24em',textTransform:'uppercase',color:'rgba(255,255,255,.75)'}}>New series · Begins Sunday Oct 18</p></div>
          <div className="blk" style={{width:880,gap:14,filter:'none'}}><p className="big out" data-fit>A House</p><p className="big out" data-fit>Built For</p>
            <div className="ln" style={{gap:32}}><span className="rl" style={{height:12}}/><p className="big out" data-size="0">His</p></div>
            <p className="big" data-fit>Presence</p></div>
          <div style={{position:'relative',zIndex:3,display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:40}}>
            <img src={SL+'/horizontal-ember_cream.png'} alt="Journey Church" style={{width:280}}/>
            <p style={{margin:0,font:"400 30px/1.4 'Inter',sans-serif",color:'rgba(255,255,255,.85)',textAlign:'right'}}>Sundays<br/><b style={{color:'#fff'}}>9:00 &amp; 11:00 AM</b></p></div>
        </div></div><p className="ex-l">Announce card</p><p className="ex-n">The feed post that launches the series. Date and times bottom-right.</p></div>
      </div>
    </section>

    <section className="container-x b-sect" id="download">
      <div className="b-head"><span className="b-n">04</span><div><p className="t-eyebrow text-ember">Download</p>
        <h2 className="display t-h2" style={{margin:'.3rem 0 0'}}>Take the <span className="display-italic">files</span>.</h2></div></div>
      <div className="g3" style={{marginTop:'2rem'}}>
        <div className="ex"><p className="ex-l">A House Built for His Presence</p><p className="ex-n">Finished artwork, flattened PNG.</p>
          <div className="dl">{['Title 1920 × 1080','Square 1080','Story 1080 × 1920'].map(t=><a key={t} href="#download" onClick={(e)=>e.preventDefault()}>{t}</a>)}</div></div>
        <div className="ex"><p className="ex-l">The collage, clean</p><p className="ex-n">Background only, no type. Build your own layouts on it.</p>
          <div className="dl">{['1920 × 1080','1080 square','1080 × 1920'].map(t=><a key={t} href="#download" onClick={(e)=>e.preventDefault()}>{t}</a>)}</div></div>
        <div className="ex"><p className="ex-l">Logo, for the corner</p><p className="ex-n">The reversed lockup this series uses.</p>
          <div className="dl">{['Red mark, cream type','All white'].map(t=><a key={t} href="#download" onClick={(e)=>e.preventDefault()}>{t}</a>)}</div></div>
      </div>
      <div className="box" style={{marginTop:'2rem',background:'var(--ink-50)',border:'1px solid var(--ink-200)'}}><h4>Before you use these</h4><ul>
        <li><b>Real people are in the collage.</b> Twenty-two of them. Anyone who hasn't agreed to appear on a screen or a feed comes out first.</li>
        <li><b>Sermon titles and dates above are placeholders.</b> Copy is Adam's.</li>
        <li><b>Archivo Expanded</b> is standing in for a licensed wide grotesque. If the series goes to print at size, check with the office first.</li>
      </ul></div>
    </section>
  </>);
}
window.SeriesScreen = SeriesScreen;
