const { Headline, Eyebrow, Button, ArtFrame, ArtText, Logistics, Logo } = window.JourneyChurchDesignSystem_84738d;
const EV_A = '../../assets';
const EL = EV_A+'/logo';

function EventsScreen(){
  return (<>
    <section className="on-deep grain" style={{paddingTop:'clamp(4rem,8vw,7rem)'}}>
      <div className="container-x">
        <Eyebrow dot>Brand · Events</Eyebrow>
        <Headline as="h1" size="hero" accent="block" style={{marginTop:'1rem',maxWidth:'18ch'}}>Five kinds of event, one logistics</Headline>
        <p className="t-lead muted measure" style={{marginTop:'2rem'}}>The look flexes by what kind of event it is. What never changes is the block that tells a person when, where, and what it costs — set the same way every time. That block is what makes it an event graphic instead of a mood board.</p>
        <div className="btn-row" style={{marginTop:'2.5rem'}}><Button>Request a graphic</Button><Button variant="ghost" href="#download">Download</Button></div>
      </div>
    </section>

    <section className="container-x b-sect" id="block">
      <div className="b-head"><span className="b-n">01</span><div><p className="t-eyebrow text-ember">The block</p>
        <h2 className="display t-h2" style={{margin:'.3rem 0 0'}}>When, where, what it <span className="display-italic">costs</span>.</h2></div></div>
      <div className="g2" style={{marginTop:'2rem'}}>
        <ArtFrame width={1200} height={620} pad={80} ground="dark">
          <div style={{margin:'auto 0'}}><Logistics gap={56} items={[{label:'When',value:'Sun Oct 12 · 6 PM'},{label:'Where',value:'The Chapel'},{label:'Cost',value:'Nothing'}]}/></div>
        </ArtFrame>
        <div className="box"><h4>How it's set</h4><ul>
          <li>Label in Inter 600, 22px, tracked 0.18em, uppercase, muted.</li>
          <li>Value in Inter Tight 600, 36px.</li>
          <li>Two or three cells. Never four — if it needs four, it needs a web page.</li>
          <li>Dates as <b>Sun Oct 12 · 6 PM</b>. Times with the ampersand: <b>9:00 &amp; 11:00 AM</b>.</li>
          <li>It sits directly above the logo, always, so the eye finishes on when and where.</li>
          <li>Confirm every date, room, and figure against a live system — never a document, never memory.</li>
        </ul></div>
      </div>
    </section>

    <section className="container-x b-sect" id="kinds">
      <div className="b-head"><span className="b-n">02</span><div><p className="t-eyebrow text-ember">Five kinds</p>
        <h2 className="display t-h2" style={{margin:'.3rem 0 0'}}>The look flexes. The <span className="display-italic">block</span> doesn't.</h2></div></div>
      <div className="g3" style={{marginTop:'2rem'}}>

        <div className="ex"><ArtFrame width={1080} height={1080} pad={80} tooth>
          <span className="ghost" style={{fontSize:760,right:-40,top:-140}}>HR</span>
          <ArtText eyebrow="Healing Room · Quarterly" size={108} accent="prayed">Come and be</ArtText>
          <Logistics items={[{label:'When',value:'Sun Oct 12 · 6 PM'},{label:'Where',value:'The Chapel'}]}/>
          <Logo base={EL} on="cream" width={280}/>
        </ArtFrame><p className="ex-l">Recurring rhythm</p>
        <p className="ex-n">Healing Room, prayer nights, baptism Sundays. Type on cream, paper tooth, a ghosted initial. Calm, because it comes back.</p></div>

        <div className="ex"><ArtFrame width={1080} height={1080} pad={80} photo={EV_A+'/photo/congregation-hands-raised.jpg'}>
          <ArtText eyebrow="Christmas at Journey" size={180} series>Light Has Come</ArtText>
          <Logistics items={[{label:'Services',value:'Dec 23 & 24 · 5 PM'},{label:'Kids',value:'Every service'}]}/>
          <Logo base={EL} on="photo" width={280}/>
        </ArtFrame><p className="ex-l">Big event</p>
        <p className="ex-n">Christmas, Easter, conferences, outreach. Photo plus the series face — the only event kind that borrows the wide grotesque.</p></div>

        <div className="ex"><ArtFrame width={1080} height={1080}>
          <div style={{height:'100%',display:'grid',gridTemplateRows:'1fr 1fr'}}>
            <div className="on-photo" style={{position:'relative'}}><div className="photo scrim-top"><span style={{backgroundImage:`url('${EV_A}/photo/student-praying.jpg')`}}/></div></div>
            <div className="field-cream tooth" style={{padding:'72px 80px 80px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
              <ArtText eyebrow="Journey Students · Wednesdays" size={86} accent="friend">Bring a</ArtText>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24}}>
                <Logistics items={[{label:'When',value:'7 PM · Room 200'}]} style={{gridTemplateColumns:'1fr'}}/>
                <Logo base={EL} on="cream" width={250}/></div>
            </div>
          </div>
        </ArtFrame><p className="ex-l">Ministry-specific</p>
        <p className="ex-n">Kids, students, women, men. Photo above, cream below. The ministry is named in the eyebrow — there are no sub-logos and no ministry colors.</p></div>

        <div className="ex"><ArtFrame width={1080} height={1080} pad={80} ground="dark">
          <span className="ghost" style={{fontSize:520,right:-50,top:-60,fontStyle:'italic',fontWeight:700}}>groups</span>
          <ArtText eyebrow="Discipleship Groups · Launching January" size={112} accent="renamed">Small groups,</ArtText>
          <Logistics items={[{label:'Sign-ups open',value:'Jan 4 · Lobby'},{label:'Groups start',value:'Week of Jan 18'}]}/>
          <Logo base={EL} on="dark" width={280}/>
        </ArtFrame><p className="ex-l">Discipleship Groups launch</p>
        <p className="ex-n">Ink field with the key word ghosted. The rename is the whole message, so the word is the graphic.</p></div>

        <div className="ex"><ArtFrame width={1080} height={1080} pad={80} tooth>
          <ArtText eyebrow="Arise &amp; Build" size={112} accent="way">Two-thirds of the</ArtText>
          <div style={{display:'flex',flexDirection:'column',gap:28}}>
            <div className="a-meter"><span style={{width:'66%'}}/></div>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:26,letterSpacing:'.14em',textTransform:'uppercase',fontWeight:600,color:'var(--ink-400)'}}><span>Raised · $660,000</span><span>Goal · figure TBC</span></div>
          </div>
          <Logo base={EL} on="cream" width={280}/>
        </ArtFrame><p className="ex-l">Giving &amp; building</p>
        <p className="ex-n">The progress meter is the graphic. Both figures must come from a live source before this runs — never from a document.</p></div>

        <div className="ex"><div className="box" style={{height:'100%'}}><h4>Which kind is it?</h4><ul>
          <li><b>Does it come back?</b> Recurring rhythm. Keep it calm — you'll post it monthly.</li>
          <li><b>Is it once a year and big?</b> Big event. It earns the wide grotesque and a photo.</li>
          <li><b>Is it for one group?</b> Ministry-specific. Name the ministry in the eyebrow.</li>
          <li><b>Is it a change?</b> Launch. Ghost the word that names the change.</li>
          <li><b>Is it about money?</b> Giving. Show progress, or don't post it.</li>
          <li><b>None of these?</b> It's probably not an event graphic. Ask the office.</li>
        </ul></div></div>

      </div>
    </section>

    <section className="container-x b-sect" id="sizes">
      <div className="b-head"><span className="b-n">03</span><div><p className="t-eyebrow text-ember">Sizes &amp; rules</p>
        <h2 className="display t-h2" style={{margin:'.3rem 0 0'}}>Build the square <span className="display-italic">first</span>.</h2></div></div>
      <dl className="spec" style={{borderTop:0,paddingTop:0,marginTop:'1.5rem'}}>
        <dt>Formats</dt><dd>Every event ships as square (1080 × 1080), story (1080 × 1920), and screen (1920 × 1080). Build the square first — the other two follow its decisions.</dd>
        <dt>Safe zones</dt><dd>Square 80px all sides. Story 250px top and bottom, 80px sides. Screen 96px action-safe.</dd>
        <dt>Type floor</dt><dd>Eyebrow 26px · Headline 86px · Logistics label 22px, value 36px · Body 34px.</dd>
        <dt>The series face</dt><dd>Only big events borrow Archivo. Everything recurring stays in Inter Tight, so the calendar doesn't shout every week.</dd>
        <dt>One device</dt><dd>A ghosted numeral, a ghosted word, or a progress meter. One per graphic, never on a photo. The logo is never the device.</dd>
        <dt>Red budget</dt><dd>One red thing per graphic. On cream that's the italic word; on dark or photo it's the eyebrow.</dd>
        <dt>Copy</dt><dd>The eyebrow names the moment. The headline says it in a human sentence. No exclamation points. Copy decisions are Adam's.</dd>
      </dl>
      <div className="box" style={{marginTop:'2rem'}}><h4>The three mistakes we keep making</h4><ul>
        <li><b>Four logistics cells.</b> If the event needs that much explaining, the graphic points at a page.</li>
        <li><b>A calendar or clock icon.</b> There is no icon set. The label says "When."</li>
        <li><b>A number nobody checked.</b> Every figure comes from a live system. A wrong dollar amount on a giving graphic is worse than no graphic.</li>
      </ul></div>
    </section>

    <section className="container-x b-sect" id="download">
      <div className="b-head"><span className="b-n">04</span><div><p className="t-eyebrow text-ember">Download</p>
        <h2 className="display t-h2" style={{margin:'.3rem 0 0'}}>Photos and the <span className="display-italic">logo</span>.</h2></div></div>
      <div className="g3" style={{marginTop:'2rem'}}>
        <div className="ex"><p className="ex-l">Logo, for the corner</p><p className="ex-n">Pick by what's behind it.</p>
          <div className="dl">{['On cream','On dark','On photo'].map(t=><a key={t} href="#download" onClick={(e)=>e.preventDefault()}>{t}</a>)}</div></div>
        <div className="ex"><p className="ex-l">Photographs</p><p className="ex-n">Our own, cleared for use. Apply the photo treatment before type goes on.</p>
          <div className="dl">{['Congregation','Kneeling','Student','Two bowed','Hands open','At the stage'].map(t=><a key={t} href="#download" onClick={(e)=>e.preventDefault()}>{t}</a>)}</div></div>
        <div className="ex"><p className="ex-l">Need something else?</p><p className="ex-n">A new event kind, a size that isn't here, or a photo we don't have — that's a system decision, not a page decision.</p>
          <div className="dl"><a href="#download" onClick={(e)=>e.preventDefault()}>Contact the office →</a></div></div>
      </div>
      <div className="box" style={{marginTop:'2rem',background:'var(--ink-50)',border:'1px solid var(--ink-200)'}}><h4>Before you post</h4><ul>
        <li><b>Dates and rooms confirmed</b> against Planning Center or the live site.</li>
        <li><b>Faces cleared.</b> Anyone who hasn't agreed to appear comes out. Children need a parent's yes.</li>
        <li><b>Copy approved.</b> Every headline on this page is a placeholder shape, not approved copy.</li>
        <li><b>Alt text written</b> — describe what is happening, not just what is pictured.</li>
      </ul></div>
    </section>
  </>);
}
window.EventsScreen = EventsScreen;
