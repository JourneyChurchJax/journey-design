const { Headline, Eyebrow, Button, ArtFrame, ArtText, ArtScripture, Logistics, Logo, LowerThird, Meter } = window.JourneyChurchDesignSystem_84738d;
const OV_A = '../../assets';
const L = OV_A+'/logo';

function Sect({id,n,eyebrow,title,accent,children}){
  return (<section className="container-x b-sect" id={id}>
    <div className="b-head"><span className="b-n">{n}</span><div><p className="t-eyebrow text-ember">{eyebrow}</p>
    <h2 className="display t-h2" style={{margin:'.3rem 0 0'}}>{title} <span className="display-italic">{accent}</span>.</h2></div></div>
    {children}
  </section>);
}

function OverviewScreen({setPage}){
  useFitSeriesType();
  return (<>
    <section className="on-deep grain" style={{paddingTop:'clamp(4rem,8vw,7rem)'}}>
      <div className="container-x">
        <Eyebrow dot>Journey Command · Brand</Eyebrow>
        <Headline as="h1" size="hero" accent="looks" style={{marginTop:'1rem',maxWidth:'14ch'}}>How Journey</Headline>
        <p className="t-lead muted measure" style={{marginTop:'2rem'}}>One red, four typefaces with four jobs, and a short list of things we do and don't do. If you are making a graphic, a slide, a flier, or a shirt for Journey, everything you need is on this page.</p>
        <div className="btn-row" style={{marginTop:'2.5rem'}}><Button href="#request">Request a graphic</Button><Button variant="ghost" href="#download">Download assets</Button></div>
      </div>
    </section>

    <Sect id="logo" n="01" eyebrow="Logo" title="Three lockups. Same" accent="corner, every time">
      <p className="t-lead measure muted">Horizontal is the default. Stacked is for square formats. The mark alone is for favicons, app icons, and anywhere the name is already in the copy.</p>
      <div className="g3" style={{marginTop:'2rem'}}>
        {[
          ['horizontal-ember_ink.png','on-cream','Horizontal · on cream','The default. Red mark, ink wordmark.','80%'],
          ['horizontal-ember_cream.png','on-ink','Horizontal · on dark','Mark stays red, wordmark goes cream.','80%'],
          ['horizontal-white.png','on-red','Reversed · one color','On red, on photos, and any busy ground.','80%'],
          ['stacked-ember_ink.png','on-cream','Stacked','Profile pictures, stickers, apparel, anything near square.','52%'],
          ['mark-ember.png','on-ink','Mark','Favicons, app icons, and when the name is already written.','32%'],
          ['wordmark-ink.png','on-cream','Wordmark','Only when the mark already appears nearby.','80%'],
        ].map(([f,g,label,note,mw])=>(
          <div className="ex" key={f}><div className={'logo-cell '+g}><img src={L+'/'+f} alt={label} style={{maxWidth:mw}}/></div>
          <p className="ex-l">{label}</p><p className="ex-n">{note}</p></div>
        ))}
      </div>
      <dl className="spec">
        <dt>Clear space</dt><dd>The height of the J-circle on all four sides. Nothing enters it — not a caption, not a page edge.</dd>
        <dt>Minimum</dt><dd>Horizontal 120px on screen, 1.25in in print. Mark 24px / 0.25in.</dd>
        <dt>Placement</dt><dd>On a graphic, the logo sits in the same corner at the same size every time: bottom-right at 360px on 1920-wide art, bottom-left at 280px on 1080 squares.</dd>
        <dt>Never</dt><dd>Stretch it, rotate it, outline it, add a shadow, recolor the wordmark, crop it, ghost it, or use it as a background texture.</dd>
        <dt>Files</dt><dd>PNG with transparency, in <code>/brand/img/logo/</code>. Print and apparel need the vector — ask the office.</dd>
      </dl>
    </Sect>

    <Sect id="color" n="02" eyebrow="Color" title="Cream, ink, and one" accent="red">
      <div className="g4" style={{marginTop:'2rem'}}>
        {[['#ff3a3a','Journey red · #ff3a3a','The accent. One per view — if two things are red, one is probably wrong.'],
          ['#9a1818','Small red · #9a1818','Red text under about 26px on cream. An accessibility fallback, not a second color.'],
          ['#f7f4f0','Cream · #f7f4f0','The default ground, and text on dark.'],
          ['#0a0a0a','Ink · #0a0a0a','Body text and the dark ground. #050505 for the deepest field.']].map(([c,b,s])=>(
          <div className="sw" key={c}><i style={{background:c,border:c==='#f7f4f0'?'1px solid #d8d1c5':undefined}}/><b>{b}</b><span>{s}</span></div>
        ))}
      </div>
      <div className="g4" style={{marginTop:'1.25rem'}}>
        {[['#ece7df','Alternate field'],['#d8d1c5','Borders, dividers'],['#9a948a','Muted on dark'],['#5a574f','Muted on cream']].map(([c,s])=>(
          <div className="sw" key={c}><i style={{background:c}}/><b>{c}</b><span>{s}</span></div>
        ))}
      </div>
      <div className="box" style={{marginTop:'2rem'}}><h4>The rules</h4><ul>
        <li>Red is never a background — only a button, a pull-quote, or a thin rule.</li>
        <li>There is no second color. No success-green, no warning-amber, no ministry colors. If something needs to stand apart, use the ink ramp or a dark section.</li>
        <li>Red text smaller than about 26px on cream must use #9a1818. #ff3a3a at small sizes fails contrast.</li>
        <li>On dark grounds and photos, the accent word turns white and the red shows up in the eyebrow or the mark — one, not both.</li>
      </ul></div>
    </Sect>

    <Sect id="type" n="03" eyebrow="Type" title="Four faces, four" accent="jobs">
      <div className="g2" style={{marginTop:'2rem'}}>
        <div className="ex"><div className="box" style={{background:'var(--ink-50)',border:'1px solid var(--ink-200)',minHeight:'9rem',justifyContent:'center'}}>
          <p className="display" style={{fontSize:'clamp(1.9rem,4vw,2.8rem)'}}>Come as you <span className="display-italic">are</span>.</p></div>
          <p className="ex-l">Inter Tight 800 — the church's voice</p><p className="ex-n">Headlines, titles, numbers. Tracking −0.035em, line-height 0.95. Every headline gets exactly one italic red word, and it is the emotional beat — never "the," "and," or "of."</p></div>
        <div className="ex"><div className="box" style={{background:'var(--ink-50)',border:'1px solid var(--ink-200)',minHeight:'9rem',justifyContent:'center'}}>
          <p style={{margin:0,fontSize:'1.05rem',lineHeight:1.65,maxWidth:'34ch'}}>Sundays 9:00 &amp; 11:00 AM. Kids have their own space from birth through fifth grade. Come early, coffee's on.</p></div>
          <p className="ex-l">Inter 400 — the plain speech</p><p className="ex-n">Body, logistics, captions, buttons. Never below 1rem on the web, never below 26px on a 1080 graphic.</p></div>
        <div className="ex"><div className="box on-deep" style={{minHeight:'9rem',justifyContent:'center'}}>
          <p className="scripture-ref">Ephesians 2:22</p><p className="scripture" style={{color:'var(--ink-50)'}}>In him you also are being built together into a dwelling place for God by the <em>Spirit</em>.</p></div>
          <p className="ex-l">Newsreader — Scripture only</p><p className="ex-n">Quoted Scripture and pull-quotes. Never a headline, never a title, never the church speaking. The italic marks the beat instead of red.</p></div>
        <div className="ex"><div className="box" style={{background:'#0b0a09',minHeight:'9rem',justifyContent:'center'}}>
          <p className="big" style={{fontSize:'clamp(2rem,5vw,3.2rem)',whiteSpace:'normal'}}>Series Titles</p></div>
          <p className="ex-l">Archivo Expanded Black — series &amp; stage</p><p className="ex-n">Sermon series titles and stage graphics, where it has to read from row twenty. Never on the website body, never for logistics.</p></div>
      </div>
    </Sect>

    <Sect id="photo" n="04" eyebrow="Photography" title="Our room, our" accent="people">
      <div className="g2" style={{marginTop:'2rem'}}>
        <ArtFrame width={1200} height={700} pad={70} photo={OV_A+'/photo/praying-in-the-crowd.jpg'}>
          <ArtText eyebrow="Photo treatment" eyebrowSize={24} size={86} accent="slightly">Natural color, pulled</ArtText>
        </ArtFrame>
        <div className="box"><h4>How a photo gets treated</h4><ul>
          <li>Saturation to about 85%, contrast up a touch. Never a duotone, never a color wash, never a blur.</li>
          <li>A scrim from transparent down to 88% ink, so type always sits on darkness rather than on a face.</li>
          <li>Grain over the top of large dark areas.</li>
          <li>Crops favor hands, posture, and the room over faces in focus. Real moments, never posed.</li>
          <li>Every photo needs alt text describing what is happening, not just what is pictured.</li>
          <li>Anyone who has not agreed to appear comes out before it runs. Children need a parent's yes.</li>
        </ul></div>
      </div>
    </Sect>

    <Sect id="social" n="05" eyebrow="Social" title="Four cards. That's the whole" accent="deck">
      <p className="t-lead measure muted">Every feed post is one of these four. If a post doesn't fit one, it probably needs a page instead of a graphic.</p>
      <div className="g4" style={{marginTop:'2rem'}}>
        <div className="ex">
          <ArtFrame width={1080} height={1080} pad={80} tooth>
            <span className="ghost" style={{fontSize:900,right:-60,bottom:-230}}>72</span>
            <ArtText eyebrow="Monday · 72 Hours of Prayer" size={126} accent="Saturday">Don't stop until</ArtText>
            <Logo base={L} on="cream" width={280}/>
          </ArtFrame>
          <p className="ex-l">Type on cream</p><p className="ex-n">Paper tooth, one ghosted numeral, logo bottom-left.</p></div>
        <div className="ex">
          <ArtFrame width={1080} height={1080} pad={80} photo={OV_A+'/photo/kneeling-by-the-chairs.jpg'}>
            <ArtText eyebrow="Prayer Night · Wednesday 7 PM" size={126} accent="boldly">Pray</ArtText>
            <Logo base={L} on="photo" width={280}/>
          </ArtFrame>
          <p className="ex-l">Type on photo</p><p className="ex-n">Reversed logo. Never the red mark on a photo.</p></div>
        <div className="ex">
          <ArtFrame width={1080} height={1080}>
            <div style={{height:'100%',display:'grid',gridTemplateRows:'1fr 1fr'}}>
              <div className="field-cream tooth" style={{padding:80,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <p className="a-eb">Fasting tips · 03</p><p className="a-h" style={{'--h1':'94px'}}>Fasting is not about not <em>eating</em>.</p></div>
              <div className="field-ink" style={{padding:80,display:'flex',flexDirection:'column',justifyContent:'space-between',position:'relative',overflow:'hidden'}}>
                <span className="ghost" style={{fontSize:640,right:-40,top:-120}}>03</span>
                <p className="a-body" style={{'--body':'34px',maxWidth:'22ch'}}>It's about making room. Skip the meal, keep the appointment.</p>
                <Logo base={L} on="dark" width={280}/></div>
            </div>
          </ArtFrame>
          <p className="ex-l">Two-field editorial</p><p className="ex-n">Cream over ink, hard seam at the middle.</p></div>
        <div className="ex">
          <ArtFrame width={1080} height={1080} pad={80} ground="deep" grain>
            <ArtScripture reference="Psalm 27:4" size={68}>One thing I have asked of the Lord, that will I seek after: that I may dwell in the house of the Lord all the days of my life, to gaze upon the beauty of the Lord and to <em>inquire in his temple</em>.</ArtScripture>
            <Logo base={L} variant="mark" on="dark" width={96}/>
          </ArtFrame>
          <p className="ex-l">Scripture</p><p className="ex-n">Newsreader, reference as the red eyebrow, mark only.</p></div>
      </div>
      <dl className="spec">
        <dt>Sizes</dt><dd>Feed 1080 × 1080, safe zone 80px. Story 1080 × 1920, safe zone 250px top and bottom.</dd>
        <dt>Type floor</dt><dd>Eyebrow 26px · Headline 96px · Body 34px. Nothing smaller, ever.</dd>
        <dt>One idea</dt><dd>The eyebrow names the moment, the headline says it, the body adds a fact only if there is one. No exclamation points.</dd>
        <dt>One device</dt><dd>A ghosted numeral or a ghosted word — never both, never on a photo. The logo is never used as a device.</dd>
      </dl>
    </Sect>

    <Sect id="series" n="06" eyebrow="Sermon series" title="A series can look like" accent="itself">
      <p className="t-lead measure muted">Series art is the one place the system steps back. Each series gets its own type, color, and imagery. The only rule is the logo — same corner, same size — plus Scripture staying in Newsreader.</p>
      <div className="fr" style={{'--w':1920,'--h':1080,marginTop:'2rem'}}><div className="art" style={{justifyContent:'center',alignItems:'center',padding:0}}>
        <div className="sbg" style={{backgroundImage:`url('${OV_A}/series/collage-a.png')`}}/>
        <span className="spine"/>
        <p className="big gw" style={{right:-140,bottom:-70,fontSize:560}}>Presence</p>
        <div className="blk"><p className="eb">Our Culture, Vision, &amp; Values</p><p className="big out" data-fit>A House Built</p>
          <div className="ln"><span className="rl"/><p className="big out" data-size="0">For His</p></div><p className="big" data-fit>Presence</p></div>
        <img className="lgc" src={L+'/horizontal-ember_cream.png'} alt="Journey Church" style={{right:120,bottom:100,width:360}}/>
      </div></div>
      <div className="g2" style={{marginTop:'2rem'}}>
        <div className="box"><h4>What made this a Journey series</h4><ul>
          <li>The collage is built from our own photographs — twenty-two of them, cut rough and layered.</li>
          <li>A red rule, a red spine down the left edge, a red eyebrow, and the red J in the logo. Four small places, no red backgrounds.</li>
          <li>The key word ghosted off the edge, outlined — the same device the feed cards use with numerals.</li>
          <li>The logo in the locked corner at the locked size. That is the whole contract with the system.</li>
          <li>Scripture slides stay in Newsreader, because that never changes.</li>
        </ul><div className="dl" style={{marginTop:'.5rem'}}><a href="#series" onClick={(e)=>{e.preventDefault();setPage('series');window.scrollTo(0,0)}}>Full series page and downloads →</a></div></div>
        <div className="ex"><ArtFrame width={1080} height={1080} pad={80} tooth>
          <span className="ghost" style={{fontSize:760,right:-40,top:-140}}>HR</span>
          <ArtText eyebrow="Healing Room · Quarterly" size={108} accent="prayed">Come and be</ArtText>
          <Logistics items={[{label:'When',value:'Sun Oct 12 · 6 PM'},{label:'Where',value:'The Chapel'}]}/>
          <Logo base={L} on="cream" width={280}/>
        </ArtFrame><p className="ex-l">And the house look, for comparison</p><p className="ex-n">Everything that is not a series stays in Inter Tight.</p></div>
      </div>
    </Sect>

    <Sect id="events" n="07" eyebrow="Events" title="Five kinds of event, one logistics" accent="block">
      <p className="t-lead measure muted">The look flexes by what kind of event it is. The block that tells a person when and where is set identically every time — that is what makes it an event graphic and not a mood board.</p>
      <div className="g3" style={{marginTop:'2rem'}}>
        <div className="ex"><ArtFrame width={1080} height={1080} pad={80} ground="dark">
          <span className="ghost" style={{fontSize:520,right:-50,top:-60,fontStyle:'italic',fontWeight:700}}>groups</span>
          <ArtText eyebrow="Discipleship Groups · Launching January" size={112} accent="renamed">Small groups,</ArtText>
          <Logistics items={[{label:'Sign-ups open',value:'Jan 4 · Lobby'},{label:'Groups start',value:'Week of Jan 18'}]}/>
          <Logo base={L} on="dark" width={280}/>
        </ArtFrame><p className="ex-l">Launch</p></div>
        <div className="ex"><ArtFrame width={1080} height={1080} pad={80} photo={OV_A+'/photo/congregation-hands-raised.jpg'}>
          <ArtText eyebrow="Christmas at Journey" size={180} series>Light Has Come</ArtText>
          <Logistics items={[{label:'Services',value:'Dec 23 & 24 · 5 PM'},{label:'Kids',value:'Every service'}]}/>
          <Logo base={L} on="photo" width={280}/>
        </ArtFrame><p className="ex-l">Big event</p></div>
        <div className="ex"><ArtFrame width={1080} height={1080} pad={80} tooth>
          <ArtText eyebrow="Arise &amp; Build" size={112} accent="way">Two-thirds of the</ArtText>
          <div style={{display:'flex',flexDirection:'column',gap:28}}>
            <div className="a-meter"><span style={{width:'66%'}}/></div>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:26,letterSpacing:'.14em',textTransform:'uppercase',fontWeight:600,color:'var(--ink-400)'}}><span>Raised · $660,000</span><span>Goal · figure TBC</span></div>
          </div>
          <Logo base={L} on="cream" width={280}/>
        </ArtFrame><p className="ex-l">Giving &amp; building</p></div>
      </div>
      <div className="dl" style={{marginTop:'1.5rem'}}><a href="#events" onClick={(e)=>{e.preventDefault();setPage('events');window.scrollTo(0,0)}}>All five kinds, sizes, and downloads →</a></div>
    </Sect>

    <Sect id="stage" n="08" eyebrow="Stage &amp; screen" title="Built to be read from row" accent="twenty">
      <div className="g2" style={{marginTop:'2rem'}}>
        <div className="ex"><ArtFrame width={1920} height={1080} photo={OV_A+'/photo/bowed-at-the-stage.jpg'} scrim="flat">
          <LowerThird name="Adam Hardegree" role="Lead Pastor"/>
        </ArtFrame><p className="ex-l">Lower third</p><p className="ex-n">Left 96px, bottom 96px. A series may restyle it but not move it.</p></div>
        <div className="ex"><ArtFrame width={1920} height={1080} pad={140} ground="dark">
          <p className="a-h" style={{'--h1':'110px',textAlign:'center',maxWidth:'none',letterSpacing:'-.03em',lineHeight:1.1,margin:'auto 0'}}>Great is Thy faithfulness<br/>Great is Thy faithfulness<br/>Morning by morning<br/>new mercies I see</p>
        </ArtFrame><p className="ex-l">Lyric slide</p><p className="ex-n">Centered, 110px, four lines max. No logo, no red — lyrics are the one screen where the system gets out of the way.</p></div>
      </div>
      <dl className="spec">
        <dt>Size</dt><dd>1920 × 1080. Action-safe 96px, title-safe 120px. Build at 3840 × 2160 for a 4K wall.</dd>
        <dt>Minimums</dt><dd>Lyrics 100px · Scripture 80px · Labels 30px. Type sits on a scrim or on ink, never on raw photo.</dd>
        <dt>Motion</dt><dd>Cuts and half-second dissolves. Lower thirds slide in from the left over 0.6s. Nothing bounces, scales, or spins.</dd>
      </dl>
    </Sect>

    <Sect id="voice" n="09" eyebrow="Voice" title="Like a friend over" accent="coffee">
      <div className="g2" style={{marginTop:'2rem'}}>
        <div className="box"><h4>How we write</h4><ul>
          <li>Warm, clear, honest. Short and human over clever.</li>
          <li>Written to one real person considering a visit, not to an audience.</li>
          <li>Say Jesus.</li>
          <li>Keep the concrete logistics — times, places, what actually happens.</li>
          <li>Service times use an ampersand: Sundays 9:00 &amp; 11:00 AM.</li>
          <li>No exclamation points. Anywhere.</li>
        </ul></div>
        <div className="box"><h4>Words we don't use</h4><ul>
          <li>Blessed, anointed, season of, powerful, breakthrough, intercede.</li>
          <li>"Encounter" as filler, "pursue God's presence," "stand in unity," "come ready to respond."</li>
          <li>Denominational shorthand generally.</li>
          <li><b>The test:</b> if the sentence could be lifted from any church email in the country, rewrite it.</li>
          <li><b>Never invent</b> a statistic, a quote, a testimonial, or a Scripture reference. Confirm every date and number against a live system, not a document.</li>
        </ul></div>
      </div>
    </Sect>

    <Sect id="never" n="10" eyebrow="Never" title="The short list of" accent="no">
      <div className="g2" style={{marginTop:'2rem'}}>
        <div className="box"><h4>Graphics</h4><ul>
          <li>No icon set. Arrows are typographic. A clock or map-pin icon on a Journey graphic is the tell it wasn't made here.</li>
          <li>No gradients, no drop shadows on type, no glows, no outlined-and-shadowed text.</li>
          <li>No stock photography of people. Our photos or none.</li>
          <li>No color bar, accent stripe, or rule under a heading as decoration.</li>
          <li>No second accent color, no ministry sub-logos, no ministry palettes.</li>
          <li>No emoji.</li>
        </ul></div>
        <div className="box"><h4>The logo</h4><ul>
          <li>Never stretched, rotated, outlined, or shadowed.</li>
          <li>Never recolored beyond the versions on this page.</li>
          <li>Never cropped, ghosted, or used as a watermark or texture.</li>
          <li>Never the red mark on a photograph — reverse the whole lockup.</li>
          <li>Never retyped. If you are setting the words "Journey Church" by hand, use the file.</li>
        </ul></div>
      </div>
      <div className="box" style={{marginTop:'1.5rem',background:'var(--ink-50)',border:'1px solid var(--ink-200)'}}><h4>Still open</h4>
        <p>The vector logo has not been located. Everything here is a PNG rebuilt from the one file we have, which is fine on a screen and not fine on a banner, a shirt, or a sign. Anything printed larger than a flier is waiting on that file. Archivo also needs self-hosting into <code>/fonts</code> before this page is truly production-safe.</p></div>
    </Sect>

    <Sect id="download" n="11" eyebrow="Download" title="Take the" accent="files">
      <p className="t-lead measure muted">PNG with transparency. Print, apparel, and signage need the vector — ask the office.</p>
      <div className="g3" style={{marginTop:'2rem'}}>
        <div className="ex"><p className="ex-l">Horizontal</p><p className="ex-n">The default lockup.</p><div className="dl">
          {['On cream','On dark','All white','All ink','All red'].map(t=><a key={t} href="#download" onClick={(e)=>e.preventDefault()}>{t}</a>)}</div></div>
        <div className="ex"><p className="ex-l">Stacked</p><p className="ex-n">Square formats, apparel, stickers.</p><div className="dl">
          {['On cream','On dark','All white','All ink','All red'].map(t=><a key={t} href="#download" onClick={(e)=>e.preventDefault()}>{t}</a>)}</div></div>
        <div className="ex"><p className="ex-l">Mark &amp; wordmark</p><p className="ex-n">Favicons, app icons, and when the name is already written.</p><div className="dl">
          {['Mark, red','Mark, white','Mark, ink','Wordmark, ink','Wordmark, cream'].map(t=><a key={t} href="#download" onClick={(e)=>e.preventDefault()}>{t}</a>)}</div></div>
        <div className="ex"><p className="ex-l">Photographs</p><p className="ex-n">Our own, cleared for use.</p><div className="dl">
          {['Congregation','Kneeling','Student','Two bowed','Hands open','At the stage','In the crowd','Kneeling, man'].map(t=><a key={t} href="#download" onClick={(e)=>e.preventDefault()}>{t}</a>)}</div></div>
        <div className="ex"><p className="ex-l">Current series</p><p className="ex-n">A House Built for His Presence — finished artwork.</p><div className="dl">
          {['Title 1920 × 1080','Square 1080','Story 1080 × 1920'].map(t=><a key={t} href="#download" onClick={(e)=>e.preventDefault()}>{t}</a>)}</div></div>
        <div className="ex"><p className="ex-l">Color, to copy</p><p className="ex-n">Paste these into anything.</p><div className="dl">
          {['#ff3a3a','#9a1818','#f7f4f0','#0a0a0a'].map(t=><a key={t} href="#color" onClick={(e)=>e.preventDefault()}>{t}</a>)}</div>
          <p className="ex-n" style={{marginTop:'.5rem'}}>Print: Journey red is C0 M85 Y75 K0. Proof it once and keep that swatch.</p></div>
      </div>
    </Sect>

    <section className="on-dark grain b-sect" id="request" style={{borderTop:0}}>
      <div className="container-x">
        <div className="split">
          <div><Eyebrow dot>Need something made</Eyebrow>
            <Headline size="display" accent="guess" style={{marginTop:'.8rem'}}>Ask before you</Headline></div>
          <div className="stack">
            <p className="t-lead">If a project needs something that isn't on this page, that's a system decision, not a page decision. Send it to staff rather than inventing it — that's how a brand stays one brand.</p>
            <p className="t-lead muted">Include the date, the audience, where it will run, and any photos you want used. If you need it for a specific Sunday, say which one.</p>
            <div className="btn-row" style={{marginTop:'.5rem'}}><Button>Request a graphic</Button><Button variant="ghost">Contact the office</Button></div>
          </div>
        </div>
      </div>
    </section>
  </>);
}
window.OverviewScreen = OverviewScreen;
